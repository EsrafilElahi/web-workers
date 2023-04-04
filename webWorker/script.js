const worker = new Worker('./worker.js');

const calBtn = document.getElementById("cal");
const bgBtn = document.getElementById("bg");
const res = document.getElementById("res");


calBtn.addEventListener("click", () => {
  worker.postMessage("connect");
})

worker.onmessage = (msg) => {
  console.log('msg ', msg)
  res.innerHTML = msg.data
}


bgBtn.addEventListener("click", () => {

  if (document.body.style.backgroundColor == 'blue') {
    document.body.style.backgroundColor = 'red'
  } else {
    document.body.style.backgroundColor = 'blue'
  }

})
