import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698297537693 implements MigrationInterface {
    name = 'Default1698297537693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "UpdatedAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "updatedAt" TO "UpdatedAt"`);
    }

}
