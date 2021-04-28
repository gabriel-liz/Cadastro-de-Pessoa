package com.softplan.teste.pais;

import com.softplan.teste.pais.exception.PaisNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaisServiceImpl implements PaisService {

    @Autowired
    PaisRepository paisRepository;

    @Override
    public Pais getPais(String paisId) {
        return paisRepository
                .findById(paisId)
                .orElseThrow(PaisNotFoundException::new);
    }
}
