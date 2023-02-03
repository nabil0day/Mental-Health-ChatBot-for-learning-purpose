//CHECKSUM:97fb153b209906ebb0daada6820944bcb2733188841a0787cf93049620bde3e1
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_video',
    group: 'Built-in Messages',
    title: 'contentTypes.video.title',
    jsonSchema: {
        description: 'contentTypes.video.description',
        type: 'object',
        $subtype: 'video',
        required: ['video'],
        properties: {
            video: {
                type: 'string',
                $subtype: 'video',
                $filter: '.mp4',
                title: 'contentTypes.video.title'
            },
            title: {
                type: 'string',
                title: 'contentTypes.video.videoLabel'
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
        if (!formData.video) {
            return '';
        }
        const link = _utils_1.default.formatURL(formData.BOT_URL, formData.video);
        const title = formData.title ? ' | ' + formData.title : '';
        if (_utils_1.default.isUrl(link)) {
            const fileName = _utils_1.default.extractFileName(formData.video);
            return `Video: (${fileName}) ${title}`;
        }
        else {
            return `Expression: ${link}${title}`;
        }
    },
    renderElement: (data) => _utils_1.default.extractPayload('video', data)
};
exports.default = contentType;
//# sourceMappingURL=video.js.map