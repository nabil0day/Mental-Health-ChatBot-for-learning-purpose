//CHECKSUM:6468f4d8670cca8265bb629528a7eb61e87a5a4f4d5c782ff2ccd30624386f9e
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'dropdown',
    group: 'Extensions',
    title: 'contentTypes.dropdown.title',
    jsonSchema: {
        title: 'contentTypes.dropdown.desc',
        type: 'object',
        required: ['message'],
        properties: {
            message: {
                type: 'string',
                title: 'Message'
            },
            buttonText: {
                type: 'string',
                title: 'contentTypes.dropdown.buttonText',
                description: 'contentTypes.dropdown.buttonDesc',
                default: ''
            },
            placeholderText: {
                type: 'string',
                title: 'contentTypes.dropdown.placeholderText',
                default: 'Select a choice'
            },
            options: {
                type: 'array',
                title: 'contentTypes.dropdown.optionsList',
                items: {
                    type: 'object',
                    required: ['label'],
                    properties: {
                        label: {
                            description: 'contentTypes.dropdown.itemLabel',
                            type: 'string',
                            title: 'Label'
                        },
                        value: {
                            description: 'contentTypes.dropdown.itemValue',
                            type: 'string',
                            title: 'Value'
                        }
                    }
                }
            },
            width: {
                type: 'number',
                title: 'contentTypes.dropdown.widthTitle',
                description: 'contentTypes.dropdown.widthDesc'
            },
            displayInKeyboard: {
                type: 'boolean',
                title: 'contentTypes.dropdown.asKeyboardTitle',
                description: 'contentTypes.dropdown.asKeyboardDesc',
                default: true
            },
            allowCreation: {
                type: 'boolean',
                title: 'contentTypes.dropdown.allowCreate'
            },
            allowMultiple: {
                type: 'boolean',
                title: 'contentTypes.dropdown.allowMultiple'
            },
            ..._base_1.default.useMarkdown,
            ..._base_1.default.typingIndicators
        }
    },
    uiSchema: {
        message: {
            'ui:field': 'i18n_field',
            $subtype: 'textarea'
        },
        buttonText: {
            'ui:field': 'i18n_field'
        },
        options: {
            'ui:field': 'i18n_array'
        }
    },
    computePreviewText: (formData) => formData.message && 'Dropdown: ' + formData.message,
    renderElement: (data) => _utils_1.default.extractPayload('dropdown', data)
};
exports.default = contentType;
//# sourceMappingURL=dropdown.js.map