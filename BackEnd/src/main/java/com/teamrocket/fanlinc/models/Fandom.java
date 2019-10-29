package com.teamrocket.fanlinc.models;

import java.util.Date;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
public class Fandom {

  @Id
  @GeneratedValue
  private Long id;
  private String name;
  private String genre;
  private String description;
  private String displayPhotoURL;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getGenre() {
    return genre;
  }

  public void setGenre(String genre) {
    this.genre = genre;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDisplayPhotoURL() {
    return displayPhotoURL;
  }

  public void setDisplayPhotoURL(String displayPhotoURL) {
    this.displayPhotoURL = displayPhotoURL;
  }
}
