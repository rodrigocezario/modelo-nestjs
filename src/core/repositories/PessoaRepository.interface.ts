import { Pessoa } from "../model/entities/Pessoa.entity";
import { IGenericRepository } from "./GenericRepository.interface";

export interface IPessoaRepository extends IGenericRepository<Pessoa> {

}
