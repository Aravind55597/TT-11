from flask import Blueprint

from controllers.deleteTransactionController import del_transaction; 

deleteTransactionRoute = Blueprint('del_transaction', __name__); 

deleteTransactionRoute.route('/<int:TransactionID>', strict_slashes=False,
                methods=['DELETE'])(del_transaction)
