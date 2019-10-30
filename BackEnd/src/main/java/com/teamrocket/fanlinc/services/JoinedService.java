package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.FandomAlreadyExistsException;
import com.teamrocket.fanlinc.exceptions.UserAlreadyJoinedFandomException;
import com.teamrocket.fanlinc.exceptions.UserNotFoundException;
import com.teamrocket.fanlinc.models.Fandom;
import com.teamrocket.fanlinc.models.User;
import com.teamrocket.fanlinc.repositories.FandomRepository;
import com.teamrocket.fanlinc.repositories.JoinedRepository;
import com.teamrocket.fanlinc.repositories.UserRepository;
import com.teamrocket.fanlinc.requests.JoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JoinedService {

    private JoinedRepository joinedRepository;
    private UserRepository userRepository;
    private FandomRepository fandomRepository;

    public JoinedService(JoinedRepository joinedRepository, UserRepository userRepository, FandomRepository fandomRepository) {
        this.joinedRepository = joinedRepository;
        this.userRepository = userRepository;
        this.fandomRepository = fandomRepository;
    }


    @Transactional(readOnly = false)
    public AddJoinedFandomResponse addJoinedFandom(JoinedFandomRequest request) {
        String requestedRelationType = joinedRepository.findJoinedByUsernameAndFandomName(request.getUsername(),
                                                                                            request.getFandomName());
        User requestedUser = userRepository.findByUsername(request.getUsername());
        // if the repository method returns a null value, user with given username was not found
        if (requestedUser == null) {
            throw new UserNotFoundException("User with username " + request.getUsername() + " not found");
        }
        Fandom requestedFandom = fandomRepository.findByFandomName(request.getFandomName());

        //ensure the requested fandom hasn't already been created
        if (requestedFandom != null) {
            // if the requested fandom isn't unique output exception
            throw new FandomAlreadyExistsException(
                    "A fandom with the name " + request.getFandomName() + " already exists");
        }
        //ensure the user is not already a member of the fandom
        if (requestedRelationType != null) {
            // if the user already a member of the fandom output exception
            throw new UserAlreadyJoinedFandomException(
                    "You have already joined " + request.getFandomName());
        }

        // if the user is not already a member of the fandom
        String relationshipName = joinedRepository.joinUserWithFandom(request.getUsername(),
                                                                        request.getFandomName(),
                                                                        request.getType(),
                                                                        request.getLevel());

        return new AddJoinedFandomResponse(relationshipName);
    }
}
