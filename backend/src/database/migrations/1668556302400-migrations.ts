import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1668556302400 implements MigrationInterface {
  name = "migrations1668556302400";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`companies\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`description\` varchar(255) NULL, \`reviewsQuantity\` float NOT NULL, \`address\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`banned\` tinyint NOT NULL DEFAULT 0, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`website\` varchar(255) NOT NULL, \`workEmail\` varchar(255) NOT NULL, \`ratingGeneral\` float NOT NULL, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_d0af6f5866201d5cb424767744\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
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
      `ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_5d841d757dd7d85f84ed67377ab\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_5d841d757dd7d85f84ed67377ab\``
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
      `ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`avatar\` \`avatar\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_d0af6f5866201d5cb424767744\` ON \`companies\``
    );
    await queryRunner.query(`DROP TABLE \`companies\``);
  }
}
