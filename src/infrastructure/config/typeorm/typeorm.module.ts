import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Pessoa } from 'src/core/model/entities/Pessoa.entity';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

export const getTypeOrmModuleOptions = (
  config: EnvironmentConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'mssql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    //entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    //entities: ['dist/**/*.entity{.ts,.js}'],
    entities: [Pessoa],
    // entities: [    
    //   "dist/**/*.entity{.ts,.js}",
    //   "src/**/*.entity{.ts,.js}"],
    synchronize: true,
    extra: {
      trustServerCertificate: true,
    },
    // ssl: {
    //   rejectUnauthorized: false,
    // },
  } as TypeOrmModuleOptions);


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule {}
