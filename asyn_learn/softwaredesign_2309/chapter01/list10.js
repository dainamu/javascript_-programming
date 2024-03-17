// Promiseを返す（非同期処理）

console.log("表示順：1");
fetch("https://httpbin.org/delay/5")
  .then((res) => {
    console.log("表示順：3");
  })
  .catch((e) => {
    console.log(e);
  });

console.log("表示順：2");
