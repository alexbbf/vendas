package io.github.alexbbf.service;

import io.github.alexbbf.model.Cliente;
import io.github.alexbbf.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientesService {

    @Autowired
    private ClientesRepository repository;


    public void salvarCliente(Cliente cliente){
        validarCliente(cliente);

        repository.salvar(cliente);

    }

    private void validarCliente(Cliente cliente) {
        //valida cliente
    }
}
