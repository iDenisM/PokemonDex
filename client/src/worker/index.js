import { wrap, releaseProxy } from "comlink";
import { useEffect, useState, useMemo } from "react";

export const useAddPlayerCards = (playerCards) => {
  const { workerApi } = useWorker();

  useEffect(() => {
    const fetchData = async () => {
      const cards = await workerApi.addPlayerCards(playerCards);
    };
    
    if (playerCards.length > 0) {
      fetchData();
    }
  }, [workerApi, playerCards]);
}

export const useStartGame = (playerCards) => {
  const [data, setData] = useState({
    isStarting: false,
    botCards: [],
    ready: false
  });

  const { workerApi } = useWorker();

  useEffect(() => {
    setData({ isStarting: true, botCards: [], ready: false });

    const fetchData = async () => {
      const cards = await workerApi.start();

      setData({ isStarting: false, botCards: cards, ready: cards })
    };
 
    fetchData();
  }, [workerApi, playerCards, setData]);

  return data;
}

export const useEndGame = () => {
  const [data, setData] = useState({
    isCalculating: false,
    botCards: [],
    ready: false
  });

  const { workerApi } = useWorker();

  useEffect(() => {
    setData({ isCalculating: true, botCards: [], ready: false });

    workerApi
      .start()
      .then(started => {
        setData({ isCalculating: false, botCards: started, ready: started })
      });
  }, [workerApi, setData]);

  return data;
}

const useWorker = () => {
  // memoise a worker so it can be reused; create one worker up front
  // and then reuse it subsequently; no creating new workers each time
  const workerApiAndCleanup = useMemo(() => makeWorkerApiAndCleanup(), []);

  useEffect(() => {
    const { cleanup } = workerApiAndCleanup;

    // cleanup our worker when we're done with it
    return () => {
      cleanup();
    };
  }, [workerApiAndCleanup]);

  return workerApiAndCleanup;
}

/**
 * Creates a worker, a cleanup function and returns it
 */
const makeWorkerApiAndCleanup = () => {
  // Here we create our worker and wrap it with comlink so we can interact with it
  const worker = new Worker("./WorkerState", {
    name: "WorkerState",
    type: "module"
  });

  const workerApi = wrap(worker);

  // A cleanup function that releases the comlink proxy and terminates the worker
  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  const workerApiAndCleanup = { workerApi, cleanup };

  return workerApiAndCleanup;
}