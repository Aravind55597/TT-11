from flask import Blueprint
from controllers.schedController import get_scheduled_transactions_accountid
from controllers.schedController import create_scheduled_transactions

schedRoute = Blueprint('sched', __name__)

schedRoute.route('/<int:AccountID>', strict_slashes=False, methods=['GET'])(get_scheduled_transactions_accountid)

schedRoute.route('/', strict_slashes=False, methods=['POST'])(create_scheduled_transactions)