package com.teamrocket.fanlinc.responses;

import com.teamrocket.fanlinc.models.Post;
import java.util.List;

public class FilterPostsResponse {
  private List<Post> posts;

  public FilterPostsResponse(List<Post> posts){
    this.posts = posts;
  }

  public List<Post> getPosts() {
    return posts;
  }

  public void setPosts(List<Post> posts) {
    this.posts = posts;
  }
}
