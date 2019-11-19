CRC Cards for Back-End Java Classes
-----------------------------------

Class name: UserBuilder

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Creates a user

Collaborators:

-   User

Class name: FandomBuilder

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Creates a Fandom

Collaborators:

-   Fandom

Class name: PostBuilder

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Creates a Post

Collaborators:

-   Post

Class name: AccountController

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Profile or account related API calls such as creating an account or
    editing a profile

-   Interacts/manipulates the user model to acquire/update information
    about the user

-   Interacts or manipulates the JOINED model, to keep track of fandoms
    joined by the user

Collaborators:

-   AccountService

Class name: FeedController

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Generates the feed with posts

-   Interacts and/or manipulates the post model to get or edit
    information about posts

Collaborators:

-   Feed

Class name: FandomController

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Responsible for acquiring information about the fandoms,

-   Interacts and/or manipulates the fandom model to get information
    about the fandoms.

Collaborators:

-   Fandom

-   FandomService

Class name: UsernameNotUniqueException

Parent class (if any): RuntimeException

Subclasses (if any):

Responsibilities:

-   Exception error for throwing when a Username is not unique

Collaborators:

Class name: UserNotFoundException

Parent class (if any): RuntimeException

Subclasses (if any):

Responsibilities:

-   Exception error that is thrown when a User is not found

Collaborators:

Class name: User

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Holds all the variables and methods of a user class

Collaborators:

Class name: Fandom

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Holds all the variables and methods of a Fandom class

Collaborators:

Class name: Post

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Holds all the variables and methods of a Post class

Collaborators:

Class name: UserRespository

Parent class (if any): Neo4jRepository

Subclasses (if any):

Responsibilities:

-   Interface with method to find a user given a username

Collaborators:

-   UserRespository

Class name: AddUserRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to add a user

Collaborators:

Class name: ValidateUserRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to validate User

Collaborators:

Class name: AddUserResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response when user added

Collaborators:

Class name: ValidateUserResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response when user validated

Collaborators:

Class name: AccountService

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Username and password validation

-   Adds Users in the database

Collaborators:

-   UserRespository

Class name: PostController

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Handles endpoints related to the Post model (creating, updating,
    retrieving)

Collaborators:

-   PostService

Class name: PostService

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Retrieves and updates Post models using the PostRepository, then
    manipulates them and formats them to send through the endpoints in
    PostController

-   Performs error checking on parameters sent through requests

Collaborators:

-   PostController

-   PostRepository

-   UserRepository

-   FandomRepository

Class name: PostRepository

Parent class (if any): Neo4jRepository

Subclasses (if any):

Responsibilities:

-   Contacts database to retrieve and update Post objects

Collaborators:

-   Post

Class name: JoinedRepository

Parent class (if any): Neo4jRepository

Subclasses (if any):

Responsibilities:

-   Contacts database to retrieve and update Joined objects

Collaborators:

-   Joined

Class name: JoinedBuilder

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Creates a Joined object

Collaborators:

-   Joined

Class name: UserDetailsResponseBuilder

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Creates a UserDetailsResponse object

Collaborators:

-   UserDetailsResponse

Class name: AddFandomRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to add a fandom

Collaborators:

Class name: AddJoinedFandomRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to join a user to a fandom

Collaborators:

Class name: AddPostRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to add a post

Collaborators:

Class name: UserDetailsRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to get details of a user

Collaborators:

Class name: UserFandomsRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to get the fandoms a user has joined

Collaborators:

Class name: EditPostRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to edit specified fields of a post

Collaborators:

Class name: AddFandomResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from addFandom API

Collaborators:

Class name: AddJoinedFandomResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from addJoinedFandom API

Collaborators:

Class name: AddPostResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from addPost API

Collaborators:

Class name: FilterPostsResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from filteredPosts API

Collaborators:

Class name: UserDetailsResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from userDetails API

Collaborators:

Class name: UserFandomsResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from userFandoms API

Collaborators:

Class name: EditPostResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from editPost API

Collaborators:

Class name: GetFandomResponse

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Response from getFandomDetails API containing all fandom info

Collaborators:

Class name: UserNotInFandomException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when a User tries to post in a Fandom
    that they are not a part of.

Collaborators:

Class name: FandomAlreadyExistsException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when a users tries to create a fandom
    that already exists

Collaborators:

Class name: UserAlreadyJoinedFandomException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when a User attempts to join a Fandom
    that they have already joined

Collaborators:

Class name: FandomNotFoundException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when a Fandom is not found

Collaborators:

Class name: InvalidLevelException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when level is not one of {"1", "2",
    "3", "4"}

Collaborators:

Class name: InvalidTypeException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when type is not one of {"General",
    "Vendor/Artist", "Cosplayer"}

Collaborators:

Class name: InvalidEditException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when title or fandom is an empty string

Collaborators:

Class name: PostNotFoundException\
Parent class (if any): RuntimeException\
Subclasses (if any):\
Responsibilities:

-   Exception error for throwing when a post could not be found

Collaborators:

Class name: DeletePostRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to delete a post

Collaborators:

Class name: LeaveFandomRequest

Parent class (if any):

Subclasses (if any):

Responsibilities:

-   Request to delete a relationship between a fandom and a user

Collaborators:

Component Breakdown for Front-End React Components
--------------------------------------------------

Component name: Root

Responsibilities:

-   Wraps the App component with CookiesProvider to provide cookie
    manipulation

-   Renders App in the DOM

Collaborators:

-   App

-   CookiesProvider (from react-cookie library)

Component name: App

Responsibilities:

-   Stores the cookies object and passes it to components where it is
    required

-   Handles routing, directing to appropriate components

Collaborators:

-   Login

-   Register

-   Home

Component name: Login

Responsibilities:

-   Takes username and password from user, and validates it using an API
    call to server

-   Sets loggedInUser cookie if user is authenticated

Collaborators:

-   Home

-   Register

Component name: Register

Responsibilities:

-   Takes account details from user, and attempts to create an account
    with those details using an API call to server

-   Sets loggedInUser cookie if user account is successfully created

Collaborators:

-   Home

-   Login

Component name: Home

Responsibilities:

-   Contains the main components of the logged in view (Header and
    sidebars)

-   Displays appropriate sidebar (FeedSidebar or ProfileSidebar) based
    on route

Collaborators:

-   Login

-   Header

-   FeedSidebar

-   ProfileSidebar

Component name: Header

Responsibilities:

-   Displays logo and username of user currently logged in

-   Contains a logout button which sets the loggedInUser cookie to null

Collaborators:

-   Home

Component name: FeedSidebar

Responsibilities:

-   Displays list of fandoms, populated with an API call to server

-   Displays Feed component and passes in the fandom name based on what
    user clicks

Collaborators:

-   Home

-   Feed

Component name: Feed

Responsibilities:

-   Displays list of posts from the passed in fandom name or passed in
    username using an API call to server

-   If fandom name was passed, displays PostModal component and passes
    in the fandom name to this component

Collaborators:

-   FeedSidebar

-   PostModal

-   ProfileSidebar

Component name: PostModal

Responsibilities:

-   Displays a modal that can be clicked to bring up a "create post"
    dialog

-   Allows user to enter details for a post and submit it to the passed
    in fandom name using an API call to server

Collaborators:

-   Feed

Component name: ProfileSidebar

Responsibilities:

-   Displays information about logged in user, populated with an API
    call to server

-   Displays Feed component and passes in the username of the currently
    logged in user

Collaborators:

-   Home

-   Feed
