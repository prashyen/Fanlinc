package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.FandomNotFoundException;
import com.teamrocket.fanlinc.exceptions.InvalidLevelException;
import com.teamrocket.fanlinc.exceptions.InvalidTypeException;
import com.teamrocket.fanlinc.models.Post;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import com.teamrocket.fanlinc.repositories.PostRepository;
import com.teamrocket.fanlinc.responses.FilterPostsResponse;
import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PostService {

  private PostRepository postRepository;
  private FandomRepository fandomRepository;
  private final List<String> levels = Arrays.asList(new String[]{"1", "2", "3", "4", "none"});
  private final List<String> types =
      Arrays.asList(new String[]{"General", "Cosplayer", "Vendor/Artist", "none"});

  public PostService(PostRepository postRepository) {
    this.postRepository = postRepository;
  }

  public FilterPostsResponse filterPosts(String fandomName, String level, String type) {

    // check if the requested fandom exists
    if (fandomRepository.findByFandomName(fandomName) == null) {
      throw new FandomNotFoundException("Fandom with the name " + fandomName + " does not exist");
    } else if (!levels.contains(level)) { // check if the requested level and type are valid
      throw new InvalidLevelException(level + " is not a valid level");
    } else if (!types.contains(type)) { // check if the given type is valid
      throw new InvalidTypeException(type + " is not a valid type");
    }

    // requested parameters are valid obtain the post objects from the repository
    List<Post> posts = postRepository
        .findByFandomNameAndLevelAndTypeOrderByPostedTimeDesc(fandomName, level, type);

    // define the filter post response object and return it
    return new FilterPostsResponse(posts);
  }
}
