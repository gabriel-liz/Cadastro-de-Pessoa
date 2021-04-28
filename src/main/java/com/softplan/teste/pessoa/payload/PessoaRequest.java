package com.softplan.teste.pessoa.payload;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@Setter
public class PessoaRequest {

    @NotBlank(message = "nome precisa ser informado")
    private String nome;

    @Email(message = "email precisa estar em um formato válido")
    private String email;

    private String paisId;

    private String naturalidade;

    @NotBlank(message = "CPF precisa ser informado")
    private String cpf;

    @NotNull(message = "sexo precisa ser informado")
    private Integer sexoId;

    @NotNull(message = "data de nascimento precisa ser informada")
    private LocalDate dataNascimento;
}
