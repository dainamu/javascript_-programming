const fsPromises = require("fs/promises");
// Promisesを使った非同期処理の直列実行

fsPromises
  .readFile("./file1.txt", "utf8") //1つめのファイルを読み取る(Promiseオブジェクトを返す)
  .then((data) => {
    // 1つ目のファイル読み取りが正常終了したらこちら
    console.log(data);
    return fsPromises.readFile("./file2.txt", "utf8"); // ★2つ目のファイルを読み取る(Promisesオブジェクトを返す)
  })
  .then((data2) => {
    // 2つ目のファイル読み取りが正常終了したらこちら
    console.log(data2);
  })
  .catch((e) => {
    // どこかでエラーが発生したらこちら
    console.log(e);
  });
