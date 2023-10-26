"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.PORT || 3001,
    defaultLimit: process.env.DEFAULT_LIMIT || 5,
    defaultOffset: process.env.DEFAULT_OFFSET || 0,
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=env.config.js.map