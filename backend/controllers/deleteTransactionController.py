from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from utils.dbConfig import db
from models.db_models import ScheduledTransaction

def del_transaction(TransactionID):
    try:
        ScheduledTransaction.query.filter_by(TransactionID=TransactionID).delete()
        db.session.commit()
        return jsonify(
            {
                "code" : 200,
                "data" : "Transaction deleted successfully"
            }
        ), 200
    except Exception as e:
        return jsonify(
            {
                "code" : 500,
                "data" : "Delete transaction not successful"
            }
        ), 500