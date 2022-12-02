const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");


if (!!window.SharedWorker) {

  const sharedWorker = new SharedWorker("worker.js");

  num1.onchange = (e) => {
    sharedWorker.port.postMessage([num1.value]);
    console.log('post message 1 :', num1.value)
  }

  num2.onchange = () => {
    sharedWorker.port.postMessage([num2.value]);
    console.log('post message 2 :', num2.value)
  }
}