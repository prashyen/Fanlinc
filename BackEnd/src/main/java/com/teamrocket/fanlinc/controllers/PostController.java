package com.teamrocket.fanlinc.controllers;

import com.teamrocket.fanlinc.services.FandomService;
import com.teamrocket.fanlinc.services.PostService;
import org.springframework.web.bind.annotation.*;

@RestController
public class PostController {

  private static final String BASE_PATH = "/post";
  private PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }
}
