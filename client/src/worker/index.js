import { wrap, releaseProxy } from "comlink";
import { useEffect, useState, useMemo } from "react";

export const useAddPlayerCards = (playerCards) => {
  const { workerApi } = useWorker();

  useEffect(() => {
    const fetchData = async () => {
      const engine = await workerApi.engine;
      const cards = await workerApi.addPlayerCards(playerCards);
      debugger
    };
    
    if (playerCards.length > 0) {
      fetchData();
    }
  }, [workerApi, playerCards]);
}

export const useAddCards = (allCards) => {
  const { workerApi } = useWorker();

  useEffect(() => {
    const fetchData = async () => {
      const cards = await workerApi.addCards(allCards);
    };
    
    fetchData();
  }, [workerApi, allCards]);
}

export const useStartGame = (tryStartGame) => {
  const { workerApi } = useWorker();
  const [data, setData] = useState({
    isStarting: false,
    botCards: [],
    started: false
  });
  
  useEffect(() => {
    setData({ isStarting: true, botCards: [], started: false });

    const fetchData = async () => {
      const cards = await workerApi.start();
      console.log('---Data Fetched');
      setData({ isStarting: false, botCards: cards, started: cards })
    };

    fetchData();
  }, [workerApi, tryStartGame, setData]);

  return data;
}

/**
 * NOT READY YET
 */
export const useEndGame = () => {
  const [data, setData] = useState({
    isStarting: false,
    botCards: [],
    started: false
  });

  const { workerApi } = useWorker();

  useEffect(() => {
    setData({ isStarting: true, botCards: [], started: false });

    workerApi
      .start()
      .then(ready => {
        setData({ isStarting: false, botCards: ready, started: ready })
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