package com.softplan.teste.pais;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Pais {

    @Id
    private String id;

    private String nome;
}
