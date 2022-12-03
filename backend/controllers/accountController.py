from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from utils.dbConfig import db
from models.db_models import BankAccount

def get_bank_account(UserID):
    try:
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