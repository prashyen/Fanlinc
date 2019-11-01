package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.builders.FandomBuilder;
import com.teamrocket.fanlinc.builders.PostBuilder;
import com.teamrocket.fanlinc.exceptions.FandomAlreadyExistsException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.requests.AddPostRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.responses.AddPostResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class PostService {

  private PostRepository postRepository;

  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  @Transactional(readOnly = false)
  public AddPostResponse addPost(AddPostRequest request) {

    // if the fandom doesn't exist then create a new fandom node
    postRepository.save(
        new PostBuilder()
            .content(request.getContent())
            .fandomName(request.getFandomName())
            .level(request.getLevel())
            .title(request.getTitle())
            .postedBy(request.getPostedBy())
            .postedTime(new Date())
            .postPhotoURL(request.getPostPhotoURL())
            .type(request.getType())
            .build());

    // returns an instantation of the response object you define
    return new AddPostResponse(request.getTitle(), request.getPostedBy(), request.getFandomName());

    // postrepositiroy .save object
  }
}
