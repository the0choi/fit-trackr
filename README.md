# Trackr

Trackr is a web application designed to help monitor, maintain and improve your accountability for your health. Keep daily logs of your day-to-day metrics such as calories, heart rate, sleep and weight manually, or connect to the Fitbit API to extract the data for you.

![home page](https://i.imgur.com/vWlu7tk.png)

**[Visit Trackr by clicking here!](https://trackr-the0choi-1fa6c3dcf348.herokuapp.com/)**

### App features
* Log in with your Google account
* Connect and (optionally) integrate your Fitbit data
* Create and add a daily log via Fitbit or manual entry
* View, edit, delete individual logs for each day
* Optionally add notes to each day
* Track your week's health metrics through the dashboard
* Graphs displayed help you visualise any trends
* Minimalist and user-friendly design for ease-of-use

### Technical features
* Built with Node.js using Express.js framework
* Connects to MongoDB with Mongoose library to store user data
* Database stores data on users, health data and notes attached to daily logs
* Code structured using MVC design
* Demonstrates user CRUD operations using RESTful routing
* Employs EJS templates with partial views
* Connected to Google and Fitbit API via Passport oAuth2 strategy
* Tailwind CSS for UI
* Pushed to GitHub via Git
* Website deployed via Heroku

### ER Diagram
![ERD](https://i.imgur.com/BcjkTaW.png)

User and Health models have a 1:1 relationship
Health and Note models have a 1:M relationship

# Screenshots
![home page](https://i.imgur.com/vWlu7tk.png)
![logged in page](https://i.imgur.com/xxY41r2.png)
![dashboard](https://i.imgur.com/yzc4PZJ.png)
![dashboard 2](https://i.imgur.com/kAY9B3n.png)
![daily log](https://i.imgur.com/PnKaIHg.png)
![day view log](https://i.imgur.com/UyYkukf.png) 
![edit page](https://i.imgur.com/DqIh5ji.png) 

# Technologies Used
* HTML & EJS templates
* Tailwind CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Git
* Heroku
