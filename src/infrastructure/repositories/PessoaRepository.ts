import { Injectable } from "@nestjs/common";
import { Pessoa } from "src/core/model/entities/Pessoa.entity";
import { IPessoaRepository } from "src/core/repositories/PessoaRepository.interface";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PessoaRepository implements IPessoaRepository {

    constructor(
        @InjectRepository(Pessoa)
        private readonly pessoaEntityRepository: Repository<Pessoa>,
    ){}

    async save(obj: Pessoa): Promise<Pessoa> {
        return await this.pessoaEntityRepository.save(obj);
    }

    async findAll(): Promise<Pessoa[]> {
        return await this.pessoaEntityRepository.find();
    }

    findById(id: number): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }

    deleteById(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(id: number, obj: Pessoa): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }

}

