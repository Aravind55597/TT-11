# DBS TechTrek 1
This repository is meant for DBS TechTrek 1. Please follow the instructions of the organizers.

# REST API Documentation

### Authentication
POST /auth/login
    {
        "Username",
        "Password"
    }

### Get list of Bank account by UserID
GET /accounts/<UserID>

### Get list of Transactions by AccountID
GET /transactions/<UserID>

### Get User details by UserID
GET /user/<UserID>

### Create a new Scheduled Transaction
POST /transaction/
    {
		“AccountID” , 
		“ReceivingAccountID” , 
		“Date” , 
		“TransactionAmount” , 
		“Comment” , 
    }

### Delete Scheduled Transaction by TransactionID
DELETE /transaction/<TransactionID>

### Provide, change or remove their address and email
PUT /user/<UserID>
    {
        "Address",
        "Email"
    }




