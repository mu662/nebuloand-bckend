"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcryptUtils_1 = require("../utils/bcryptUtils");
const jwtUtils_1 = require("../utils/jwtUtils");
const User_1 = require("../entity/User");
const authService_1 = require("../services/authService");
const signup = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        console.log("req.body", req.body);
        res.json({ test: "123" });
        return;
        const hashedPassword = await (0, bcryptUtils_1.hashPassword)(password);
        const user = new User_1.User();
        user.name = name;
        user.email = email;
        user.username = username;
        user.password = hashedPassword;
        const savedUser = await authService_1.authService.createUser(user);
        const token = (0, jwtUtils_1.generateToken)({ userId: savedUser.id });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await authService_1.authService.getUserByUsername(username);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isMatch = await (0, bcryptUtils_1.comparePasswords)(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = (0, jwtUtils_1.generateToken)({ userId: user.id });
        res.json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.login = login;
