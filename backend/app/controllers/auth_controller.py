from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import User
from app import db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

def register_routes(bp):
    @bp.route('/auth/register', methods=['POST'])
    def register():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        if User.query.filter_by(email=email).first():
            return jsonify({"msg": "Email already registered"}), 400
        new_user = User(email=email, role='user')
        new_user.set_password(password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"msg": "User registered successfully"}), 201

    @bp.route('/auth/login', methods=['POST'])
    def login():
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        user = User.query.filter_by(email=email).first()
        if not user or not user.check_password(password):
            return jsonify({"msg": "Bad email or password"}), 401
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200

    @bp.route('/auth/logout', methods=['POST'])
    @jwt_required()
    def logout():
        return jsonify({"msg": "User logged out successfully"}), 200
