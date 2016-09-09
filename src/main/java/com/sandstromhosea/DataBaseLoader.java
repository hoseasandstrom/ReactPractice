package com.sandstromhosea;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

import org.springframework.stereotype.Component;

/**
 * Created by hoseasandstrom on 9/9/16.
 */
@Component
public class DataBaseLoader implements CommandLineRunner {
    private final EmployeeRepository repository;

    @Autowired
    public DataBaseLoader(EmployeeRepository repository) {
        this.repository = repository;

    }

    @Override
    public void run(String... strings)throws Exception{
        this.repository.save(new Employee("Froddo", "Baggins", "ring beaerer"));
    }
}
