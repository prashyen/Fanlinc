package com.teamrocket.fanlinc.services;

import com.teamrocket.fanlinc.requests.AddFandomRequest;
import com.teamrocket.fanlinc.requests.AddJoinedFandomRequest;
import com.teamrocket.fanlinc.responses.AddFandomResponse;
import com.teamrocket.fanlinc.responses.AddJoinedFandomResponse;

public interface FandomService {

  AddFandomResponse addFandom(AddFandomRequest request);

  AddJoinedFandomResponse addJoinedFandom(AddJoinedFandomRequest request);

}
