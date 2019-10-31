package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.FandomAlreadyExistsException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.teamrocket.fanlinc.builders.FandomBuilder;

@Service
public class FandomService {

  private FandomRepository fandomRepository;

  public FandomService(FandomRepository fandomRepository) {
    this.fandomRepository = fandomRepository;
  }


  /**
   * Checks if a fandom with a given name exists in the database and if not it will create that
   * fandom with the given info
   *
   * @param request a {@link AddFandomRequest} object containing the information for the new fandom
   * @return a {@link AddFandomResponse} object containing the new fandoms name
   * @throws FandomAlreadyExistsException if a fandom with the requested name was already created
   */
  @Transactional(readOnly = false)
  public AddFandomResponse addFandom(AddFandomRequest request) {
    Fandom requestedFandom = fandomRepository.findByFandomName(request.getFandomName());

    //ensure the requested fandom hasn't already been created
    if (requestedFandom != null) {
      // if the requested fandom isn't unique output exception
      throw new FandomAlreadyExistsException(
          "A fandom with the name " + request.getFandomName() + " already exists");
    }

    // if the fandom doesn't exist then create a new fandom node
    fandomRepository.save(new FandomBuilder().fandomName(request.getFandomName())
        .description(request.getDescription()).genre(request.getGenre())
        .displayPhotoURL(request.getDisplayPhotoURL()).build());

    return new AddFandomResponse(request.getFandomName());


  }
}
