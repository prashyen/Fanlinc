package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.FandomNotFoundException;
import com.teamrocket.fanlinc.exceptions.InvalidLevelException;
import com.teamrocket.fanlinc.exceptions.InvalidTypeException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.responses.FilterPostsResponse;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class PostService {

  private PostRepository postRepository;
  private FandomRepository fandomRepository;
  private final List<String> levels = Arrays.asList(new String[]{"1", "2", "3", "4", "noFilter"});
  private final List<String> types =
      Arrays.asList(new String[]{"General", "Cosplayer", "Vendor/Artist", "noFilter"});

  public PostService(PostRepository postRepository, FandomRepository fandomRepository) {
    this.postRepository = postRepository;
    this.fandomRepository = fandomRepository;
  }

  /**
   * Finds all posts in a given fandom based on a given filter, if no filter is specified and the
   * keyword noFilter is passed in for both level and type this method will find all posts for a
   * given fandom. If only one filter is specified it will find posts based on the given filter and
   * fandom.
   *
   * @return a {@link FilterPostsResponse} object containing the list of all posts matching the
   * filters
   * @throws FandomNotFoundException if the specified fandom does not exist
   * @throws InvalidLevelException   if the level specified is not 1,2,3,4 or noFilter
   * @throws InvalidTypeException    if the type specified is not "General", "Cosplayer",
   *                                 "Vendor/Artist" or "noFilter"
   */
  public FilterPostsResponse getFilteredPosts(String fandomName, String level, String type) {

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
    if (!level.equals("noFilter") && !type.equals("noFilter")) { // if both filters were provided
      posts = postRepository
          .findByFandomNameAndLevelAndTypeOrderByPostedTimeDesc(fandomName, level, type);
    } else if (level.equals("noFilter")) { // if only type filter was provided
      posts = postRepository.findByFandomNameAndTypeOrderByPostedTimeDesc(fandomName, type);
    } else if (type.equals("noFilter")) { // if only level filter was provided
      posts = postRepository.findByFandomNameAndLevelOrderByPostedTimeDesc(fandomName, level);
    } else { // if both filters were provided
      posts = postRepository.findByFandomName(fandomName);
    }

    return new FilterPostsResponse(posts);
  }
}
