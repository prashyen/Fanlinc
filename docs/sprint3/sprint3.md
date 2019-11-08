# Sprint 3 Planning Meeting

### Participants 
* Aamir Haroon 
* Abel Debalkew 
* Prashyen Kanagarajah
* Rahul Ramani
* Ruidan Ji
* Tahasun Tarannum
* Carl Alvares 

### Fandom Feed 
We decided the description of each fandom should be displayed as a header on top of each fandom tab in the main feed. This header will contain a join/leave button, name of fandom, description of the fandom and a picture of the fandom. 

### Fandom Sidebar and Suggested Fandoms Sidebar
The join fandom button will be on top of the fandom sidebar in the main feed page. There will be a seperate sidebar for "suggested fandom" where a user can join the fandom. 

### Like functionality on Posts
Posts will have a like count.

### Unit Tests 
We will be have unit tests for the backend

## Task Assignment 
We set priorities for the sprint and divided tasks among ourselves as outlined below. Furthermore, stories were added to Jira, divided into tasks and assigned equally to all team members.

## User stories to be completed in Sprint 3
* TEAM-4:Join Fandoms
    * Implement Join Fandom Functionality  [Assigned to Tahasun Tarannum]
* TEAM-7:View Profiles
    * Create Sidebar Component [Assigned to Aamir Haroon]
* TEAM-12:Filter Posts
    * Add filter functionality to post feed component [Assigned to Carl Alvarez]
    * Update feed to filter to logged in user's type and level by default [Assigned to]
* TEAM-49: Test Application
    * Add unit tests to the back-end [Assigned to Carl Alvarez]
    * Add more default users and posts to default database for testing the feed [Assigned to Aamir Haroon]
* TEAM-13: Like/Unlike Posts
    * Update Post model and post response to add list of users who liked post [Assigned to Rahul Ramani]
    * Implement modifyLikes API [Assigned to Rahul Ramani]
    * Refactor Feed to display posts in a nicer way [Assigned to]
    * Add like counter to posts in Feed component [Assigned to]
* TEAM-57: View Fandom Details on Feed
    * Implement getFeedDetails API [Assigned to Rahul Ramani]
    * Add component to the top of each fandom feed with fandom details  [Assigned to Tahasun Tarannum]
    * Implement leaveFandom API [Assigned to Aamir Haroon]
    * Add "leave fandom" functionality to fandom details component [Assigned to Prashyen Kanagarajah]
* TEAM-10: Edit/Delete Posts
    * Implement editPost API [Assigned to Rahul Ramani]
    * Add edit button to posts and edit post modal  [Assigned to Prashayen Kanagarajah]

# Sprint 3 Backlog
| Story ID | Priority |                                                                               Story                                                                              | Story Points |                                                           Criteria of Satisfaction                                                           |
|----------|----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:------------:|:--------------------------------------------------------------------------------------------------------------------------------------------:|
| TEAM-4   | High     | As a user, I would like to join new fandoms so that I can join a community that I have gained interest in.                                                       |       5      | Select Fandom from dropdown menu and fandom related posts are displayed in feed.                                                             |
| TEAM-7   | High     | As a user, I want to see my profile and other people’s profiles so that I can check if my information is accurate and to get to know users that I interact with. |       8      | Select profile name of user of specific post and selected users profile page is displayed.                                                   |
| TEAM-10  | Medium   | As a user, I should be able to edit or delete a post so that I can change content if I make a mistake.                                                           |       5      | Select Edit or delete in the ellipsis menu icon of my post, and the post edit page is displayed or the post is removed/deleted respectively. |
| TEAM-12  | Low      | As a user, I should be able to filter the posts I see by fandom, type of fan, and level of fandom so that I can filter content to make it more relevant to me.   |      13      | Select the filter button and choose the type of filter and the feed page displays posts with the filter applied.                             |
| TEAM-13  | Low      | As a user, I should be able to like and unlike a post so that I can interact with content I see.                                                                 |       5      | Select the like or unlike button below the post, and the post indicates that it has been liked or unliked respectively.                      |
| TEAM-57  | Medium   | As a user, I want to be able to see information about a fandom when I view its posts                                                                             |       8      | Information about the fandom and the fandom's display photo should appear above the feed for the fandom                                      |
| TEAM-49  | Medium   | As a developer, I want to be able to test my front-end and back-end applications with a sample database to ensure that they work as intended                     |       5      | Application should have a default database for testing purposes, and should have unit tests to ensure code works as intended                 |




