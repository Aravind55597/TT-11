from flask import Blueprint

from controllers.userController import updateUserDetails

userRoute = Blueprint('user', __name__)


userRoute.route('/<int:userId>', strict_slashes=False,
                methods=['PUT'])(updateUserDetails)
