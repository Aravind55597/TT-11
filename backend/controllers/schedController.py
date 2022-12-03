from flask import jsonify, request
from models.db_models import ScheduledTransaction
from models.db_models import BankAccount
from utils.dbConfig import db
from flask_jwt_extended import create_access_token
from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

@jwt_required()
def get_scheduled_transactions_accountid(AccountID):
    current_bank_acc = BankAccount.query.filter_by(AccountID=AccountID).first()
    current_user_id = current_bank_acc.UserID

    # check if the userId corresponds to authenticated user
    currUserId = get_jwt_identity()
    
    if current_user_id != currUserId:
        return jsonify(
                {
                    "code": 401,
                    "message": "Unauthorized"
                }
        ), 401
    else:
        scheduled_list = ScheduledTransaction.query.filter_by(AccountID=AccountID)
        if scheduled_list:
            return jsonify(
                {
                    "code": 200,
                    "data": [sched_transaction.json() for sched_transaction in scheduled_list]
                }
            ), 200
        return jsonify(
            {
                "code": 404,
                "message": "No transactions available"
            }
        )

@jwt_required()
def create_scheduled_transactions():
    data = request.get_json()
    current_acc_id = data.get("AccountID")
    current_bank_acc = BankAccount.query.filter_by(AccountID=current_acc_id).first()
    current_user_id = current_bank_acc.UserID
    # check if the userId corresponds to authenticated user
    currUserId = get_jwt_identity()

    if current_user_id != currUserId:
        return jsonify(
                {
                    "code": 401,
                    "message": "Unauthorized"
                }
        ), 401
    else:
        transaction = ScheduledTransaction(**data)
        try:
            db.session.add(transaction)
            db.session.commit()
        except Exception as e:
            return jsonify(
                {
                    "code": 500,
                    "message": e
                }
            )
        return jsonify(
            {
                "code": 201,
                "data": transaction.json()
            }
        )