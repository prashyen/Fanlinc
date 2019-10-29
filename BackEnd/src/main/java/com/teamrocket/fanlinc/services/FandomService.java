package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FandomService {

  private FandomRepository fandomRepository;

  public FandomService(FandomRepository fandomRepository) {
    this.fandomRepository = fandomRepository;
  }
}
