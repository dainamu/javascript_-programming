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

  then(onFulfilled, onRejected) {
    // TODO: 実装
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
}
