package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddUserRequest;
import com.teamrocket.fanlinc.requests.UserDetailsRequest;
import com.teamrocket.fanlinc.requests.ValidateUserRequest;
import com.teamrocket.fanlinc.responses.AddUserResponse;
import com.teamrocket.fanlinc.responses.UserDetailsResponse;
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
  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(value = BASE_PATH + "/validateUser", method = RequestMethod.POST)
  @ResponseBody
  public ValidateUserResponse validateUser(@Valid @RequestBody ValidateUserRequest request) {
    return accountService.validateUser(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addUser", method = RequestMethod.POST)
  @ResponseBody
  public AddUserResponse addUser(@Valid @RequestBody AddUserRequest request) {
    return accountService.addUser(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/userDetails", method = RequestMethod.GET)
  @ResponseBody
  public UserDetailsResponse getUserDetails(@Valid @RequestBody UserDetailsRequest request) {
    return accountService.getUserDetails(request);
  }

}
