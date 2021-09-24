import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableProducts1632438719870 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "brand"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "products" CREATE COLUMN "brand"`);
  }
}
