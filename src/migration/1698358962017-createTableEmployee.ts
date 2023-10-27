import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableEmployee1698358962017 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "employees",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "age",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "position",
                    type: "varchar",
                    isNullable: false,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("employees")
    }

}
