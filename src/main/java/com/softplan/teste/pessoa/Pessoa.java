package com.softplan.teste.pessoa;

import com.softplan.teste.pais.Pais;
import com.softplan.teste.sexo.Sexo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Getter
@Setter
public class Pessoa {

    @Id
    private UUID uuid;

    @ManyToOne
    private Sexo sexo;

    @ManyToOne
    private Pais pais;

    private String cpf;

    private String nome;
    private String email;
    private String naturalidade;

    private LocalDate dataNascimento;
    private LocalDate dataCriacao;
    private LocalDate dataAlteracao;
}
