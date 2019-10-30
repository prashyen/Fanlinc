package com.teamrocket.fanlinc.repositories;

import com.teamrocket.fanlinc.models.Joined;
import org.springframework.data.neo4j.annotation.Query;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;

public interface JoinedRepository extends Neo4jRepository<Joined, Long> {

    @Query("MATCH (a:User),(b:Fandom)" +
            "WHERE a.username = {username} AND b.fandomName = {fandomName}" +
            "CREATE (a)-[r:JOINED { type: {type} , level: {level}}]->(b)" +
            "RETURN type(r)")
    String joinUserWithFandom(@Param("username") String username, @Param("fandomName") String fandomName,
                                        @Param("type") String type, @Param("level") String level);

    @Query("MATCH (a:User { username: {username} })-[r:JOINED]->(b:Fandom{fandomName:{fandomName}})" +
            "RETURN type(r)")
    String findJoinedByUsernameAndFandomName(@Param("username") String username, @Param("fandomName") String fandomName );

}

