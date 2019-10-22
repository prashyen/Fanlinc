Sprint1 Planning Meeting 
Meeting Minutes
	
Participants:
	Aamir Haroon, 
	Abel Debalkew, 
	Prashyen Kanagarajah, 
	Rahul Ramani, 
	Ruidan Ji, 
	Tahasun Tarannum, 
	Carl Alvares                                                     |

Setting Up the Project
We explored the options of technologies for the frontend, backend, and the database. After deliberating the pros and cons of each technology, we decided to use React, Java, and Neo4j respectively.

Database Design
We outlined the nodes and their relationships for our NoSQL database. With thoughtful analysis, we reached a consensus on the properties of our nodes and relationships which were further to be examined and outlined on System-Design.doc. 

Task Assignment
We set priorities for the sprint and divided tasks among ourselves as outlined below. Furthermore, stories were added to Jira, divided into tasks and assigned equally to all team members.


	User stories to be completed in Sprint 1:
		a) TEAM-1:Sign up/Create profile
		b) TEAM-2:Login to account
		c) TEAM-3:Logout of account

	User Story a) TEAM-1:Sign up/Create profile is broken down into the following tasks :
		i) Decide database design and prepare Software Architecture diagram.			[ASSIGNED TO: Prashyen Kanagarajah]
		ii) Create CRC Cards to represent classes, responsibilities, and collaborators.		[ASSIGNED TO: Aamir Haroon]
		iii) Initialize Spring application with appropriate dependencies.			[ASSIGNED TO: Carl Alvares]
		iv) Implement CreateNewUser API.							[ASSIGNED TO: Rahul Ramani]
		v) Set up Front End. 									[ASSIGNED TO: Tahasun Tarannum]
		vi) Implement UI for Registration Page.							[ASSIGNED TO: Abel Debalkew]

	User Story b) TEAM-2:Login to account is broken down into the following tasks:
		i) Implement base design(HTML/CSS). 		[ASSIGNED TO: Tahasun Tarannum]
		ii) Implement loginAsUser API. 			[ASSIGNED TO: Carl Alvares]
		iii) Implement UI for login page. 		[ASSIGNED TO: Ruidan Ji]


	User Story c) TEAM-3:Logout of account is broken down into the following tasks:
		i) Implement UI for logout buttion and redirect to login page. [ASSIGNED TO: Ruidan Ji]

		Sprint1 Backlog:

StoryID| Priority |                                                                               Story                                                                              | Story Points | Criteria of Satisfaction                                                                                                                     |
|------|----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------------:|----------------------------------------------------------------------------------------------------------------------------------------------|
|TEAM-1| Highest  | As a new user, I would like to sign up to Fanlinc and create a profile so that I can use the application.                                                        |            8 | Type in username, password and user info, and creates new profile and feed page is displayed.                                                |
|TEAM-2| High     | As a user, I should be able to login so that I can access my account.                                                                                            |            3 | Type in username and password and Fanlinc feed page is displayed.                                                                            |
|TEAM-3| High     | As a logged in user, I should be able to log out so that someone else using my device can not access my account.                                                 |            2 | Select Logout button and sign in page is displayed, with account logged out message.    