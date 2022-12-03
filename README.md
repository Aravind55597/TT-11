# DBS TechTrek 1
This repository is meant for DBS TechTrek 1. Please follow the instructions of the organizers.

### REST API Documentation

# Authentication
POST /auth/login
    {
        "Username",
        "Password"
    }

# Get list of Bank account by UserID
GET /account/<UserID>

# Get list of Transactions by AccountID
GET /transaction/<UserID>

# Get User details by UserID
GET /user/<UserID>

# Create a new Scheduled Transaction
POST /transaction/
    {
		“AccountID” , 
		“ReceivingAccountID” , 
		“Date” , 
		“TransactionAmount” , 
		“Comment” , 
    }

# Delete Scheduled Transaction by TransactionID
DELETE /transaction/<TransactionID>

# Provide, change or remove their address and email
PUT /user/<UserID>
    {
        "Address",
        "Email"
    }

### Initial Set Up

# Environment variables (.env values for backend)

| Environment Variable  | Value |
| ------------- | ------------- |
| SQLALCHEMY_DATABASE_URI  | mysql://username:hostname:port/Bank |
| JWT_SECRET_KEY  | jwt_secret_key  |
| FLASK_RUN_PORT | 5000  |
| FLASK_RUN_HOST  | 0.0.0.0  |

### FRONTEND GUIDE 

	
1) 
	```
	cd frontend
	```
	
	
2) 
	```
	npm install 
	```

3) 
	```
	npm start
	```


### BACKEND GUIDE 


1) 
	```
	cd backend
	```
	
	
2) 
	Install pipenv  https://pypi.org/project/pipenv/ 

3) 
	```
	pipenv install
	```

4) 
	```
	pipenv run start
	```

