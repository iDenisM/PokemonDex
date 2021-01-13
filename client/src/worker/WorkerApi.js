import { wrap, releaseProxy } from "comlink";
import { useEffect, useMemo } from "react";

export const WorkerApi = () => {
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
  const worker = new WorkerApi('./WorkerState', { name: 'WorkerState', type: 'module' });
  const workerApi = wrap(worker);

  // A cleanup function that releases the comlink proxy and terminates the worker
  const cleanup = () => {
    workerApi[releaseProxy]();
    worker.terminate();
  };

  const workerApiAndCleanup = { workerApi, cleanup };

  return workerApiAndCleanup;
}

/**
 * @copyright https://blog.logrocket.com/integrating-web-workers-in-a-react-app-with-comlink/
 */