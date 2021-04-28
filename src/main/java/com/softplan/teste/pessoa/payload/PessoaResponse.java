package com.softplan.teste.pessoa.payload;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
public class PessoaResponse {

    private UUID uuid;

    private String nome;
    private String email;
    private String paisId;
    private String naturalidade;
    private String cpf;

    private Integer sexoId;

    private LocalDate dataNascimento;
}
