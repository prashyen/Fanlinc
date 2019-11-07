package com.teamrocket.fanlinc.responses;

import com.teamrocket.fanlinc.models.Post;;

public class EditPostResponse {
  private Post post;

  public Post getPost() {
    return post;
  }

  public void setPost(Post post) {
    this.post = post;
  }

  public EditPostResponse(Post post){
    this.post = post;
  }
}
