package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.exceptions.UserNotFoundException;
import com.teamrocket.fanlinc.models.User;
import com.teamrocket.fanlinc.repositories.UserRepository;
import com.teamrocket.fanlinc.requests.ValidateUserRequest;
import com.teamrocket.fanlinc.responses.ValidateUserResponse;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class AccountService {

    private UserRepository userRepository;

    public AccountService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Checks if user with given username is present in database, and if so, checks if the given password matches the
     * one stored for that user
     *
     * @param request a {@link ValidateUserRequest} object containing a username and a password
     * @return a {@link ValidateUserResponse} object containing the given username and whether or not the given password matches the stored password
     * @throws UserNotFoundException if user with given username was not found
     */
    @Transactional(readOnly = true)
    public ValidateUserResponse validateUser(ValidateUserRequest request) {
        User requestedUser = userRepository.findByUsername(request.getUsername());
        // if the repository method returns a null value, user with given username was not found
        if (requestedUser == null) {
            throw new UserNotFoundException("User with username " + request.getUsername() + " not found");
        }
        // compare given password with password stored in the database and save this result in the response object
        return new ValidateUserResponse(request.getUsername(), requestedUser.getPassword().equals(request.getPassword()));
    }
}
