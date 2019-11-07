package com.teamrocket.fanlinc.responses;

import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.models.User;

import java.util.List;

public class GetPostsResponse {
  private List<Post> posts;
  private List<User> users;

  public GetPostsResponse(List<Post> posts /*List<User> users*/){
    this.posts = posts;
    //this.users = users;
  }

  public List<Post> getPosts() {
    return posts;
  }

  public void setPosts(List<Post> posts) {
    this.posts = posts;
  }

  public List<User> getUsers() {
    return users;
  }

  public void setUsers(List<User> users) {
    this.users = users;
  }
}
