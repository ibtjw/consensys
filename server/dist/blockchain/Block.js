"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var Block = /** @class */ (function () {
    function Block(transactions, timestamp, previousHash) {
        if (previousHash === void 0) { previousHash = ''; }
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.hash = this.calculateHash("\n      " + previousHash + " + " + timestamp + " + " + JSON.stringify(transactions) + "\n    ");
    }
    Block.prototype.calculateHash = function (string) {
        return crypto_1.default
            .createHash('sha256')
            .update(string)
            .digest('hex');
    };
    return Block;
}());
exports.default = Block;
