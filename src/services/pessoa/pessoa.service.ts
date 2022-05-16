import { Injectable } from '@nestjs/common';
import { Pessoa } from 'src/core/model/entities/Pessoa.entity';
import { PessoaRepository } from 'src/infrastructure/repositories/PessoaRepository';

@Injectable()
export class PessoaService {

    constructor(private readonly pessoaRepository: PessoaRepository) {}

    public async findAll(): Promise<Pessoa[]>{
        return await this.pessoaRepository.findAll();        
    }

    public async save(pessoa: Pessoa): Promise<Pessoa> {
        return await this.pessoaRepository.save(pessoa);
    }

}
