const fsPromises = require("fs/promises");
const p1 = "./file1.txt";
const p2 = "./file2.txt";
const utf8 = "utf8";
const cout = console.log;

// 依存関係のない非同期処理を並列実行する
// Promise.all関数にプロミスオブジェクトを配列で渡す
Promise.all([fsPromises.readFile(p1, utf8), fsPromises.readFile(p2, utf8)])
  .then(([data1, data2]) => {
    // すべての結果が取得できた時点でthen()メソッドのコールバック関数が実行される
    // thenのコールバックに2つの結果が渡される
    cout(data1);
    cout(data2);
  })
  .catch((e) => {
    cout(e);
  });

// Promisesオブジェくトの1つでも失敗すれば全部失敗する。（catchメソッドに処理が移る）
