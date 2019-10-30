package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.builders.UserDetailsResponseBuilder;
import com.teamrocket.fanlinc.builders.UserBuilder;
import com.teamrocket.fanlinc.exceptions.UserNotFoundException;
import com.teamrocket.fanlinc.exceptions.UsernameNotUniqueException;
import com.teamrocket.fanlinc.models.User;
import com.teamrocket.fanlinc.repositories.UserRepository;
import com.teamrocket.fanlinc.requests.UserDetailsRequest;
import com.teamrocket.fanlinc.requests.ValidateUserRequest;
import com.teamrocket.fanlinc.requests.AddUserRequest;
import com.teamrocket.fanlinc.responses.UserDetailsResponse;
import com.teamrocket.fanlinc.responses.ValidateUserResponse;
import com.teamrocket.fanlinc.responses.AddUserResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AccountService {

  private UserRepository userRepository;

  public AccountService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Checks if user with given username is present in database, and if so, checks if the given
   * password matches the one stored for that user
   *
   * @param request a {@link ValidateUserRequest} object containing a username and a password
   * @return a {@link ValidateUserResponse} object containing the given username and whether or not
   * the given password matches the stored password
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
    return new ValidateUserResponse(request.getUsername(),
        requestedUser.getPassword().equals(request.getPassword()));
  }

  /**
   * Checks if a username with a given username exists in the database and if not it will add the
   * user
   *
   * @param request a {@link AddUserRequest} object containing all user registration information
   * @return a {@link AddUserResponse} object containing the given username of the new user
   * @throws UsernameNotUniqueException if user with given username already exists
   */
  @Transactional(readOnly = false)
  public AddUserResponse addUser(AddUserRequest request) {
    // check to see if the user with the given username already exists
    User requestedUser = userRepository.findByUsername(request.getUsername());
    // ensure the requested username is unique if it is not throw an exception
    if (requestedUser != null) {
      throw new UsernameNotUniqueException(
          "User with username " + request.getUsername() + " already exists");
    }
    // otherwise create a new user and save the user into the repo
    userRepository.save(
        new UserBuilder().username(request.getUsername()).password(request.getPassword())
            .firstName(request.getFirstName()).lastName(request.getLastName())
            .dateOfBirth(request.getDateOfBirth()).bio(request.getBio())
            .location(request.getLocation()).profilePhotoUrl(request.getProfilePhotoUrl()).build());
    return new AddUserResponse(request.getUsername());

  }

  /**
   * Checks if a username with a given username exists in the database and if so it will return
   * that users information
   *
   * @param request a {@link UserDetailsRequest} object containing the requested username
   * @return a {@link AddUserResponse} object containing the requested users information
   * @throws UserNotFoundException if user with given username was not found
   */
  @Transactional(readOnly = true)
  public UserDetailsResponse getUserDetails(UserDetailsRequest request) {
    // first check if the requested user exists
    User requestedUser = userRepository.findByUsername(request.getUsername());

    // if the username doesn't exist throw an error
    if (requestedUser == null) {
      throw new UserNotFoundException("User with username " + request.getUsername() + " not found");
    }

    // otherwise return the requested users info
    return new UserDetailsResponseBuilder().bio(requestedUser.getBio())
        .dateOfBirth(requestedUser.getDateOfBirth()).firstName(requestedUser.getFirstName())
        .lastName(requestedUser.getLastName()).location(requestedUser.getLocation())
        .profilePhotoUrl(requestedUser.getProfilePhotoUrl()).build();
  }
}
