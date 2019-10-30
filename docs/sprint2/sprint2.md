Sprint2 Planning Meeting 
Meeting Minutes
	
Participants:
	Aamir Haroon, 
	Abel Debalkew, 
	Prashyen Kanagarajah, 
	Rahul Ramani, 
	Ruidan Ji, 
	Tahasun Tarannum, 
	Carl Alvares                                                     |

UI Planning for feed and profiles
We decided on the landing page for the users: a new user will land on their profile page after registration and an old user will land on the feed page after login. Post creation will be available on the feed page. Upon a post creation, the page will refresh to set the latest post on top of the feed.

Technical Details
We decided on using cookies to track the active user for the "session". We will be working with a test database of predefined fandoms which will be used by the users to join or post in.

Updating Design Document/Unit Tests
Every assignee is responsible for adding CRC cards/docstrings as needed for their parts of the code with respect to their assigned tasks. They are also responsible for creating unit tests. 

Task Assignment
We set priorities for the sprint and divided tasks among ourselves as outlined below. Furthermore, stories were added to Jira, divided into tasks and assigned equally to all team members.


	User stories to be completed in Sprint 2:
		a) TEAM-1:Sign up/Create profile
		b) TEAM-4:Join Fandoms
		c) TEAM-11:View Posts

	User Story a) TEAM-1:Sign up/Create profile is broken down into the following tasks :
		i) Implement UI for Registration Page.					            [ASSIGNED TO: Abel Debalkew]

	User Story b) TEAM-4:Join Fandoms is broken down into the following tasks:
		i) Create joinFandom API. 		                                            [ASSIGNED TO: Prashyen Kanagarajah]
		ii) Implement "join fandom" functionality on registration page. 	            [ASSIGNED TO: Tahasun Tarannum]
		iii) Create addFandom API. 		                                            [ASSIGNED TO: Rahul Ramani]


	User Story c) TEAM-11:View Posts in feed is broken down into the following tasks:
		i) Create post feed component.                                                      [ASSIGNED TO: Ruidan Ji]
		ii) Create sidebar component                                                        [ASSIGNED TO: Tahasun Tarannum]
		iii)Create header component                                                         [ASSIGNED TO: Abel Debalkew]
		iv)Implement getPostsByFandom API                                                   [ASSIGNED TO: Ruidan Ji]

		Sprint1 Backlog:

| StoryID | Priority | Story                                                                                                                         | Story Points | Criteria of Satisfaction                                                                      |
|---------|----------|-------------------------------------------------------------------------------------------------------------------------------|--------------|-----------------------------------------------------------------------------------------------|
| TEAM-4  | High     | As a user, I would like to join new fandoms so that I can join a community that I have gained interest in.                    | 5            | Select Fandom from dropdown menu and fandom related posts are displayed in feed.              |
| TEAM-1  | Highest  | As a new user, I would like to sign up to Fanlinc and create a profile so that I can use the application.                     | 8            | Type in username, password and user info, and creates new profile and feed page is displayed. |
| TEAM-11 | Medium   | As a user, I should be able to see the posts that I or other users have made so that I see content created on the application | 13           | The feed page displays relevant posts from other users.                                       |
