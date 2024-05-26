from flask import request, jsonify
from app.models import User, File
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity

def register_routes(bp):
    @bp.route('/users', methods=['GET'])
    @jwt_required()
    def get_users():
        users = User.query.all()
        result = [{"id": user.id, "email": user.email, "role": user.role} for user in users]
        return jsonify(result), 200

    @bp.route('/users/<int:id>', methods=['GET'])
    @jwt_required()
    def get_user(id):
        user = User.query.get_or_404(id)
        return jsonify({"id": user.id, "email": user.email, "role": user.role}), 200

    @bp.route('/users/upload', methods=['POST'])
    @jwt_required()
    def upload_file():
        user_id = get_jwt_identity()
        file = request.files['file']
        new_file = File(filename=file.filename, data=file.read(), user_id=user_id)
        db.session.add(new_file)
        db.session.commit()
        return jsonify({"msg": "File uploaded successfully"}), 201
