# GrouMan-Front-End
My ReactJS Student Project

This is an internal company project for the travel industry, specifically the tour operating process of setting and selling organized cruise groups.

1. The app has a public part which allows all non-logged in employees to see what groups are available and which are the guests, booked for each group.
   Unauthenticated users could be interns or some phone consultants who have to contact the customers.
2. After register, each user can view AND add new passengers to each of the offered cruise groups. They can also edit and delete passengers, or guests, but only the ones that were booked by this very employee.
3. Registered employees also have access to the capability of creating new cruise groups. They have full control over their authored groups, i.e. they can also edit the contents and/or delete a group.
4. There is also an admin part where the admins can also access a list of all registered users of the app and modify or delete staff.
5. The front end offers validation for all entered data, so that it is compliant with the specifics of cruise group business.

It has been built with Vite. It is bundled with a practice server. 
Client is started from /client folder by terminal commands:
npm install
npm run dev

Application will run on localhost:5173

Server is started from /server folder by terminal command:
node server.js

App is also deployed to firebase and can be accessed to https://grouman-73a41.firebaseapp.com/
 

