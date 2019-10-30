package com.teamrocket.fanlinc.builders;

import com.teamrocket.fanlinc.responses.getUserDetailsResponse;
import java.util.Date;
import org.neo4j.ogm.annotation.typeconversion.DateLong;

public class getUserDetaislResponseBuilder {

  private String username;
  private String password;
  private String firstName;
  private String lastName;
  @DateLong
  private Date dateOfBirth;
  private String location;
  private String bio;
  private String profilePhotoUrl;

  public getUserDetaislResponseBuilder username(String username) {
    this.username = username;
    return this;
  }

  public getUserDetaislResponseBuilder password(String password) {
    this.password = password;
    return this;
  }

  public getUserDetaislResponseBuilder firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

  public getUserDetaislResponseBuilder lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

  public getUserDetaislResponseBuilder dateOfBirth(Date dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }

  public getUserDetaislResponseBuilder location(String location) {
    this.location = location;
    return this;
  }

  public getUserDetaislResponseBuilder bio(String bio) {
    this.bio = bio;
    return this;
  }

  public getUserDetaislResponseBuilder profilePhotoUrl(String profilePhotoUrl) {
    this.profilePhotoUrl = profilePhotoUrl;
    return this;
  }

  public getUserDetailsResponse build() {
    getUserDetailsResponse response = new getUserDetailsResponse();
    response.setUsername(this.username);
    response.setPassword(this.password);
    response.setFirstName(this.firstName);
    response.setLastName(this.lastName);
    response.setDateOfBirth(this.dateOfBirth);
    response.setLocation(this.location);
    response.setBio(this.bio);
    response.setProfilePhotoUrl(this.profilePhotoUrl);
    return response;
  }
}
