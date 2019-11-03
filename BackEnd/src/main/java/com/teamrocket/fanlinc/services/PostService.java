package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.builders.PostBuilder;
import com.teamrocket.fanlinc.exceptions.FandomNotFoundException;
import com.teamrocket.fanlinc.exceptions.InvalidLevelException;
import com.teamrocket.fanlinc.exceptions.UserNotInFandomException;
import com.teamrocket.fanlinc.exceptions.UserNotFoundException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.models.Joined;
import com.teamrocket.fanlinc.models.User;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import com.teamrocket.fanlinc.repositories.JoinedRepository;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.repositories.UserRepository;
import com.teamrocket.fanlinc.requests.AddPostRequest;
import com.teamrocket.fanlinc.responses.AddPostResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class PostService {

  private PostRepository postRepository;
  private FandomRepository fandomRepository;
  private UserRepository userRepository;
  private JoinedRepository joinedRepository;
  private final List<String> levels = Arrays.asList(new String[] {"1", "2", "3", "4", "noFilter"});
  private final List<String> types =
      Arrays.asList(new String[] {"General", "Cosplayer", "Vendor/Artist", "noFilter"});

  public PostService(
      PostRepository postRepository,
      FandomRepository fandomRepository,
      UserRepository userRepository,
      JoinedRepository joinedRepository) {
    this.postRepository = postRepository;
    this.fandomRepository = fandomRepository;
    this.userRepository = userRepository;
    this.joinedRepository = joinedRepository;
  }

  @Transactional(readOnly = false)
  public AddPostResponse addPost(AddPostRequest request) {
    Fandom requestedFandom = fandomRepository.findByFandomName(request.getFandomName());
    // ensure the requested fandom has already been created
    if (requestedFandom == null) {
      // Fandom has not been created yet
      throw new FandomNotFoundException(
          "Fandom with name " + request.getFandomName() + " does not exists");
    }
    // Check if the requested level and type are valid
    if (!levels.contains(request.getLevel())) {
      throw new InvalidLevelException(request.getLevel() + " is not a valid level");
    }
    if (!types.contains(request.getType())) {
      throw new InvalidLevelException(request.getType() + " is not a valid type");
    }
    User requestedUser = userRepository.findByUsername(request.getPostedBy());
    // ensure the requested username exists
    if (requestedUser == null) {
      throw new UserNotFoundException(
          "User with username " + request.getPostedBy() + " does not exist");
    }
    Joined requestedRelation =
        joinedRepository.findJoinedByUsernameAndFandomName(
            request.getPostedBy(), request.getFandomName());
    // ensure the user is already a member of the fandom
    if (requestedRelation == null) {
      // User already a member of the fandom, output exception
      throw new UserNotInFandomException("User not in " + request.getFandomName());
    }
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
