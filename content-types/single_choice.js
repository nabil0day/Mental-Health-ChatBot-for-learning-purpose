//CHECKSUM:f5b77218ee866dffd25e80939066f8ae9292f1dd23086ca6eb2d80af9e8d580f
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_single-choice',
    group: 'Built-in Messages',
    title: 'contentTypes.singleChoice.title',
    jsonSchema: {
        description: 'contentTypes.singleChoice.description',
        type: 'object',
        required: ['choices'],
        properties: {
            text: {
                type: 'string',
                title: 'message'
            },
            isDropdown: {
                type: 'boolean',
                title: 'Show as a dropdown'
            },
            dropdownPlaceholder: {
                type: 'string',
                title: 'Dropdown placeholder',
                default: 'Select...'
            },
            choices: {
                type: 'array',
                title: 'contentTypes.singleChoice.choice',
                minItems: 1,
                maxItems: 10,
                items: {
                    type: 'object',
                    required: ['title', 'value'],
                    properties: {
                        title: {
                            description: 'contentTypes.singleChoice.itemTitle',
                            type: 'string',
                            title: 'Message'
                        },
                        value: {
                            description: 'contentTypes.singleChoice.itemValue',
                            type: 'string',
                            title: 'Value'
                        }
                    }
                }
            },
            ..._base_1.default.useMarkdown,
            disableFreeText: {
                type: 'boolean',
                title: 'contentTypes.disableFreeText',
                default: false
            },
            ..._base_1.default.typingIndicators
        }
    },
    uiSchema: {
        text: {
            'ui:field': 'i18n_field',
            $subtype: 'textarea'
        },
        choices: {
            'ui:field': 'i18n_array'
        }
    },
    computePreviewText: (formData) => formData.choices && formData.text && `Choices (${formData.choices.length}) ${formData.text}`,
    renderElement: (data) => _utils_1.default.extractPayload('single-choice', data),
    hidden: true
};
exports.default = contentType;
//# sourceMappingURL=single_choice.js.map