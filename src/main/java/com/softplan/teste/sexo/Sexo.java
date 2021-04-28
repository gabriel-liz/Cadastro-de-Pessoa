package com.softplan.teste.sexo;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Sexo {

    @Id
    private Integer id;

    private String descricao;
}
