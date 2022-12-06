import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1670364932723 implements MigrationInterface {
    name = 'migrations1670364932723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`reviewsQuantity\` float NOT NULL, \`address\` varchar(255) NULL, \`password\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`banned\` tinyint NOT NULL DEFAULT 0, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reviews\` (\`id\` varchar(36) NOT NULL, \`description\` varchar(255) NULL, \`rating\` decimal NOT NULL, \`title\` varchar(255) NULL, \`experienceDate\` date NULL, \`createdAt\` timestamp NOT NULL, \`userId\` varchar(36) NULL, \`companyId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` varchar(36) NOT NULL, \`email\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`description\` varchar(255) NULL, \`reviewsQuantity\` float NOT NULL, \`address\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`banned\` tinyint NOT NULL DEFAULT 0, \`country\` varchar(255) NULL, \`city\` varchar(255) NULL, \`website\` varchar(255) NOT NULL, \`workEmail\` varchar(255) NOT NULL, \`ratingGeneral\` float NOT NULL, \`password\` varchar(255) NOT NULL, \`roleId\` int NOT NULL, UNIQUE INDEX \`IDX_3e7b86aa8b4ffe84947ff29c0b\` (\`website\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_368e146b785b574f42ae9e53d5e\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_7ed5659e7139fc8bc039198cc1f\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reviews\` ADD CONSTRAINT \`FK_e2769e29b8dd0ac1b578fa02679\` FOREIGN KEY (\`companyId\`) REFERENCES \`companies\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`companies\` ADD CONSTRAINT \`FK_5d841d757dd7d85f84ed67377ab\` FOREIGN KEY (\`roleId\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companies\` DROP FOREIGN KEY \`FK_5d841d757dd7d85f84ed67377ab\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_e2769e29b8dd0ac1b578fa02679\``);
        await queryRunner.query(`ALTER TABLE \`reviews\` DROP FOREIGN KEY \`FK_7ed5659e7139fc8bc039198cc1f\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_368e146b785b574f42ae9e53d5e\``);
        await queryRunner.query(`DROP INDEX \`IDX_3e7b86aa8b4ffe84947ff29c0b\` ON \`companies\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
        await queryRunner.query(`DROP TABLE \`reviews\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
    }

}
