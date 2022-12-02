onconnect = (e) => {
  const port = e.ports[0];
  console.log('port :', port);

  port.onmessage = (data) => {
    console.log('data :', data);
    port.postMessage("received data!")
  }
}