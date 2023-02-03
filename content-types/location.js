//CHECKSUM:9f9a244e2c0fc217b5ad0d996e0c07935d1f31644fb8d105b72fe2c14ac1c052
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(require("./_base"));
const _utils_1 = __importDefault(require("./_utils"));
const contentType = {
    id: 'builtin_location',
    group: 'Built-in Messages',
    title: 'contentTypes.location.title',
    jsonSchema: {
        description: 'contentTypes.location.description',
        type: 'object',
        $subtype: 'location',
        required: ['latitude', 'longitude'],
        properties: {
            latitude: {
                type: 'number',
                title: 'contentTypes.location.latitude'
            },
            longitude: {
                type: 'number',
                title: 'contentTypes.location.longitude'
            },
            address: {
                type: 'string',
                title: 'contentTypes.location.address'
            },
            title: {
                type: 'string',
                title: 'contentTypes.location.label'
            },
            ..._base_1.default.typingIndicators
        }
    },
    uiSchema: {},
    computePreviewText: (formData) => `${formData.latitude}° ${formData.longitude}°`,
    renderElement: (data) => _utils_1.default.extractPayload('location', data)
};
exports.default = contentType;
//# sourceMappingURL=location.js.map