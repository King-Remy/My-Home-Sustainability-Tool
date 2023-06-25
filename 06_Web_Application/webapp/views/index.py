from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
from flask_login import login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from ..model.models import BuildingInfo
from .. import db
import json
from sqlalchemy.sql import func

index = Blueprint('index', __name__)

@index.route('/', methods=['GET', 'POST'])
@login_required
def home():

    data = BuildingInfo.query.filter_by(user_id=current_user.id)

    return render_template("home.html", user=current_user, buildings=data)

@index.route('/profile', methods=['GET', 'POST'])
@login_required
def profile():
    if request.method == 'POST':
        if request.form.get('btn') == 'profile':
            first_name = request.form.get('firstName')
            last_name = request.form.get('lastName')
            location = request.form.get('location')
            phone = request.form.get('phone')
            postcode = request.form.get('postcode')

            if len(first_name) < 1:
                flash('First name is too short!', category='error')
            elif len(last_name) < 1:
                flash('Last name is too short!', category='error')
            elif len(location) < 1:
                flash('Location is too short!', category='error')
            else:
                current_user.first_name = first_name
                current_user.last_name = last_name
                current_user.location = location
                current_user.phone = phone
                current_user.postcode = postcode
                current_user.date_modified= func.now()
                db.session.commit()
                flash('Profile updated successfully!', category='success')
        elif request.form.get('btn') == 'password':
            currentPword = request.form.get('currentPassword')
            newPword = request.form.get('newPassword')
            confirmPword = request.form.get('confirmPassword')

            if not check_password_hash(current_user.password, currentPword):
                flash('Incorrect current password, try again.', category='error')
            elif not newPword == confirmPword:
                flash('New passwords dont match, try again.', category='error')
            elif len(newPword) < 7:
                flash('Password must be at least 7 characters.', category='error')
            else:
                current_user.password = generate_password_hash(
                    newPword, method='sha256')
                current_user.date_modified= func.now()
                db.session.commit()
                flash('Password updated successfully', category='success')
            # # doing something
            # print('password')
    return render_template("profile.html", user=current_user)