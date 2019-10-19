package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.ValidateUserRequest;
import com.teamrocket.fanlinc.responses.ValidateUserResponse;
import com.teamrocket.fanlinc.services.AccountService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AccountController {

    private static final String BASE_PATH = "/account";

    private AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @RequestMapping(value = BASE_PATH + "/validateUser", method = RequestMethod.GET)
    @ResponseBody
    public ValidateUserResponse validateUser(@Valid @RequestBody ValidateUserRequest request) {
        return accountService.validateUser(request);
    }

}
