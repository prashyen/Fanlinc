package com.teamrocket.fanlinc.requests;

import java.util.Date;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class EditPostRequest {


  private String title;

  private String content;

  private String level;

  private String type;

  private String fandom;

  private String postPhotoURL;
  @NotEmpty
  private String postedBy;
  @NotNull
  private Date postedTime;

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }

  public String getLevel() {
    return level;
  }

  public String getType() {
    return type;
  }

  public String getPostPhotoURL() {
    return postPhotoURL;
  }

  public String getPostedBy() {
    return postedBy;
  }

  public Date getPostedTime() {
    return postedTime;
  }

  public String getFandom() {
    return fandom;
  }
}
