package com.teamrocket.fanlinc.models;


import java.time.LocalDateTime;
import org.joda.time.DateTime;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

@NodeEntity
public class Post {

  @GeneratedValue
  @Id
  private Long id;
  private String title;
  private String content;
  private String postedBy;
  private DateTime postedTime;
  private String postPhotoURL;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public String getPostedBy() {
    return postedBy;
  }

  public void setPostedBy(String postedBy) {
    this.postedBy = postedBy;
  }

  public DateTime getPostedTime() {
    return postedTime;
  }

  public void setPostedTime(DateTime postedTime) {
    this.postedTime = postedTime;
  }

  public String getPostPhotoURL() {
    return postPhotoURL;
  }

  public void setPostPhotoURL(String postPhotoURL) {
    this.postPhotoURL = postPhotoURL;
  }
}
