"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePath = exports.toPascalCase = exports.toKebabCase = void 0;
const path_1 = __importDefault(require("path"));
/**
 * 转换短横线命名
 * @param string
 * @returns
 */
const toKebabCase = (string) => {
    return string.replace(/[A-Z]+/g, (match, offset) => {
        return `${offset > 0 ? "-" : ""}${match.toLocaleLowerCase()}`;
    });
};
exports.toKebabCase = toKebabCase;
/**
 * 帕斯卡命名（首字母大写）
 * @param string
 * @returns
 */
const toPascalCase = (string) => {
    return string
        .replace(/^./, match => match.toLocaleUpperCase())
        .replace(/-(.)/g, (match, p1) => {
        return p1.toLocaleUpperCase();
    });
};
exports.toPascalCase = toPascalCase;
const resolvePath = (root, ...relativePath) => {
    return path_1.default.resolve(root, ...relativePath);
};
exports.resolvePath = resolvePath;
//# sourceMappingURL=helper.js.map