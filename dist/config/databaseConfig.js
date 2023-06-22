"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "192.168.1.161",
    port: 5432,
    username: "postgres",
    password: "mukesh@123.Com",
    database: "appv1",
    entities: [User_1.User],
    synchronize: true,
    logging: false,
});
