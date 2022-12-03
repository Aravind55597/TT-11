from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from utils.dbConfig import db
from models.db_models import BankAccount
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
import json

@jwt_required()
def get_bank_account(UserID):
    try:
        currUserId = get_jwt_identity()
        if (UserID != currUserId):
            return jsonify(
            {
                "code": 401,
                "message": "Unauthorized"
            }
        ), 500
        bankAccountList = BankAccount.query.filter_by(UserID=UserID)
        if (bankAccountList):
            print("hello")
            return jsonify(
                {
                    "code" : 200,
                    "data" : [bankAccount.json() for bankAccount in bankAccountList]
                }
            ), 200
    except Exception as e:
        return jsonify(
            {
                "code" : 500,
                "data" : e
            }
        ), 500