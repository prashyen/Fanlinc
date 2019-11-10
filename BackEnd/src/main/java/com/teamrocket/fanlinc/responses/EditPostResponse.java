package com.teamrocket.fanlinc.responses;

import com.teamrocket.fanlinc.models.Post;
import java.util.Date;;

public class EditPostResponse {
  private String username;
  private Date postedTime;



  public EditPostResponse(String username, Date postedTime){
    this.username = username;
    this.postedTime = postedTime;
  }

  public String getUsername() {
    return username;
  }

  public Date getPostedTime() {
    return postedTime;
  }
}
