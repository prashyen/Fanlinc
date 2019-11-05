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
		d) TEAM-48: Standardize front-end React architecture
		e) TEAM-9: Create Posts
		f) TEAM-7: View Profiles
		g) TEAM-12: Filter Posts
		h) TEAM-49: Test Application

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
		
	User Story d) TEAM-48: Standardize front-end React architecture
		i) Make front-end architecture consistent                                           [ASSIGNED TO: Carl Alvares]
		ii) Record front-end architecture in System Design document                         [ASSIGNED TO: Carl Alvares]
		
	User Story e) TEAM-9: Create Posts
		i) Create modal for post creation                                                   [ASSIGNED TO: Prashyen Kanagarajah]
		ii) Implement createPost API                                                        [ASSIGNED TO: Aamir Haroon]
		
	User Story f) TEAM-7: View Profiles
		i) Create sidebar component                                                         [ASSIGNED TO: Aamir Haroon]
		iii) Implement getPostsByUser API                                                   [ASSIGNED TO: Abel Debalkew]
		iv) Implement getUserDetails API                                                    [ASSIGNED TO: Rahul Ramani]
		
	User Story g) TEAM-12: Filter Posts
		i) Implement getPostsFilterBy API                                                   [ASSIGNED TO: Rahul Ramani]
		ii) Add "filter" functionality to post feed component                               [ASSIGNED TO: Ruidan Ji]
		
	User Story h) TEAM-49: Test Application
		i) Initialize default database for testing                                          [ASSIGNED TO: Aamir Haroon]
		ii) Add unit tests to back-end                                                      [ASSIGNED TO: Carl Alvares]
		iii) Add unit tests to front-end

		Sprint2 Backlog:

| StoryID | Priority | Story                                                                                                                                                            | Story Points | Criteria of Satisfaction                                                                                                     |
|---------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------|
| TEAM-4  | High     | As a user, I would like to join new fandoms so that I can join a community that I have gained interest in.                                                       | 5            | Select Fandom from dropdown menu and fandom related posts are displayed in feed.                                             |
| TEAM-1  | Highest  | As a new user, I would like to sign up to Fanlinc and create a profile so that I can use the application.                                                        | 8            | Type in username, password and user info, and creates new profile and feed page is displayed.                                |
| TEAM-11 | Medium   | As a user, I should be able to see the posts that I or other users have made so that I see content created on the application.                                   | 21           | The feed page displays relevant posts from other users.                                                                      |
| TEAM-48 | Medium   | As a developer, I want my front-end React code to be consistent and adhering to best practices                                                                   | 5            | Front-end code should be using either functional components or class components and routing should be set-up properly        |
| TEAM-9  | Medium   | As a user, I should be able to create a post so that I share content relevant to my fandom.                                                                      | 13           | Select Post button from feed page, input post info and select post button, and post appears in the specified fandom feed.    |
| TEAM-7  | Medium   | As a user, I want to see my profile and other people’s profiles so that I can check if my information is accurate and to get to know users that I interact with. | 13           | Select Post button from feed page, input post info and select post button, and post appears in the specified fandom feed.    |
| TEAM-12 | Low      | As a user, I should be able to filter the posts I see by fandom, type of fan, and level of fandom so that I can filter content to make it more relevant to me    | 13           | Select the filter button and choose the type of filter and the feed page displays posts with the filter applied.             |
| TEAM-49 | Medium   | As a developer, I want to be able to test my front-end and back-end applications with a sample database to ensure that they work as intended                     | 5            | Application should have a default database for testing purposes, and should have unit tests to ensure code works as intended |
