"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
// encoding the raw data so that it can be processed - returns as one large string
const matches = fs_1.default.readFileSync('football.csv', {
    encoding: 'utf-8'
});
console.log(matches);
