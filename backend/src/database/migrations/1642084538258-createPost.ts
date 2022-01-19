import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPost1642084538258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tb-post",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name:"title",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name:"description",
                        type: "varchar",
                    },
                    {
                        name:"create_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb-post")
    }

}
