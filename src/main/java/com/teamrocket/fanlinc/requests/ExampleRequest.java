package com.teamrocket.fanlinc.requests;

import javax.validation.constraints.NotNull;

public class ExampleRequest {

    @NotNull
    private String id;

    public String getId() {
        return id;
    }
}
