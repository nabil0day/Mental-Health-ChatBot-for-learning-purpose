//CHECKSUM:8d25cf0efdd00c90d979a74215ffd6bc1479bcfc2b2920de74caaeb51877f43f
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const isBpUrl = (str) => {
    const re = /^\/api\/.*\/bots\/.*\/media\/.*/;
    return re.test(str);
};
exports.default = {
    formatURL: (baseUrl, url) => {
        return isBpUrl(url) ? `${baseUrl}${url}` : url;
    },
    isUrl: (str) => {
        try {
            new url_1.default.URL(str);
            return true;
        }
        catch {
            return false;
        }
    },
    extractPayload: (type, data) => {
        const payload = {
            type,
            ...data
        };
        delete payload.event;
        delete payload.temp;
        delete payload.user;
        delete payload.session;
        delete payload.bot;
        delete payload.BOT_URL;
        return payload;
    },
    extractFileName: (file) => {
        let fileName = path_1.default.basename(file);
        if (fileName.includes('-')) {
            fileName = fileName.split('-').slice(1).join('-');
        }
        return fileName;
    }
};
//# sourceMappingURL=_utils.js.map