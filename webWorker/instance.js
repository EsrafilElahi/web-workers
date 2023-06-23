// In the main thread
const worker = new Worker('worker.js');

worker.postMessage('Hello from main thread!');

worker.onmessage = function(event) {
  console.log('Message from worker:', event.data);
};

// In the worker.js file
self.onmessage = function(event) {
  console.log('Message from main thread:', event.data);

  // Perform some time-consuming task
  const result = performTask();

  // Send the result back to the main thread
  self.postMessage(result);
};
