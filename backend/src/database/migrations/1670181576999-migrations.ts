import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1670181576999 implements MigrationInterface {
  name = "migrations1670181576999";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_5d841d757dd7d85f84ed67377ab\``
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` ADD \`experienceDate\` date NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`address\` \`address\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`country\` \`country\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`city\` \`city\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7ed5659e7139fc8bc039198cc1f\``
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_e2769e29b8dd0ac1b578fa02679\``
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`description\` \`description\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`title\` \`title\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`userId\` \`userId\` varchar(36) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`companyId\` \`companyId\` varchar(36) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`description\` \`description\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`address\` \`address\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`phone\` \`phone\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`country\` \`country\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`city\` \`city\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7ed5659e7139fc8bc039198cc1f\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_e2769e29b8dd0ac1b578fa02679\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_5d841d757dd7d85f84ed67377ab\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_5d841d757dd7d85f84ed67377ab\``
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_e2769e29b8dd0ac1b578fa02679\``
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7ed5659e7139fc8bc039198cc1f\``
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`country\` \`country\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`address\` \`address\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`companyId\` \`companyId\` varchar(36) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`userId\` \`userId\` varchar(36) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`title\` \`title\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` CHANGE \`description\` \`description\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_e2769e29b8dd0ac1b578fa02679\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7ed5659e7139fc8bc039198cc1f\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`country\` \`country\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`address\` \`address\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`reviews\` DROP COLUMN \`experienceDate\``
    );
    await queryRunner.query(
      `ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_5d841d757dd7d85f84ed67377ab\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
