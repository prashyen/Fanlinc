package com.teamrocket.fanlinc.requests;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

public class DeletePostRequest {

  @NotEmpty private String postedBy;

  @NotNull private Date postedTime;

  public String getPostedBy() {
    return postedBy;
  }

  public Date getPostedTime() {
    return postedTime;
  }
}
