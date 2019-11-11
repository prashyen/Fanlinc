package com.teamrocket.fanlinc.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidTitleEditException extends RuntimeException {

  public InvalidTitleEditException(String message) {
    super(message);
  }
}
