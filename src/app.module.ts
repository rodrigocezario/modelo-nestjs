import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { PessoaService } from './services/pessoa/pessoa.service';
import { PessoaController } from './controllers/pessoa/pessoa.controller';

@Module({
  imports: [EnvironmentConfigModule, RepositoriesModule],
  controllers: [PessoaController],
  providers: [PessoaService],
})
export class AppModule {}
