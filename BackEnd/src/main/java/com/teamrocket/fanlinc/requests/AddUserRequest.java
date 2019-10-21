package com.teamrocket.fanlinc.requests;

import java.util.Date;
import javax.validation.constraints.NotNull;

public class AddUserRequest {

    @NotNull
    private String username;

    @NotNull
    private String password;

    @NotNull
    private String firstName;

    @NotNull
    private String lastName;

    @NotNull
    private String dateOfBirth;

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

    public String getDateOfBirth() {
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
