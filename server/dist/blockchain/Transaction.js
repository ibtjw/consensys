"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction = /** @class */ (function () {
    function Transaction(source, target, amount) {
        this.source = source;
        this.target = target;
        this.amount = amount;
        this.timestamp = Date.now();
        this.signature = null;
    }
    Transaction.prototype.sign = function (tx, key) {
        this.signature = key.sign(JSON.stringify(tx));
    };
    return Transaction;
}());
exports.default = Transaction;
