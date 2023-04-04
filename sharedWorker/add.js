const num3 = document.getElementById("number3");

if (!!window.SharedWorker) {

  const sharedWorker = new SharedWorker("worker.js");

  num3.onchange = () => {
    sharedWorker.port.postMessage([num3, value]);
    console.log('post message 2 :', num3.value);
  }
  console.log('sharedWorker :', sharedWorker);
}
