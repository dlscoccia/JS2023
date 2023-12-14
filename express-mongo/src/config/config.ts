export default {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    URI:
        process.env.MONGODB_URI ||
        '',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD,
    CLOUDINARY_URL:
        '',
};
