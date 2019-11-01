package com.teamrocket.fanlinc.requests;

import javax.validation.constraints.NotEmpty;

public class UserFandomsRequest {
  private String level;

  private String type;

  @NotEmpty private String username;

  public String getLevel() {
    return level;
  }

  public String getType() {
    return type;
  }

  public String getUsername() {
    return username;
  }
}
