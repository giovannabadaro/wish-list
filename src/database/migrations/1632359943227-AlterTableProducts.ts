import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableProducts1632359943227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "imagem" TO "image"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "products" RENAME COLUMN "image" TO "imagem"`
    );
  }
}
