import { Body, Controller, Get, Post } from '@nestjs/common';
import { Pessoa } from 'src/core/model/entities/Pessoa.entity';
import { PessoaService } from 'src/services/pessoa/pessoa.service';

@Controller('pessoas')
export class PessoaController {

    constructor(
        private readonly pessoaService: PessoaService,
    ){}

    @Get()
    public async listaTudo(): Promise<Pessoa[]> {
        return await this.pessoaService.findAll();
    }

    @Post()
    public async salvar(@Body() pessoa: Pessoa): Promise<Pessoa> {
        return await this.pessoaService.save(pessoa);
    }   

}
