# Serverless-Web-Application-700756995

#This is a Serverless web application for creating user account in Zillow Website . This application can save user data and create account and we can able to retreive the user data saved in database. User provide details like name, email and password and creates account. 

Steps for creating serverless web application:
1.	Uploaded backed and frontend files into Cloud 9.
2.  Created new DynamoDB table "UserProfile". Used to store user data.
3.  Created two lambda functions: "createuseraccount" and  "getusers".
4.	Tested both lambda functions by importing python code and tested lambda function with sample data by configuring events
5.	Created new REST API gateway and created two new methods: POST and GET.
6.	Enabled CORS and deployed the API with new stage "dev".
7.	Copied the stage invoke URL and pasted in js file.
8.	Tested the serverless web application by inserting data.
9.	After inserting data, Able to see inserted data in DynamoDB tables.
10.	And after clicking on "getusers" button in webpage, able to retrieve userdata present in dynamodb table.

