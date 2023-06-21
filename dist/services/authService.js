"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const config_1 = require("../config");
const User_1 = require("../entity/User");
exports.authService = {
    async createUser(user) {
        const userRepository = config_1.AppDataSource.getRepository(User_1.User);
        const savedUser = await userRepository.save(user);
        return savedUser;
    },
    async getUserByUsername(username) {
        const userRepository = config_1.AppDataSource.getRepository(User_1.User);
        const user = await userRepository.findOneBy({ username });
        return user;
    },
};
