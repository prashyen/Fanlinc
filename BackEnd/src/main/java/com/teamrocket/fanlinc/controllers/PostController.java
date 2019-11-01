package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.requests.AddPostRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.responses.AddPostResponse;
import com.teamrocket.fanlinc.services.FandomService;
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

  // Nothing important
  @CrossOrigin
  // MAPPING THE url TO THE GIVEN methed.
  @RequestMapping(value = BASE_PATH + "/addPost", method = RequestMethod.POST)
  // Whatever this returns has to be turned into a response body
  @ResponseBody
  public AddPostResponse addPost(@Valid @RequestBody AddPostRequest request) {
    return postService.addPost(request);
  }
}
