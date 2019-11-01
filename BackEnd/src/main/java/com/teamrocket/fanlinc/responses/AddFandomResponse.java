package com.teamrocket.fanlinc.responses;

public class AddFandomResponse {
  // Have a constructor
  private String fandomName;

  public AddFandomResponse(String fandomName) {
    this.fandomName = fandomName;
  }

  public String getFandomName() {
    return fandomName;
  }
}
