"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Authorization failed!' });
    }
    try {
        const decodedToken = (0, jwtUtils_1.verifyToken)(token);
        req.body.userId = decodedToken.userId;
        next();
    }
    catch (error) {
        return res.status(401).json({ error: 'Authorization failed!' });
    }
};
exports.authMiddleware = authMiddleware;
