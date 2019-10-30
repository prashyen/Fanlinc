package com.teamrocket.fanlinc.requests;

import javax.validation.constraints.NotEmpty;

public class JoinedFandomRequest {

  @NotEmpty private String level;

  @NotEmpty private String type;

  @NotEmpty private String fandomName;

  @NotEmpty private String username;

  public String getFandomName() {
    return fandomName;
  }

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