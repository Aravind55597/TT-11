from flask_cors import CORS;
from flask import Flask; 
from utils.dbConfig import db; 
from flask_jwt_extended import JWTManager; 
import os; 

#--------AUTH----------------------------
from routes.authRoute import authRoute; 

from routes.schedRoute import schedRoute;

from routes.accountRoute import accountRoute; 

from routes.deleteTransactionRoute import deleteTransactionRoute; 

# <REMOVE THE WHEN USING THIS AS A TEMPLATE>---------------------------------------------------------
from routes.userRoute import userRoute; 
# from routes.walletRoute import walletRoute; 
# from routes.transactionRoute import transactionRoute; 
#-------------------------------------------------------------------

application = app =  Flask(__name__)
# Load app configurations--------------------------------------------------------------------------------------------------------------------------------------

application.config.from_object('config')
# Allow CORS requests to this API-----------------------------------------------------------------------------------------------------------------------------
# allow method , origins , methods are * 
CORS(application,supports_credentials=True)

#register app into JWT manager 
jwt = JWTManager(application)

# Register SQL Alchemy------------------------------------------------------------------------------------------------------------------------------------
db.init_app(application)


# Elastic beanstalk health check
@application.route('/', methods=["GET"])
def healthCheck(): 
    return "Healthy",200; 
# Register your blueprints------------------------------------------------------------------------------------------------------------------------------------


# <AUTH ROUTE>-------------------------------------------------------------------------------------------------------------------
application.register_blueprint(authRoute, url_prefix='/auth')
application.register_blueprint(accountRoute, url_prefix='/accounts')

application.register_blueprint(schedRoute, url_prefix='/transactions')

application.register_blueprint(deleteTransactionRoute, url_prefix='/transaction')

# <REMOVE THE WHEN USING THIS AS A TEMPLATE>----------------------------------------------------------------------
application.register_blueprint(userRoute, url_prefix='/user')
# application.register_blueprint(walletRoute, url_prefix='/wallet')
# application.register_blueprint(transactionRoute, url_prefix='/transaction')
#---------------------------------------------------------------------------------------------------------------------

if __name__ == '__main__':
    application.run()
