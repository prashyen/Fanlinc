package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.requests.AddJoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;
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

  // Nothing important
  @CrossOrigin
  // Mapping the url into the given method.
  @RequestMapping(value = BASE_PATH + "/addFandom", method = RequestMethod.POST)
  // Whatever this returns has to be turned into a response body

  @ResponseBody
  public AddFandomResponse addFandom(@Valid @RequestBody AddFandomRequest request) {
    return fandomService.addFandom(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addJoinedFandom", method = RequestMethod.POST)
  @ResponseBody
  public AddJoinedFandomResponse AddJoinedFandom(@Valid @RequestBody AddJoinedFandomRequest request) {
    return fandomService.addJoinedFandom(request);
  }
}
