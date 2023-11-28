"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function cssjsPlugin() {
    return {
        name: 'vite:cssjs',
        generateBundle(outputOptions, bundle) {
            return __awaiter(this, void 0, void 0, function* () {
                for (const filename of Object.keys(bundle)) {
                    const chunk = bundle[filename];
                    this.emitFile({
                        type: 'asset',
                        fileName: filename.replace('index.js', 'css.js'),
                        // @ts-ignore
                        source: chunk.code.replace(/\.less/g, '.css'),
                    });
                }
            });
        },
    };
}
exports.default = cssjsPlugin;
//# sourceMappingURL=index.js.map