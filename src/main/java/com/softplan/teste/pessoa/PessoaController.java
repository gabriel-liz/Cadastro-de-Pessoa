package com.softplan.teste.pessoa;

import com.softplan.teste.pessoa.payload.PessoaRequest;
import com.softplan.teste.pessoa.payload.PessoaResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("pessoas")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @Autowired
    private PessoaFactory pessoaFactory;

    @PostMapping
    private void createPessoa(@Valid @RequestBody PessoaRequest pessoaRequest) {
        pessoaService.createPessoa(pessoaRequest);
    }

    @GetMapping
    private List<Pessoa> getPessoas() {
        return pessoaService.findPessoas();
    }

    @GetMapping("{uuid}")
    private PessoaResponse getPessoa(@PathVariable UUID uuid) {
        Pessoa pessoa = pessoaService.getPessoa(uuid);

        return pessoaFactory.createPessoaResponse(pessoa);
    }

    @PatchMapping("{uuid}")
    private void updatePessoa(@PathVariable UUID uuid,
                              @Valid @RequestBody PessoaRequest pessoaRequest) {

        Pessoa pessoa = pessoaService.getPessoa(uuid);

        pessoaService.updatePessoa(pessoa, pessoaRequest);
    }

    @DeleteMapping("{uuid}")
    private void deletePessoa(@PathVariable UUID uuid) {
        pessoaService.deletePessoa(pessoaService.getPessoa(uuid));
    }
}
