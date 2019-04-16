"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Block_1 = __importDefault(require("./Block"));
var Blockchain = /** @class */ (function () {
    function Blockchain() {
        this.chain = [];
        this.chain = [this.createGenesisBlock()];
    }
    Blockchain.prototype.createGenesisBlock = function () {
        return new Block_1.default([], Date.now(), '0');
    };
    Blockchain.prototype.add = function (block) {
        var hash = this.getPreviousBlock().hash;
        block.previousHash = hash;
        this.chain.push(block);
    };
    Blockchain.prototype.getPreviousBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    return Blockchain;
}());
exports.default = Blockchain;
