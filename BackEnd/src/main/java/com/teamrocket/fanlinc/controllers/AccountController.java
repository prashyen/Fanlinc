package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddUserRequest;
import com.teamrocket.fanlinc.requests.UserDetailsRequest;
import com.teamrocket.fanlinc.requests.UserFandomsRequest;
import com.teamrocket.fanlinc.requests.ValidateUserRequest;
import com.teamrocket.fanlinc.responses.AddUserResponse;
import com.teamrocket.fanlinc.responses.UserDetailsResponse;
import com.teamrocket.fanlinc.responses.UserFandomsResponse;
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

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/validateUser", method = RequestMethod.GET)
  @ResponseBody
  public ValidateUserResponse validateUser(@RequestParam(name = "username") String username,
      @RequestParam(name = "password") String password) {
    return accountService.validateUser(username, password);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addUser", method = RequestMethod.POST)
  @ResponseBody
  public AddUserResponse addUser(@RequestBody AddUserRequest request) {
    return accountService.addUser(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/userDetails", method = RequestMethod.GET)
  @ResponseBody
  public UserDetailsResponse getUserDetails(@RequestParam(name="username") String username) {
    return accountService.getUserDetails(username);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/userFandoms", method = RequestMethod.GET)
  @ResponseBody
  public UserFandomsResponse getUserFandoms(@RequestParam(name="username") String username) {
    return accountService.getUserFandoms(username);
  }
}
