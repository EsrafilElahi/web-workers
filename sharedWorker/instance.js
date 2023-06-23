// In the main thread
const sharedWorker = new SharedWorker('shared-worker.js');

sharedWorker.port.onmessage = function(event) {
  console.log('Message from shared worker:', event.data);
};

sharedWorker.port.postMessage('Hello from main thread!');

// In the shared-worker.js file
self.onconnect = function(event) {
  const port = event.ports[0];

  port.onmessage = function(event) {
    console.log('Message from main thread:', event.data);

    // Perform some task
    const result = performTask();

    // Send the result back to the main thread
    port.postMessage(result);
  };
};
