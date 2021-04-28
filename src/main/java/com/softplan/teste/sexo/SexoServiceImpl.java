package com.softplan.teste.sexo;

import com.softplan.teste.sexo.exception.SexoNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SexoServiceImpl implements SexoService {

    @Autowired
    SexoRepository sexoRepository;

    @Override
    public Sexo getSexo(Integer sexoId) {
        return sexoRepository
                .findById(sexoId)
                .orElseThrow(SexoNotFoundException::new);
    }
}
