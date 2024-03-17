// async は非同期関数を宣言するためのキーワード
// asyncつけるとPromiseオブジェクト                     を返すようになる
const getString = async () => {
  return "Hello world";
};

const s = getString();
console.log(s); // Promise { 'Hello world' }
