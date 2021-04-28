package com.softplan.teste.pais.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class PaisNotFoundException extends RuntimeException {

    public PaisNotFoundException() {
        super("País não encontrado");
    }
}
