"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
exports.authRoutes = router;
router.post('/signup', authController_1.signup);
router.post('/login', authController_1.login);
