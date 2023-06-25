from flask import Blueprint, render_template, request, flash, redirect, url_for
from ..model.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from .. import db
from flask_login import login_user, login_required, logout_user, current_user
# from .mailsender import *
from sqlalchemy.sql import func


auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    details={'email':'', 'passwrd':''}
    email = request.form.get('email')
    password = request.form.get('password')
    if request.method == 'POST':
        remember = request.form.get('remember')
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                login_user(user, remember=remember)
                current_user.last_login = func.now()
                db.session.commit()
                return redirect(url_for('index.home'))
            else:
                flash('Invalid email or password', category='error')
        else:
            flash('Invalid user, check again', category='error')
    if email != None:
        details['email'] = email
    if password != None:
        details['passwrd'] =password
    return render_template("login.html", user=current_user, details=details)


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))


@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    regInfo ={'email':'','first_name':'', 'last_name':'', 'company':'' , 'location':'', 'phone':'', 'postcode':''}
    email = request.form.get('email')
    first_name = request.form.get('firstName')
    last_name = request.form.get('lastName')
    password1 = request.form.get('password1')
    password2 = request.form.get('password2')
    postcode = request.form.get('postcode')
    location = request.form.get('location')
    phone = request.form.get('phone')

    if request.method == 'POST':
    
        user = User.query.filter_by(email=email).first()
        if user:
            flash('Email already exists.', category='error')
        elif len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(first_name) < 2:
            flash('First name must be greater than 1 character.', category='error')
        elif len(last_name) < 2:
            flash('Last name must be greater than 1 character.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            new_user = User(email=email, first_name=first_name, last_name=last_name, location=location, postcode=postcode, phone=phone, date_modified=func.now(), password=generate_password_hash(
                password1, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            current_user.last_login = func.now()
            db.session.commit()
            return redirect(url_for('index.home'))
    if email != None:
        regInfo['email'] = email
    if first_name != None:
        regInfo['first_name'] = first_name
    if last_name != None:
        regInfo['last_name'] = last_name
    if location != None:
        regInfo['location'] = location
    if phone != None:
        regInfo['phone'] = phone
    if postcode != None:
        regInfo['postcode'] = postcode

    return render_template("sign_up.html", user=current_user, regDetails=regInfo)
