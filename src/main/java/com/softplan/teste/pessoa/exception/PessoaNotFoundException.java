package com.softplan.teste.pessoa.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class PessoaNotFoundException extends RuntimeException {

    public PessoaNotFoundException() {
        super("Pessoa não encontrada");
    }
}
