from flask import Blueprint

from controllers.accountController import get_bank_account; 

accountRoute = Blueprint('acc', __name__); 

accountRoute.route('/<int:UserID>', strict_slashes=False,
                methods=['GET'])(get_bank_account)
