import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698426222147 implements MigrationInterface {
    name = 'Default1698426222147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "UpdatedAt" TO "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "UpdatedAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "updatedAt" TO "UpdatedAt"`);
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "updatedAt" TO "UpdatedAt"`);
    }

}
