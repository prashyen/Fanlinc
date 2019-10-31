package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.services.FandomService;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class FandomController {

  private static final String BASE_PATH = "/fandom";

  private FandomService fandomService;

  public FandomController(FandomService fandomService) {
    this.fandomService = fandomService;
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addFandom", method = RequestMethod.POST)
  @ResponseBody
  public AddFandomResponse addUser(@Valid @RequestBody AddFandomRequest request) {
    return fandomService.addFandom(request);
  }

}
