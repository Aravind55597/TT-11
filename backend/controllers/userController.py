from flask import Flask, request, jsonify
from utils.dbConfig import db
from models.db_models import User
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import json


@jwt_required()
def updateUserDetails(userId):
    try:
        # check if the userId corresponds to authenticated user
        currUserId = get_jwt_identity()

        if (userId != currUserId):
            return jsonify(
                {
                    "code": 401,
                    "message": "Unauthorized"
                }
        ), 500

        newAddress = request.json.get("Address"); 
        newEmail = request.json.get("Email");

        #retrieve user 

        existingUser = User.query.filter(User.UserID==userId).first(); 
        
        if(newAddress): 
            existingUser.Address = newAddress; 
        if(newEmail): 
            existingUser.Email=newEmail; 

        db.session.commit()

        return jsonify(
            {
                "code": 200,
                "message": "Update Success"
            }
        ), 200

    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "Server Error"
            }
        ), 500

