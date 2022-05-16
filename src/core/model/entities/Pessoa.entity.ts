import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pessoa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 80, nullable: false })
  nome: string;

  @Column('varchar', { length: 120, nullable: false })
  email: string;

  @Column('date')
  dataNascimento: string;

  @Column('char', { length: 1 })
  sexo: string;
}
