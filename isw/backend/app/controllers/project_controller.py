from flask import request, jsonify
from app.models import Project
from app import db
from flask_jwt_extended import jwt_required

def register_routes(bp):
    @bp.route('/projects', methods=['GET'])
    def get_projects():
        projects = Project.query.all()
        result = [
            {
                "id": project.id,
                "title": project.title,
                "description": project.description,
                "rating": project.rating,
                "year": project.year,
                "authors": project.authors,
            } for project in projects]
        return jsonify(result), 200

    @bp.route('/projects', methods=['POST'])
    @jwt_required()
    def create_project():
        data = request.get_json()
        new_project = Project(
            title=data['title'],
            description=data['description'],
            rating=data.get('rating'),
            year=data['year'],
            authors=data['authors']
        )
        db.session.add(new_project)
        db.session.commit()
        return jsonify({"msg": "Project created successfully"}), 201

    @bp.route('/projects/<int:id>', methods=['PUT'])
    @jwt_required()
    def update_project(id):
        data = request.get_json()
        project = Project.query.get_or_404(id)
        project.title = data['title']
        project.description = data['description']
        project.rating = data.get('rating')
        project.year = data['year']
        project.authors = data['authors']
        db.session.commit()
        return jsonify({"msg": "Project updated successfully"}), 200

    @bp.route('/projects/<int:id>', methods=['DELETE'])
    @jwt_required()
    def delete_project(id):
        project = Project.query.get_or_404(id)
        db.session.delete(project)
        db.session.commit()
        return jsonify({"msg": "Project deleted successfully"}), 200
