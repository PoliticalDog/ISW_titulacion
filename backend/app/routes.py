from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt = JWTManager(app)

    from app.controllers import auth_controller, project_controller, user_controller, file_controller
    
    app.register_blueprint(auth_controller.bp, url_prefix='/auth')
    app.register_blueprint(project_controller.bp, url_prefix='/projects')
    app.register_blueprint(user_controller.bp, url_prefix='/users')
    app.register_blueprint(file_controller.bp, url_prefix='/files')

    return app

# Run the application
if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
