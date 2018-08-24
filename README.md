# React
React is A JavaScript library for building user interfaces. Here there's a short guide for getting started with your first React application. Before starting to build the application refresh our knowledge of git environment and some git commands.

***

## 1. Git and Node
### 1.2 Downloading and Installing Git
Installing some of the GUI tools like GitHub Desktop will install Git on your computer

### 1.3 Some Global Configuration for Git

* Check to make sure that Git is installed and available on the command line, by typing the following at the command prompt:

       git --version

* To configure your user name and email to be used by Git, type the following at the prompt

      git config --global user.name "Your Name"
      
      git config --global user.email <your email address>


## 2. Set up your Application
### 2.1 Installing create-react-app
From the React documentation we learn that the create-react-app CLI makes it easy to create an application that already works, right out of the box. It already follows the best practices suggested by the React community!

To install create-react-app globally, type the following at the prompt:

     npm install -g create-react-app@1.5.2.

This will make the command line tool for creating React applications. To learn more about the various commands that this CLI provides, type at the prompt:

     create-react-app --help

### 2.2 Generating and Serving a React Project using create-react-app
At a convenient location on your computer, create a folder named React and move into that folder.
Then type the following at the prompt to create a new React application named confusion:

     create-react-app confusion

This should create a new folder named confusion within your React folder and create the React application in that folder.
Move to the confusion folder and type the following at the prompt:

     npm start

This will compile the project and then open a tab in your default browser at the address http://<Your Computer's Name>:3000.
You can initialize your project to be a Git repository by typing the following commands at the prompt:

     git init
     git add .
     git commit -m "Initial Setup"

Thereafter you can set up an online Git repository and synchronize your project to the online repository. Make sure that the online Git repository is a private repository. If you create the repository from GitHub, then clone the repository locally thanks to Github Desktop, and finally start with creating the app inside the repository all setting of git are already done automatically.

## Final

Now you're ready to:
- go to this project on Github,
- download or clone the repository,
- run npm start and view this simple app

Try to understand how does it works and if you have some question, let's open an issue on Github.


