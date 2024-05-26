from flask import Blueprint, jsonify, send_file, request
from app.models import File
from app import db
from flask_jwt_extended import jwt_required
import io

bp = Blueprint('files', __name__)

@bp.route('/files/<int:id>', methods=['GET'])
def get_file(id):
    file = File.query.get_or_404(id)
    return send_file(
        io.BytesIO(file.data),
        attachment_filename=file.filename,
        as_attachment=True
    )

@bp.route('/files', methods=['GET'])
@jwt_required()
def get_files():
    files = File.query.all()
    result = [{"id": file.id, "filename": file.filename, "user_id": file.user_id} for file in files]
    return jsonify(result), 200

@bp.route('/files', methods=['POST'])
@jwt_required()
def upload_file():
    if 'file' not in request.files:
        return jsonify({"msg": "No file part in the request"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"msg": "No file selected for uploading"}), 400
    
    new_file = File(filename=file.filename, data=file.read(), user_id=1)  # Replace user_id with the current user's ID
    db.session.add(new_file)
    db.session.commit()
    
    return jsonify({"msg": "File successfully uploaded"}), 201
