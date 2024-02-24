setInterval(() => {
  time.innerText = Date.now();
});

const sendRequest = () => {
  const request = new XMLHttpRequest();
  const url = "https://httpbin.org/delay/1";
  request.open("GET", url, false);
  request.send(null);
  console.log("通信完了");
};
