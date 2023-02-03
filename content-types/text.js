//CHECKSUM:b60b6f1be19d88489d48b97def9da76b644f892323e3fc05401ed1361a95410f
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_text',
    group: 'Built-in Messages',
    title: 'text',
    jsonSchema: {
        description: 'contentTypes.text.description',
        type: 'object',
        required: ['text'],
        properties: {
            text: {
                type: 'string',
                title: 'contentTypes.text.message'
            },
            variations: {
                type: 'array',
                title: 'contentTypes.text.alternatives',
                items: {
                    type: 'string',
                    default: ''
                }
            },
            ..._base_1.default.useMarkdown,
            ..._base_1.default.typingIndicators
        }
    },
    uiSchema: {
        text: {
            'ui:field': 'i18n_field',
            $subtype: 'textarea'
        },
        variations: {
            'ui:options': {
                orderable: false
            }
        }
    },
    computePreviewText: (formData) => formData.text,
    renderElement: (data) => {
        return _utils_1.default.extractPayload('text', data);
    }
};
exports.default = contentType;
//# sourceMappingURL=text.js.map