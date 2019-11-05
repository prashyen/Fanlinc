package com.teamrocket.fanlinc.responses;

import com.teamrocket.fanlinc.models.Post;
import java.util.List;

public class GetPostsResponse {
  private List<Post> posts;

  public GetPostsResponse(List<Post> posts){
    this.posts = posts;
  }

  public List<Post> getPosts() {
    return posts;
  }

  public void setPosts(List<Post> posts) {
    this.posts = posts;
  }
}
