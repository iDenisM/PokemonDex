import { wrap } from 'comlink';
const worker = new Worker('./WorkerState', { name: 'WorkerState', type: 'module' });

export const start = () => {
  const workerApi = wrap(worker);
  workerApi.start();    
}

export const reset = () => {
  const workerApi = wrap(worker);
  workerApi.reset();    
}

export const end = () => {
  const workerApi = wrap(worker);
  workerApi.end();    
}