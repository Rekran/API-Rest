import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1698462435779 implements MigrationInterface {
    name = 'Default1698462435779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "videos" ("id" SERIAL NOT NULL, "title" text NOT NULL, "url" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "enabled" boolean NOT NULL DEFAULT true, "room_id" integer, CONSTRAINT "PK_e4c86c0cf95aff16e9fb8220f6b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "enabled" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rooms" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "enabled" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_subjects" ("subject_id" integer NOT NULL, "room_id" integer NOT NULL, CONSTRAINT "PK_3e9444204bd45a027ca38dafb6b" PRIMARY KEY ("subject_id", "room_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_511e7473fe00bfdab1fbeeb952" ON "room_subjects" ("subject_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_eb0523888389e9979859054484" ON "room_subjects" ("room_id") `);
        await queryRunner.query(`ALTER TABLE "videos" ADD CONSTRAINT "FK_64bb2d8544299bbde670698ac37" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_subjects" ADD CONSTRAINT "FK_511e7473fe00bfdab1fbeeb952e" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_subjects" ADD CONSTRAINT "FK_eb0523888389e99798590544842" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_subjects" DROP CONSTRAINT "FK_eb0523888389e99798590544842"`);
        await queryRunner.query(`ALTER TABLE "room_subjects" DROP CONSTRAINT "FK_511e7473fe00bfdab1fbeeb952e"`);
        await queryRunner.query(`ALTER TABLE "videos" DROP CONSTRAINT "FK_64bb2d8544299bbde670698ac37"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eb0523888389e9979859054484"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_511e7473fe00bfdab1fbeeb952"`);
        await queryRunner.query(`DROP TABLE "room_subjects"`);
        await queryRunner.query(`DROP TABLE "rooms"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
        await queryRunner.query(`DROP TABLE "videos"`);
    }

}
