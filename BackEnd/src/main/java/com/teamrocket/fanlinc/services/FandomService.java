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
  // All the actual functionality goes
  private FandomRepository fandomRepository;

  public FandomService(FandomRepository fandomRepository) {
    this.fandomRepository = fandomRepository;
  }

  @Transactional(readOnly = false)
  public AddFandomResponse addUser(AddFandomRequest request) {
    Fandom requestedFandom = fandomRepository.findByFandomName(request.getFandomName());

    // ensure the requested fandom hasn't already been created
    if (requestedFandom != null) {
      // if the requested fandom isn't unique output exception
      throw new FandomAlreadyExistsException(
          "A fandom with the name " + request.getFandomName() + " already exists");
    }

    // if the fandom doesn't exist then create a new fandom node
    fandomRepository.save(
        new FandomBuilder()
            .fandomName(request.getFandomName()) // adds it to the boddy and database
            .description(request.getDescription())
            .genre(request.getGenre())
            .displayPhotoURL(request.getDisplayPhotoURL())
            .build());
    // returns an instantation of the response object you define
    return new AddFandomResponse(request.getFandomName());

    // postrepositiroy .save object
  }
}
