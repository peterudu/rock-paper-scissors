# Rock Paper Scissors

The Rock Paper Scissors website is a simple game application which visitors can easily learn and play with a short period. The rules of the game are included on the page.

The graphics of the game are basic and this makes it appealing to all age groups and enables the user of the application to easily focus on enjoying the game.

![Image of the website](/assets/images/amiresponsive.webp)

[The live link to the hosted project](https://peterudu.github.io/rock-paper-scissors/ 
) 

## User Experience (UX)
### User Stories
#### First Time Visitors Goals
- I want to be able to access and run the game site with large and small devices.
- I want a game app that is easy to learn and understand.
#### Returning Visitors Goals
- I want a game site which is satisfying to use.
- I want a game website that is challenging.
#### Frequent Visitors Goals
-  I want a site that is constantly being improved and offers new features.
 
## Design
### Colour Scheme
The general aim is to make the game look simple and in this context the text content are coloured black on a white background. Brighter colours are used to differentiate between the actions of the player and that of the opponent computer as such a light blue colour defines the player area and red colour is used for the computer actions. The contrasting colour mix of white and black as well as light blue are used to present the basic face of the website.

![Range of colours](/assets/images/color-range.webp)
The colour choice was aided using the [webfx color-picker](https://www.webfx.com/web-design/color-picker/ ) tool

### Typography
Google Fonts was used to select the free font Roboto which is the only font used for the whole of the website. The Roboto font is a sans-serif font.
### Wireframes
Wireframes of the game page was created as blueprint for desktop and mobile devices.

- [Wireframe of game page on desktop device](/assets/images/balsamiq-wireframe-desktop.webp)
### Features
The Rock Paper Scissors website has a single page with several attractive features.
- Header
    - The header contains the heading title of the site. It has a descriptive large text font which is immediately drawn to the attention of the site visitor.
    
    ![Header](/assets/images/header.webp)

- Footer
    - The footer section lies at the bottom of the game page and it contains the rules of the game. 
    - The footer rules content enables new visitors and beginners to quickly grasp how the game is played.

    ![Footer](/assets/images/footer.webp)

- Game Area
    The game area is the main action area of the game page. It contains the game control buttons, message display, remaining-rounds display, scoreboard, the player-computer choice boxes and the reset button.
    ![Game Area](/assets/images/game-area.webp)
    - The game [control buttons](/assets/images/control-buttons.webp) enable the player to choose from one of three game buttons options inorder to start the game. The selected control button represents the player's choice of his game's strategy move. They are important because they also trigger other features of the game to be activated, for example the reset button
    - The [message display](/assets/images/message-display.webp) feature informs the site user about the winner of the last round of game that was just completed.
    - The [remaining rounds](/assets/images/remaining-rounds.webp) container output informs the site user about who the overall winner of the game is. With a remaining rounds countdown some excitement is built into the game.
    - The [scoreboard](/assets/images/scoreboard-scores.webp) displays the player and computer game scores. It provides an overview of how the game winner has emerged. When the scoreboard shows that either player or computer has achieved a score of 3 the game ends with the [gameover-phase](/assets/images/gameover-phase.webp) in which the control buttons become inactive and the overall winner of the game is displayed.
    - The [player - computer choice boxes](/assets/images/choice-boxes.webp) are used as a graphic tool to visualize the game stragegy choices made by both the player and the computer. This feature enables the user to quickly and easily identify his choice and compare that with choice made by the computer.
    - The [reset button](/assets/images/reset-button.webp) is an important feature which offers the user the chance to clear the and abruptly stops the current game. Also when a game is reset the user is redirected to the [starting page](/assets/images/starting-page.png) of the game site and a new game can be initiated again.
    
    

### Accessibility
I took the following measures to ensure that the website is accessible:
- The code was written using semantic HTML.
- On the buttons I added aria-label attributes to enable screen readers understand their purpose.
- I used contrasting background and text colours on the website as well as differing colours for the player and computer action areas.
## Technologies Used
### Languages Used
The languages used to create this site were HTML, CSS and JavaScript
### Frameworks, Libraries & Programs Used
Git was used for version control.

Github was used to save and store the files for the website.

Gitpod workspace was used to write and edit code for the website.

Balsamiq was used to create wireframes for the website.

Google Fonts was used to import Roboto font used on the game app.

Chrome DevTools was used to inspect the rendered HTML and test out features of the website.

[Am I Responsive](https://ui.dev/amiresponsive) was used to show how the website would look on different devices.

[Birme](https://www.birme.net/?no_resize=true&image_format=webp) was used to change images to webp format.

[Favicon.io](https://favicon.io/) was used to create favicon for the website

## Deployment & Local Development
### Deployment
The site was deployed to GitHub pages. For the deployment the following steps are required:
1. Login to GitHub repository and navigate to the Settings tab. 
2. From the left sidebar options select Pages from the menu.
3. Under section Github Pages go to subsection Build and deployment, then set Branch to main and click save. The website is deployed and a live link for the website will be generated.

### Local Development
To clone this project proceed with the following steps:
1. Login to GitHub and go to the repository of this project, https://peterudu.github.io/rock-paper-scissors/.
2. Chose and click the green Code button.
3. Select a cloning method from one of options, either HTTPS, SSH or GitHub CLI and copy the offered link.
4. Open up the terminal of your code editor, select a directory for your project, type in the Git command  - ‘git clone’ and then paste in the copied link from the github repository.
## Testing
### Automated Testing
#### W3C Validator
- [W3C HTML validator](https://validator.w3.org/) was used to validate the HTML on the following pages of the website.
    - [index.html](/assets/images/html-validator.webp) - passed test no errors 
<br>

- [W3C CSS validator](https://jigsaw.w3.org/css-validator/) was used to validate the CSS stylesheet.
    - [style.css](/assets/images/css-validator.webp) - passed test no error
#### Lighthouse
I used the Lighthouse feature from Chrome Developer Tools to test the levels of accessibility, performance and best practices for moblie and desktop devices. For both devices the accessibility results were over 97 percent.
- [Desktop Results](/assets/images/lighthouse-desktop.webp)
- [Mobile Result](/assets/images/lighthouse-mobile.webp)
#### JSHint
I used the [JSHint validator](https://jshint.com/) to test the JavaScript. No error was reported:
Metrics reported were as follows:
 - There are 6 functions in this file.
 - Function with the largest signature take 2 arguments, while the median is 1.
 - Largest function has 21 statements in it, while the median is 8.5.
 - The most complex function has a cyclomatic complexity value of 8 while the median is 2.5.
### Manual Testing
#### Testing User Stories
Firsttime Visitors
| Goals | How are they achieved? |
| ---| ---|
| I want to be able to access and run the game site with large and small devices. | I developed the game site so that it could be accessed and played with both a small mobile phone and a large desktop computer. |
| I want a game app that is easy to learn and understand. | The site shows the user the rules on how to play the game at the bottom footer section. The rules are written and described in a clear and simple way, for instance rock beats scissors. Visually the chosen game option is also displayed |

Returning Visitors
| Goals | How are they achieved? |
| ---| ---|
| I want a game site which is satisfying to use. | The colourful game and the ability of the player to set his own individual goals creates satisfaction for the site user. Also apart from winning the endgame the possibility of a player engaging and winning round duels against the computer creates extra satisfaction to the user of the site. |
| I want a game website that is challenging. | The game is may be simple to play but the inbuilt random generated choice of the computer challenges the player for him to win at least 50 percent of the games  |

Frequent Visitors
| Goals | How are they achieved? |
| ---| ---|
| I want a site that is constantly being improved and offers new features. | The game allows for extra new features to be added in future. Such features could include setting a maximum round time for a player to select a control button to make it more challenging, make it possible to have multiple players or by also adding more game choice button options to the already existing rock, paper, scissors buttons. |
#### Full Testing
Full testing was performed on:
- Laptop:
    - Lenovo V15-IGL
- Mobile Device:
    - LG Velvet 

I used my laptop and mobile device to conduct the following test on the main game area:
| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| ---| ---| ---| ---| ---|
| GAME AREA |  |  |  |  |  
|  Control Buttons  | If one of the control buttons is clicked the user should be linked to the game page which should show the correct image of the game option that he has selected in the player choice box, the message display should show who won the round, remaining rounds should be displayed and the reset button show become active and visable. | Clicked a control button  |The game page shows a new game round with image of the selected game option, a new message displays the winner of the round, the remaining rounds is displayed and reset button is displayed | pass |
| Message Display | If a control button is clicked the message display should show who won the round. | Clicked a control button | Message display shows who won the last round. | pass |
| Remaining Rounds Display | If a control button is clicked the remaining rounds display should show the remaining game rounds. After three successful rounds the remaining rounds should show the overall game winner | Clicked a control button | Remaining rounds display showed the game rounds remaining. After several clicks and 3 successful won rounds the overall game winner was displayed | pass |
| Scoreboard | If a control button is clicked the scoreboard updates the scores for either player or for computer or else no score increment in case of a drawn round. | Clicked a control button | The player score or computer score increased depending on who won the round. If no winner emerged then the scores for either player or computer are not updated. | pass |
| Player and Computer Choice Boxes | If the user selects a specific game control button option then the player choice box should display the exact image of the selected game option. The computer choice box should display a randomly generated image of one the three game options | Clicked a control button | The player choice box showed the exact image of the game option I selected and a randomly generated image of one of the game options was displayed on the computer choice box | pass |
| Reset Button | If the user clicks the reset button all the already created player and computer scores and data will be cleared from the screen. The user will be redirected and the starting game page will be displayed. All scoreboard scores for player and computer will be set to 0. Remaining rounds will be set back to 10 | Clicked a control button | The already existing scoreboard scores and remaining rounds were cleared and the user is directed to the starting game round phase | pass |    

#### General Testing
The single game page was tested on Chrome, Firefox and Edge browsers and they were all successful.    
### Unfixed Bugs
 - I could not fix the bug on how to reset remaining rounds

## Credits
### Code Used
- Code used to build the structure of the game area of the page was based on [Code Institute](https://codeinstitute.net/de/) Full Stack Development Software course
- Code used to build the game page was also inspired from Brad Traversy (Traversy Media) course in [YouTube](https://www.youtube.com/) 
- Code used to build the reset button feature was inspired from Professor Richard Homa tutorial course in [YouTube](https://www.youtube.com/) 
### Content
- The structure and layout used to create the README file was modelled on example by [Kera Cudmore](https://github.com/kera-cudmore/readme-examples/blob/main/milestone1-readme.md) 

### Media
#### Images
TThe images used for the site, namely the rock, paper and scissors figures were free source images from:
- [Wikimedia Commons](https://commons.wikimedia.org/wiki/Category:Images)
### Acknowledgements
I acknowledge the following people who helped me complete this project:
- [Jubril Akolade](https://www.linkedin.com/in/jubrillionaire/?originalSubdomain=ca) my Code Institute mentor


 
