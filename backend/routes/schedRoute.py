from flask import Blueprint
from controllers.schedController import get_scheduled_transactions_accountid

schedRoute = Blueprint('sched', __name__)

schedRoute.route('/<int:AccountID>', strict_slashes=False, methods=['GET'])(get_scheduled_transactions_accountid)