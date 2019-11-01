package com.teamrocket.fanlinc.requests;

import org.neo4j.ogm.annotation.typeconversion.DateLong;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class AddPostRequest {

  @NotEmpty private String title;

  @NotNull private String content;

  @NotEmpty private String postedBy;
  @NotEmpty private String level;
  @NotEmpty private String type;
  @NotEmpty private String fandomName;
  @NotNull private String postPhotoURL;

  public String getTitle() {
    return title;
  }

  public String getContent() {
    return content;
  }

  public String getPostedBy() {
    return postedBy;
  }

  public String getLevel() {
    return level;
  }

  public String getType() {
    return type;
  }

  public String getFandomName() {
    return fandomName;
  }

  public String getPostPhotoURL() {
    return postPhotoURL;
  }
}
