package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.responses.FilterPostsResponse;
import com.teamrocket.fanlinc.services.PostService;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

  private static final String BASE_PATH = "/post";
  private PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/filteredPosts", method = RequestMethod.GET)
  @ResponseBody
  public FilterPostsResponse getFilteredPosts(@RequestParam(name = "fandomName") String fandomName,
      @RequestParam(name = "level") String level, @RequestParam(name = "type") String type) {
    return postService.getFilteredPosts(fandomName, level, type);
  }

  @CrossOrigin
  @ResponseBody
  @RequestMapping(value = BASE_PATH + "/postsByUser", method = RequestMethod.GET)
  public FilterPostsResponse getPostsByUser(@RequestParam(name = "username") String username) {
    return postService.getPostsByUser(username);
  }
}
