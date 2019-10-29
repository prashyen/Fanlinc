package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.repositories.PostRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PostService {

  private PostRepository postRepository;

  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }
}
