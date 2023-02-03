//CHECKSUM:488621991a9a93fdad6c768bdffd3d48bd0ad6de52d3ef1d2335940cb29baae7
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contentType = {
    id: 'builtin_action-button',
    group: 'Built-in Messages',
    title: 'contentTypes.actionButton.title',
    jsonSchema: {
        description: 'contentTypes.actionButton.description',
        type: 'object',
        required: ['action', 'title'],
        properties: {
            title: {
                type: 'string',
                title: 'contentTypes.actionButton.buttonTitle'
            },
            action: {
                type: 'string',
                enum: ['Say something', 'Open URL', 'Postback'],
                default: 'Say something'
            }
        },
        dependencies: {
            action: {
                oneOf: [
                    {
                        properties: {
                            action: {
                                enum: ['Say something']
                            },
                            text: {
                                type: 'string',
                                title: 'Enter text or the ID of a content element (ex: #!builtin_text-myid)'
                            }
                        }
                    },
                    {
                        properties: {
                            action: {
                                enum: ['Open URL']
                            },
                            url: {
                                type: 'string',
                                title: 'Enter a valid URL'
                            }
                        },
                        required: ['url']
                    },
                    {
                        properties: {
                            action: {
                                enum: ['Postback']
                            },
                            payload: {
                                type: 'string'
                            }
                        },
                        required: ['payload']
                    }
                ]
            }
        }
    },
    uiSchema: {},
    computePreviewText: (formData) => `Action: ${formData.action}`,
    renderElement: (data, channel) => [],
    hidden: true
};
exports.default = contentType;
//# sourceMappingURL=action_button.js.map