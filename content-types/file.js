//CHECKSUM:7ee7d7cc3c737be043d66b54891acccea7a4fc0d9e4c6126b9a5870d107d63a2
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_file',
    group: 'Built-in Messages',
    title: 'contentTypes.file.title',
    jsonSchema: {
        description: 'contentTypes.file.description',
        type: 'object',
        $subtype: 'file',
        required: ['file'],
        properties: {
            file: {
                type: 'string',
                $subtype: 'file',
                $filter: '.pdf',
                title: 'contentTypes.file.title'
            },
            title: {
                type: 'string',
                title: 'contentTypes.file.fileLabel'
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
        if (!formData.file) {
            return '';
        }
        const link = _utils_1.default.formatURL(formData.BOT_URL, formData.file);
        const title = formData.title ? ' | ' + formData.title : '';
        if (_utils_1.default.isUrl(link)) {
            const fileName = _utils_1.default.extractFileName(formData.file);
            return `File: (${fileName}) ${title}`;
        }
        else {
            return `Expression: ${link}${title}`;
        }
    },
    renderElement: (data) => _utils_1.default.extractPayload('file', data)
};
exports.default = contentType;
//# sourceMappingURL=file.js.map