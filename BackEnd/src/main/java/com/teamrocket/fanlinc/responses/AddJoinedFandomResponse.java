package com.teamrocket.fanlinc.responses;

public class AddJoinedFandomResponse {

    private String relationshipName;

    public AddJoinedFandomResponse(String relationshipName) {
        this.relationshipName = relationshipName;
    }


    public String getRelationshipName() {
        return relationshipName;
    }
}
