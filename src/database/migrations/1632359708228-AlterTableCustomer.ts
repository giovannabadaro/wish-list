import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableCustomer1632359708228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "deleted_at"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" CREATE COLUMN "deleted_at"`
    );
  }
}
