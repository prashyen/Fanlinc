package com.teamrocket.fanlinc.controllers;

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

}
