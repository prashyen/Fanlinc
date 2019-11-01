package com.teamrocket.fanlinc.services;


import com.teamrocket.fanlinc.builders.PostBuilder;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.requests.AddPostRequest;
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

        // returns an instantiation of the response object you defined
        return new AddPostResponse(request.getTitle(), request.getPostedBy(), request.getFandomName());

    }
}
