from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager


db = SQLAlchemy()
# mail = Mail()
DB_NAME = "database.db"
basedir = path.abspath(path.dirname(__file__))

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'hjshjhdro-jer-fj43]0i04-='
    app.config['SQLALCHEMY_DATABASE_URI'] =  'sqlite:///' + path.join(basedir, 'database.db')

    db.init_app(app)

    from .views.index import index
    from .views.auth import auth
    from .views.building import building

    app.register_blueprint(index, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    app.register_blueprint(building, url_prefix='/')

    from .model.models import HeatLossCalculations, User, BuildingInfo
    from sqlalchemy.sql import func
    from werkzeug.security import generate_password_hash
    with app.app_context():
        # db.drop_all()
        db.create_all()

        if not User.query.all():
            new_user = User(email="admin@epc.com", first_name="king", last_name="remy", location="staffordshire", postcode="ST5 1TL", phone="12345678", date_modified=func.now(), password=generate_password_hash(
                'password', method='sha256'))
            db.session.add(new_user)
            db.session.commit()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.login_message = ' '
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app
