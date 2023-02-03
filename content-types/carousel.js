//CHECKSUM:eab931207ddacc7b25d42c93819643e63a80b3da54f5ed935d817a31910ea2e9
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const card_1 = require("./card");
const contentType = {
    id: 'builtin_carousel',
    group: 'Built-in Messages',
    title: 'contentTypes.carousel.title',
    jsonSchema: {
        description: 'contentTypes.carousel.description',
        type: 'object',
        required: ['items'],
        properties: {
            items: {
                type: 'array',
                title: 'contentTypes.carousel.cards',
                items: card_1.cardSchema
            },
            ..._base_1.default.typingIndicators
        }
    },
    computePreviewText: (formData) => formData.items && `Carousel: (${formData.items.length}) ${formData.items[0].title}`,
    renderElement: (data) => _utils_1.default.extractPayload('carousel', data)
};
exports.default = contentType;
//# sourceMappingURL=carousel.js.map