"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRefactoringTIMESTAMP = void 0;
const typeorm_1 = require("typeorm");
class QuestionRefactoringTIMESTAMP {
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
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable("user");
    }
}
exports.QuestionRefactoringTIMESTAMP = QuestionRefactoringTIMESTAMP;
