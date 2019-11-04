package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddPostRequest;
import com.teamrocket.fanlinc.responses.AddPostResponse;
import com.teamrocket.fanlinc.responses.FilterPostsResponse;
import com.teamrocket.fanlinc.services.PostService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class PostController {

  private static final String BASE_PATH = "/post";
  private PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/addPost", method = RequestMethod.POST)
  @ResponseBody
  public AddPostResponse addPost(@Valid @RequestBody AddPostRequest request) {
    return postService.addPost(request);
  }

  @CrossOrigin
  @RequestMapping(value = BASE_PATH + "/filteredPosts", method = RequestMethod.GET)
  @ResponseBody
  public FilterPostsResponse getFilteredPosts(
      @RequestParam(name = "fandomName") String fandomName,
      @RequestParam(name = "level") String level,
      @RequestParam(name = "type") String type) {
    return postService.getFilteredPosts(fandomName, level, type);
  }
}
