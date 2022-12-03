
from utils.dbConfig import db; 


class BankAccount(db.Model):
    __tablename__ = 'BankAccount'

    AccountID = db.Column(db.Integer, primary_key=True, nullable=False)
    UserID = db.Column(db.Integer, primary_key=True, nullable=False)
    AccountType = db.Column(db.String(255))
    AccountBalance = db.Column(db.Numeric(10, 2))



class ScheduledTransaction(db.Model):
    __tablename__ = 'ScheduledTransactions'

    TransactionID = db.Column(db.Integer, primary_key=True, nullable=False, autoincrement=True)
    AccountID = db.Column(db.Integer, primary_key=True, nullable=False)
    ReceivingAccountID = db.Column(db.Integer)
    Date = db.Column(db.String(255))
    TransactionAmount = db.Column(db.Numeric(10, 2))
    Comment = db.Column(db.String(255))


class User(db.Model):
    __tablename__ = 'User'
    UserID = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String(20))
    Password = db.Column(db.String(20))
    Firstname = db.Column(db.String(255))
    Lastname = db.Column(db.String(255))
    Email = db.Column(db.String(255))
    Address = db.Column(db.String(255))
    OptIntoPhyStatements = db.Column(db.Boolean)

