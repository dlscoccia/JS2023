"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoiValidationSchema = void 0;
const Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number().default(3002),
    DEFAULT_LIMIT: Joi.number().default(6),
    DEFAULT_OFFSET: Joi.number().default(0),
});
//# sourceMappingURL=joi.validation.js.map