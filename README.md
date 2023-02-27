# Favorite Things App

After finishing Section 2, you have a working app for "course goals" that accepts input for new goals and deletion of existing goals, and displays them in a list. You will make a new project with the same functionality -- accepts input, stores data in state, displays the list of data, uses buttons to add new material or cancel the add, and uses touch to delete material.

In this project, you will ask the user for 2 pieces of data: favorite "thing" and favorite "item" in that "thing". For example, if the favorite color is red, the "thing" is "color" and the "item" is "red". The user enters "color" as the favorite thing, and "red" as the item for that favorite thing. So this project has 2 inputs for a single entity -- "favorite" contains "thing" and "item". The state needs to contain an ID, as seen in the video, as well as the favorite "thing", and the favorite "item".

You may copy the project from the video, or start a new project. If you copy, you must change the names of everything so it no longer refers to "course" or "goals" -- those are not acceptable in this new app, which has to do with favorite things.

Here are screenshots, showing the behavior of this app. Note that it isn't feasible to get a screenshot showing that cancel and deletion work. Make sure your app does cancel input without adding it to the list, and does delete an item in the list with a press or touch on that item in the display. You must demonstrate this to the instructor.

Images below show: (on left) the app when launched; (on right) the app when you click on the "Add New Fav" button.

FavThings-launch.PNG     FavThings-inputScreen.PNG

Images below show: (on left) the app when typing in the data for the new fav; (on right) the result after pressing Add.

FavThings-input.PNG     FavThings-inputResult.PNG

Image below shows: the app after entering multiple favorites.

FavThings-Done.PNG

Notice the style. The button on the main screen must be some other color than the default blue, and the  Add button on the input screen must match it. On the input screen, the placeholder text must explain what the user needs to enter, so match the screenshot. The list items must contain both the "thing" and the "item", and the code needs to add the word "Favorite" before the "thing". For example, if the user entered "Color" as the favorite thing, and "Red" as the item for that favorite, the code of the app needs to display "Favorite Color" by adding "Favorite" to the "thing", and the item "Red" must appear in the same block in the list. There must be a background color in the list items that is different from the one in the video. You may select whatever colors you wish.

Take 5 screenshot similar to those above.

Be sure to go see the instructor when you submit the project, because you must demonstrate it, to show cancel and delete operations.

Submission: Zip together the root folder and the 5 screenshots, and submit the single zipped folder.

https://reactnative.dev/docs/environment-setup

![p](https://github.com/bell-kevin/favoriteThings/blob/main/screenshots/1.PNG)

![p](https://github.com/bell-kevin/favoriteThings/blob/main/screenshots/2.PNG)

![p](https://github.com/bell-kevin/favoriteThings/blob/main/screenshots/3.PNG)

![p](https://github.com/bell-kevin/favoriteThings/blob/main/screenshots/4.PNG)

![p](https://github.com/bell-kevin/favoriteThings/blob/main/screenshots/5.PNG)

## Storing Projects 

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
