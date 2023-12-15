"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EXPORT_HELPER_ID = 'plugin-vue:export-helper';
const helperCode = `
export default (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val
  }
  return sfc
}
`;
function virtualPlugin() {
    return {
        name: 'vite:vue-export-helper',
        enforce: 'pre',
        resolveId(source) {
            if (source === EXPORT_HELPER_ID) {
                return `${EXPORT_HELPER_ID}.js`;
            }
            return null;
        },
        load(source) {
            if (source === `${EXPORT_HELPER_ID}.js`) {
                return helperCode;
            }
            return null;
        },
    };
}
exports.default = virtualPlugin;
//# sourceMappingURL=index.js.map