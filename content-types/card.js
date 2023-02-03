//CHECKSUM:b72d920a13636f406c3eea1a3b7b3cf74ec539f4bb02a616f196a8338237f86b
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cardSchema = void 0;
const _utils_1 = __importDefault(require("./_utils"));
const action_button_1 = __importDefault(require("./action_button"));
exports.cardSchema = {
    description: 'contentTypes.card.description',
    type: 'object',
    required: ['title'],
    properties: {
        title: {
            type: 'string',
            title: 'title'
        },
        subtitle: {
            type: 'string',
            title: 'subtitle'
        },
        image: {
            type: 'string',
            $subtype: 'image',
            $filter: '.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*',
            title: 'image'
        },
        actions: {
            type: 'array',
            title: 'contentTypes.card.actionButtons',
            items: action_button_1.default.jsonSchema
        }
    }
};
const contentType = {
    id: 'builtin_card',
    group: 'Built-in Messages',
    title: 'contentTypes.card.title',
    jsonSchema: exports.cardSchema,
    uiSchema: {},
    computePreviewText: (formData) => formData.title && `Card: ${formData.title}`,
    renderElement: (data) => _utils_1.default.extractPayload('card', data)
};
exports.default = contentType;
//# sourceMappingURL=card.js.map