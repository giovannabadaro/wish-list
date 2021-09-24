import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1632357315977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'external_id',
            type: 'varchar(255)',
            isPrimary: false,
          },
          {
            name: 'customer_id',
            type: 'uuid',
          },
          {
            name: 'title',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'brand',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'imagem',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'review',
            type: 'varchar(255)',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FKcustomer',
            referencedTableName: 'customer',
            referencedColumnNames: ['id'],
            columnNames: ['customer_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product');
    await queryRunner.query('DROP TYPE customer_role');
  }
}
