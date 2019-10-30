package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.JoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;
import com.teamrocket.fanlinc.services.JoinedService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class JoinedController {

    private static final String BASE_PATH = "/Joined";

    private JoinedService joinedService;

    public JoinedController(JoinedService joinedService) {
        this.joinedService = joinedService;
    }

    @CrossOrigin
    @RequestMapping(value = BASE_PATH + "/addJoinedFandom", method = RequestMethod.POST)
    @ResponseBody
    public AddJoinedFandomResponse AddJoinedFandom(@Valid @RequestBody JoinedFandomRequest request) {
        return joinedService.addJoinedFandom(request);
    }

}