//CHECKSUM:a116aa803427d2dffbaae19951bf5ad5611ddf8400ce05db79c46a0763ac3929
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_image',
    group: 'Built-in Messages',
    title: 'image',
    jsonSchema: {
        description: 'contentTypes.image.description',
        type: 'object',
        required: ['image'],
        properties: {
            image: {
                type: 'string',
                $subtype: 'image',
                $filter: '.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*',
                title: 'contentTypes.image.title'
            },
            title: {
                type: 'string',
                title: 'contentTypes.image.imageLabel',
                description: 'contentTypes.image.labelDesc'
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
        if (!formData.image) {
            return '';
        }
        const link = _utils_1.default.formatURL(formData.BOT_URL, formData.image);
        const title = formData.title ? ' | ' + formData.title : '';
        if (_utils_1.default.isUrl(link)) {
            const fileName = _utils_1.default.extractFileName(formData.image);
            return `Image: [![${formData.title || ''}](<${link}>)](<${link}>) - (${fileName}) ${title}`;
        }
        else {
            return `Expression: ${link}${title}`;
        }
    },
    renderElement: (data) => _utils_1.default.extractPayload('image', data)
};
exports.default = contentType;
//# sourceMappingURL=image.js.map