"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'fonziSecret',
    URI: process.env.MONGODB_URI ||
        'mongodb+srv://root:root@cluster0.9htba.mongodb.net/ecoquartz',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    CLOUDINARY_URL: 'cloudinary://478691736723186:8JXV9QyN4JXtEHteDtTPtQX_Uys@dlscoccia',
};
