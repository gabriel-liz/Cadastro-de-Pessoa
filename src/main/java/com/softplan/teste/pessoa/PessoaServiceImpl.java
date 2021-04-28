package com.softplan.teste.pessoa;

import com.softplan.teste.pais.PaisService;
import com.softplan.teste.pessoa.exception.PessoaNotFoundException;
import com.softplan.teste.pessoa.payload.PessoaRequest;
import com.softplan.teste.sexo.SexoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Service
public class PessoaServiceImpl implements PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    @Autowired
    private SexoService sexoService;

    @Autowired
    private PaisService paisService;

    @Override
    public Pessoa createPessoa(PessoaRequest pessoaRequest) {
        Pessoa pessoa = new Pessoa();

        pessoa.setUuid(UUID.randomUUID());
        pessoa.setDataCriacao(LocalDate.now());

        return save(pessoa, pessoaRequest);
    }

    @Override
    public List<Pessoa> findPessoas() {
        return pessoaRepository.findAll();
    }

    @Override
    public Pessoa getPessoa(UUID uuid) {
        return pessoaRepository.findById(uuid).orElseThrow(PessoaNotFoundException::new);
    }

    @Override
    public void updatePessoa(Pessoa pessoa, PessoaRequest pessoaRequest) {
        pessoa.setDataAlteracao(LocalDate.now());

        save(pessoa, pessoaRequest);
    }

    @Override
    public void deletePessoa(Pessoa pessoa) {
        pessoaRepository.delete(pessoa);
    }

    private Pessoa save(Pessoa pessoa, PessoaRequest pessoaRequest) {
        pessoa.setNome(pessoaRequest.getNome());

        pessoa.setEmail(pessoaRequest.getEmail());

        pessoa.setPais(paisService.getPais(pessoaRequest.getPaisId()));

        pessoa.setNaturalidade(pessoaRequest.getNaturalidade());
        pessoa.setCpf(pessoaRequest.getCpf());

        pessoa.setSexo(sexoService.getSexo(pessoaRequest.getSexoId()));

        pessoa.setDataNascimento(pessoaRequest.getDataNascimento());

        return pessoaRepository.save(pessoa);
    }
}
