import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668542714858 implements MigrationInterface {
  name = "migrations1668542714858";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`avatar\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`address\` \`address\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`address\` \`address\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`avatar\``);
  }
}
