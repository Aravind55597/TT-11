from flask import jsonify
from models.db_models import ScheduledTransaction

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