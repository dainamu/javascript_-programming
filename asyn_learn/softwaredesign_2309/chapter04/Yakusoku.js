// オリジナルのプロミスを作成してみる
class Yakusoku {
  //コンストラクタ―
  constructor(executor) {
    // 内部状態 pending / fulfilled / rejected
    this.state = "pending";

    this.resolvedValue = null; // 成功時の値を保持
    this.rejectedValue = null; // 失敗時の値を保持

    // TODO: 実装

    // 成功時に呼ばれる関数
    const resolve = (resolveValue) => {
      if (this.state !== "pending") {
        // pendingでなければなにもせずにリターン
        return; // 内部状態の変更は一度だけ。
      }
      this.state = "fulfilled";
      this.resolvedValue = resolveValue;
    };

    // 失敗時に呼ばれる関数
    const reject = (rejectedValue) => {
      if (this.state !== "pending") {
        // pendingでなければなにもせずにリターン
        return; // 内部状態の変更は一度だけ。
      }

      this.state = "rejected";
      this.rejectedValue = rejectedValue;
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // thenは2つの関数を引数にとる
  // Promiseの状態がfulfilledになったら1番目の関数が、
  // rejectedになったら2番目の関数が実行される

  then(onFulfilled, onRejected) {
    // TODO: 実装
    if (typeof onFulfilled !== "function") {
      // identify function
      // 関数でない場合

      onFulfilled = (value) => {
        return value; // 入力値をそのまま返すだけ
      };
    }
    if (typeof onRejected !== "function") {
      onRejected = (value) => {
        // thrower function
        throw value; // 入力値を例外として送出
      };
    }
    if (this.state === "fulfilled") {
      onFulfilled(this.resolvedValue);
    }
    if (this.state === "rejected") {
      onRejected(this.rejectedValue);
    }
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}
