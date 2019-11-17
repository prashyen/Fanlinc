package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.requests.AddJoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;
import com.teamrocket.fanlinc.services.FandomService;
import javax.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
  public AddFandomResponse addFandom(@Valid @RequestBody AddFandomRequest request) {
    return fandomService.addFandom(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addJoinedFandom", method = RequestMethod.POST)
  @ResponseBody
  public AddJoinedFandomResponse AddJoinedFandom(
      @Valid @RequestBody AddJoinedFandomRequest request) {
    return fandomService.addJoinedFandom(request);
  }
}
