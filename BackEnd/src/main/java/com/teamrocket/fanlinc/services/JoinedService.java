package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.UserAlreadyJoinedFandomException;
import com.teamrocket.fanlinc.repositories.JoinedRepository;
import com.teamrocket.fanlinc.requests.JoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class JoinedService {

    private JoinedRepository joinedRepository;

    public JoinedService(JoinedRepository joinedRepository) {
        this.joinedRepository = joinedRepository;
    }


    @Transactional(readOnly = false)
    public AddJoinedFandomResponse addJoinedFandom(JoinedFandomRequest request) {
        String requestedRelationType = joinedRepository.findJoinedByUsernameAndFandomName(request.getUsername(),
                                                                                            request.getFandomName());

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
