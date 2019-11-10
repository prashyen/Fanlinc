package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.builders.PostBuilder;
import com.teamrocket.fanlinc.exceptions.FandomNotFoundException;
import com.teamrocket.fanlinc.exceptions.InvalidEditRequestException;
import com.teamrocket.fanlinc.exceptions.InvalidLevelException;
import com.teamrocket.fanlinc.exceptions.InvalidTypeException;
import com.teamrocket.fanlinc.exceptions.PostNotFoundException;
import com.teamrocket.fanlinc.exceptions.UserNotFoundException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.exceptions.UserNotInFandomException;
import com.teamrocket.fanlinc.models.Joined;
import com.teamrocket.fanlinc.models.User;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import com.teamrocket.fanlinc.repositories.JoinedRepository;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.repositories.UserRepository;
import com.teamrocket.fanlinc.requests.AddPostRequest;
import com.teamrocket.fanlinc.requests.EditPostRequest;
import com.teamrocket.fanlinc.responses.AddPostResponse;
import com.teamrocket.fanlinc.responses.EditPostResponse;
import com.teamrocket.fanlinc.responses.GetPostsResponse;

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
  private final List<String> levels = Arrays.asList(new String[]{"1", "2", "3", "4", "noFilter"});
  private final List<String> types =
      Arrays.asList(new String[]{"General", "Cosplayer", "Vendor/Artist", "noFilter"});

  public PostService(PostRepository postRepository, FandomRepository fandomRepository,
      UserRepository userRepository, JoinedRepository joinedRepository) {
    this.postRepository = postRepository;
    this.fandomRepository = fandomRepository;
    this.userRepository = userRepository;
    this.joinedRepository = joinedRepository;
  }

  /**
   * Finds all posts made by a user with the specified username and returns an object of all the
   * posts.
   *
   * @return a {@link GetPostsResponse} object of all posts made by that user
   * @throws UserNotFoundException if the username is not valid
   */
  public GetPostsResponse getPostsByUser(String username) {

    User requestedUser = userRepository.findByUsername(username);
    if (requestedUser == null) {
      throw new UserNotFoundException("User with username " + username + " not found");
    }

    List<Post> posts = postRepository.findByPostedByOrderByPostedTimeDesc(username);
    return new GetPostsResponse(posts);
  }

  /**
   * Creates a post with the given info in the request, which contains the content, title, user,
   * date, Url for the photo, type, and Fandom of the post
   *
   * @param request a {@link AddPostRequest} object containing the information for the new post
   * @return a {@link AddPostResponse} object containing the title of the post, the user who posted
   * the post, and the Fandom the post was posted to
   * @throws FandomNotFoundException  if requested Fandom was not found
   * @throws InvalidLevelException    if requested level is invalid
   * @throws InvalidTypeException     if requested type is invalid
   * @throws UserNotFoundException    if requested User was not found
   * @throws UserNotInFandomException if the user is not in the fandom the post was being posted to
   */
  @Transactional(readOnly = false)
  public AddPostResponse addPost(AddPostRequest request) {
    Fandom requestedFandom = fandomRepository.findByFandomName(request.getFandomName());
    // ensure the requested fandom has already been created
    if (requestedFandom == null) {
      // Fandom has not been created yet
      throw new FandomNotFoundException(
          "Fandom with name " + request.getFandomName() + " does not exist");
    }
    // Check if the requested level and type are valid
    if (!levels.contains(request.getLevel())) {
      throw new InvalidLevelException(request.getLevel() + " is not a valid level");
    }
    if (!types.contains(request.getType())) {
      throw new InvalidTypeException(request.getType() + " is not a valid type");
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
      // User not a member of the fandom, output exception
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

  /**
   * Finds all posts in a given fandom based on a given filter, if no filter is specified and the
   * keyword noFilter is passed in for both level and type this method will find all posts for a
   * given fandom. If only one filter is specified it will find posts based on the given filter and
   * fandom.
   *
   * @return a {@link GetPostsResponse} object containing the list of all posts matching the filters
   * @throws FandomNotFoundException if the specified fandom does not exist
   * @throws InvalidLevelException   if the level specified is not 1,2,3,4 or noFilter
   * @throws InvalidTypeException    if the type specified is not "General", "Cosplayer",
   *                                 "Vendor/Artist" or "noFilter"
   */
  public GetPostsResponse getFilteredPosts(String fandomName, String level, String type) {

    // check if the requested fandom exists
    Fandom requestedFandom = fandomRepository.findByFandomName(fandomName);
    if (requestedFandom == null) {
      throw new FandomNotFoundException("Fandom with the name " + fandomName + " does not exist");
    }
    if (!levels.contains(level)) { // check if the requested level and type are valid
      throw new InvalidLevelException(level + " is not a valid level");
    }
    if (!types.contains(type)) { // check if the given type is valid
      throw new InvalidTypeException(type + " is not a valid type");
    }

    // if requested parameters are valid check if any filter were provided
    List<Post> posts;
    if (level.equals("noFilter") && type.equals("noFilter")) {
      // if no filters were provided just return all posts for the given fandom
      posts = postRepository.findByFandomName(fandomName);
    } else if (level.equals("noFilter") && !type.equals("noFilter")) {
      posts = postRepository.findByFandomNameAndTypeOrderByPostedTimeDesc(fandomName, type);
    } else if (!level.equals("noFilter") && type.equals("noFilter")) {
      posts = postRepository.findByFandomNameAndLevelOrderByPostedTimeDesc(fandomName, level);
    } else {
      posts =
          postRepository.findByFandomNameAndLevelAndTypeOrderByPostedTimeDesc(
              fandomName, level, type);
    }

    return new GetPostsResponse(posts);
  }

  public EditPostResponse editPost(EditPostRequest request) {
    // relevant post based on username and time it was posted
    Post originalPost = postRepository
        .findByPostedByAndPostedTime(request.getUsername(), request.getPostedTime());
    // check if the requested post exists
    if (originalPost == null) {
      throw new PostNotFoundException(
          "Post from user, " + request.getUsername() + " posted at, " + request.getPostedTime()
              .toString() + " was not found");
    }

    // ensure title level and type are not empty
    // check which properties need to be changed and change if they need to
    if (request.getTitle() == "") {
      throw new InvalidEditRequestException("Title cannot be an empty string");

    } else if (request.getTitle() != null) {
      originalPost.setTitle(request.getTitle());
    }

    if (request.getPostPhotoURL() != null) {
      originalPost.setPostPhotoUrl(request.getPostPhotoURL());
    }

    if (request.getContent() != null) {
      originalPost.setContent(request.getContent());
    }

    if (request.getLevel() == "") {
      throw new InvalidEditRequestException("Level cannot be an empty string");

    } else if (request.getLevel() != null) {
      originalPost.setLevel(request.getLevel());
    }

    if (request.getType() == "") {
      throw new InvalidEditRequestException("Type cannot be an empty string");
    }
    if (request.getType() != null) {
      originalPost.setType(request.getType());
    }

    postRepository.save(originalPost);
    return new EditPostResponse(originalPost.getPostedBy(), originalPost.getPostedTime());

  }
}
