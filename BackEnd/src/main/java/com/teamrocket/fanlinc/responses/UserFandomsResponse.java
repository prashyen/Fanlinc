package com.teamrocket.fanlinc.responses;

import java.util.List;

public class UserFandomsResponse {

  private List<String> fandomNames;

  public UserFandomsResponse(List<String> fandomNames) {
    this.fandomNames = fandomNames;
  }

  public List<String> getFandomNames() {
    return fandomNames;
  }

  public void setFandomNames(List<String> fandomNames) {
    this.fandomNames = fandomNames;
  }
}
