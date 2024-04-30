# Critter Care

_Note_: The link below is no longer active, but all code is accurate.

### WPI Webware Final Project: [https://crittercare.glitch.me/](https://crittercare.glitch.me/)
Created by Juliana Porto, Julie Vieira, and Nicole Burgess

## Welcome to Critter Care!

First, login to our example user account. The account information can be found below.

- _Username_: animalLover
- _Password_: pass123

You can also create a new account or login to an existing one, but for grading purposes this preset account will help you avoid lots of unnecessary clicking.
  
This account currently has no critters and a starting balance of $50. You can use this $50 to buy a critter in the Buy a Critter section. Enter your critter name, select your desired critter type, then click the `Buy Critter (-$50)` button.

After your critter has been bought, its lifepoints will begin to decrease over time. To increase your critter's lifepoints and keep it alive, buy resources using the `+$$$` button or hitting the space bar on your keyboard, and apply those resources to your specific critter.

As you continue the game, you can buy more critters - _just remember to keep them all alive_!

If a critter runs out of lifepoints, you will no longer be able to feed it, exercise it, or sleep it; however, it will stay in your critter table so that it's memory lives on!

### To accomplish this:

- Frontend UI components were created using HTML, CSS, JavaScript, and Handlebars JS.
- MongoDB was used for persistent data storage.
- An Express.js server was used to connect the frontend UI to the backend database.
- Cookies were used to maintain user sessions.
- The [sakura](https://oxal.org/projects/sakura/) CSS classless framework was used for the bulk of styling. Additional CSS overriding was used for various accessibility and functionality purposes.
- User logins are verified using a table in the MongoDB database that stores all usernames and passwords.
- Implemented accessibility features using some of W3C's tips for writing, tips for designing, and tips for development.
- Added media queries for mobile UI styling.

As explained above, we took various pieces of what we learned throughout the term and implemented them into one fun and engaging project! The game logic proved itself much more challenging than the logic each of us used in A3 and working as a group on such an intense full-stack project also had its benefits and downfalls. Overall, we learned a lot and created a complex and successful final project that displays our skills and that we are proud of!

### Challenges we encountered:

- Having to change various html structures (example: changing how we displayed critters from a list to a table) for easier implementation.
- Making sure everyone understood the game design and logic before digging into the code.
- Using various functions created by other team members to minimize extra work and/or repetitive code.

### What we learned:

- How to create a full-stack web application from start to finish.
- The importance of implementing accessibility features.
- Why you should thoroughly plan our your application design and logic before starting any code.
- The advantages and limitations of the browser.

### Contribution Breakdown:

| Task                              | Member                    |
| :-------------------------------- | :------------------------ |
| Project Concept                   | Juliana, Julie, & Nicole  |
| UI Design                         | Juliana                   |
| User Login Functionality          | Juliana                   |
| Create User Functionality         | Juliana & Julie           |
| Money Clicker Button              | Juliana                   |
| Buy Food Button                   | Juliana                   |
| Buy Exercise Button               | Juliana                   |
| Buy Sleep Button                  | Juliana                   |
| Buy Critter Button                | Julie                     |
| Feed Critter Button               | Julie                     |
| Exercise Critter Button           | Julie                     |
| Sleep Critter Button              | Julie                     |
| Lifepoint Decrease Functionality  | Juliana & Nicole          |
| Presentation                      | Juliana, Julie, & Nicole  |
| Video Demo                        | Juliana, Julie, & Nicole  |
| READ.ME                           | Juliana                   |

### Demo Video: [CS4241 Final Project Critter Care, Nicole, Juliana, Julie](https://www.youtube.com/watch?v=LpaoW_cZKPI)
