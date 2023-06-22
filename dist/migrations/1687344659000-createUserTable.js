"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1687344659000 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1687344659000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
exports.CreateUserTable1687344659000 = CreateUserTable1687344659000;
