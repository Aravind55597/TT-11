from flask import jsonify, request
from models.db_models import ScheduledTransaction
from utils.dbConfig import db

def get_scheduled_transactions_accountid(AccountID):
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

def create_scheduled_transactions():
    data = request.get_json()
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