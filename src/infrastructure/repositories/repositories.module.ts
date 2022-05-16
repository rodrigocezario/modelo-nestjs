import { Module } from '@nestjs/common';
import { PessoaRepository } from './PessoaRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Pessoa } from 'src/core/model/entities/Pessoa.entity';

@Module({
    imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Pessoa])],
    providers: [ PessoaRepository],
    exports: [ PessoaRepository],        
})
export class RepositoriesModule {}
