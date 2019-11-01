package com.teamrocket.fanlinc.repositories;

import com.teamrocket.fanlinc.models.Post;
import org.springframework.data.neo4j.repository.Neo4jRepository;

public interface PostRepository extends Neo4jRepository<Post, Long> {
}
