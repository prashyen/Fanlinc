package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.ExampleRequest;
import com.teamrocket.fanlinc.responses.ExampleResponse;
import org.neo4j.driver.Driver;
import org.neo4j.driver.Session;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AccountController {

    private Driver driver;

    public AccountController(Driver driver) {
        this.driver = driver;
    }

    @RequestMapping(value = "/example", method = RequestMethod.GET)
    @ResponseBody
    public ExampleResponse example(@Valid @RequestBody ExampleRequest request) {
        try (Session session = driver.session()) {
            session.run("MATCH (n) RETURN n");
            return new ExampleResponse(request.getId());
        }
    }

}
