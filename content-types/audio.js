//CHECKSUM:709336c0c16b18cf71b5af0ba371b4454ac10dab93818148b12e70250642d18c
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_audio',
    group: 'Built-in Messages',
    title: 'contentTypes.audio.title',
    jsonSchema: {
        description: 'contentTypes.audio.description',
        type: 'object',
        $subtype: 'audio',
        required: ['audio'],
        properties: {
            audio: {
                type: 'string',
                $subtype: 'audio',
                $filter: '.mp3',
                title: 'contentTypes.audio.title'
            },
            title: {
                type: 'string',
                title: 'contentTypes.audio.audioLabel'
            },
            ..._base_1.default.typingIndicators
        }
    },
    uiSchema: {
        title: {
            'ui:field': 'i18n_field'
        }
    },
    computePreviewText: (formData) => {
        if (!formData.audio) {
            return '';
        }
        const link = _utils_1.default.formatURL(formData.BOT_URL, formData.audio);
        const title = formData.title ? ' | ' + formData.title : '';
        if (_utils_1.default.isUrl(link)) {
            const fileName = _utils_1.default.extractFileName(formData.audio);
            return `Audio: (${fileName}) ${title}`;
        }
        else {
            return `Expression: ${link}${title}`;
        }
    },
    renderElement: (data) => _utils_1.default.extractPayload('audio', data)
};
exports.default = contentType;
//# sourceMappingURL=audio.js.map