package com.teamrocket.fanlinc.requests;

import java.util.Date;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class AddUserRequest {

  @NotEmpty
  private String username;

  @NotEmpty
  private String password;

  @NotEmpty
  private String firstName;

  @NotEmpty
  private String lastName;

  @NotNull
  private Date dateOfBirth;

  @NotNull
  private String location;

  @NotNull
  private String bio;

  @NotNull
  private String profilePhotoUrl;

  public String getPassword() {
    return password;
  }

  public String getLastName() {
    return lastName;
  }

  public Date getDateOfBirth() {
    return dateOfBirth;
  }

  public String getLocation() {
    return location;
  }

  public String getBio() {
    return bio;
  }

  public String getProfilePhotoUrl() {
    return profilePhotoUrl;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getUsername() {
    return username;
  }
}
