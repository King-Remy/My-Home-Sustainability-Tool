from .. import db
from flask_login import UserMixin
from sqlalchemy.sql import func


class HeatLossCalculations(db.Model):
    # __tablename__ = 'summaryresponses'
    id = db.Column(db.Integer, primary_key=True)
    windowHeatLoss = db.Column(db.String(500))
    doorHeatLoss =  db.Column(db.String(50))
    wallHeatLoss = db.Column(db.String(50))
    roofHeatLoss = db.Column(db.String(50))
    floorHeatLoss = db.Column(db.String(50))
    ventelationHeatLoss = db.Column(db.String(50))
    totalHeatLoss = db.Column(db.String(50))
    totalExternalHeatLoss = db.Column(db.String(50))
    date_modified = db.Column(db.DateTime(timezone=True), default=func.now())
    building_id = db.Column(db.Integer, db.ForeignKey('buildinginfo.id'))

class Prediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    energyEfficiency = db.Column(db.String(50))
    date_modified = db.Column(db.DateTime(timezone=True), default=func.now())
    building_id = db.Column(db.Integer, db.ForeignKey('buildinginfo.id'))

class User(db.Model, UserMixin):
    # __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    location = db.Column(db.String(250))
    postcode = db.Column(db.String(25))
    phone = db.Column(db.String(150))
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())
    date_modified = db.Column(db.DateTime(timezone=True))
    last_login = db.Column(db.DateTime(timezone=True))
    buildings = db.relationship('BuildingInfo')


class BuildingInfo(db.Model):
    __tablename__ = 'buildinginfo'
    id = db.Column(db.Integer, primary_key=True)
    projectName = db.Column(db.String(50), unique=True)
    propertyAddress = db.Column(db.String(150))
    postCode = db.Column(db.String(10))
    propertyType = db.Column(db.String(15))
    projectLocation = db.Column(db.String(50))
    propertyAge = db.Column(db.String(50))
    extensionCount = db.Column(db.String(10))
    noofFloors = db.Column(db.String(10))
    indoorTemperature = db.Column(db.String(10))
    energyTarrif = db.Column(db.String(10))
    externalWallType = db.Column(db.String(50))
    lightingType = db.Column(db.String(50))
    noofRooms = db.Column(db.String(10))
    hotwaterHeating = db.Column(db.String(20))
    mainHeatingControls = db.Column(db.String(50))
    transactionType = db.Column(db.String(50))
    openFireplace = db.Column(db.String(50))
    buildingLength = db.Column(db.String(10))
    buildingWidth = db.Column(db.String(10))
    extension1Length = db.Column(db.String(10))
    extension1Width = db.Column(db.String(10))
    extension2Length = db.Column(db.String(10))
    extension2Width = db.Column(db.String(10))
    extension3Length = db.Column(db.String(10))
    extension3Width = db.Column(db.String(10))
    roofHeight = db.Column(db.String(10))
    heightofWall = db.Column(db.String(10))
    extension1Height = db.Column(db.String(10))
    extension2Height = db.Column(db.String(10))
    extension3Height = db.Column(db.String(10))
    # windowSize = db.Column(db.String(10))
    noofWindows = db.Column(db.String(10))
    windowObject = db.Column(db.String(200))
    windowType = db.Column(db.String(200))
    # doorSize = db.Column(db.String(10))
    noofDoors = db.Column(db.String(10))
    doorObject = db.Column(db.String(200))
    doorType = db.Column(db.String(50))
    roofConstruction = db.Column(db.String(50))
    floorType= db.Column(db.String(50))
    date_created = db.Column(db.DateTime(timezone=True), default=func.now())
    date_modified = db.Column(db.DateTime(timezone=True))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    summaryResponses = db.relationship('HeatLossCalculations')
    summaryResponses2 = db.relationship('Prediction')

    # {'projectName': 'w', 'propertyAddress': 'w', 'postCode': 'w', 'propertyType': 'detached', 'projectLocation': '30.0', 'propertyAge': '0.35', 'extensionCount': '2', 
    #  'noofFloors': '33', 'indoorTemperature': '33', 'energyTarrif': 'off-peak', 'lightingType': 'I dont know the energy lighting', 'noofRooms': '3', 
    #  'hotwaterHeating': 'Oil boiler', 'mainHeatingControls': 'Programmer: room thermostat',
    # 'buildingLength': '3', 'buildingWidth': '5', 'extension1Length': '3', 'extension1Width': '3', 'extension2Length': '3', 'extension2Width': '3', 'extension3Length': '', 'extension3Width': '', 
    # 'roofHeight': '3', 'heightofWall': '3', 'windowSize': '1.2', 'noofWindows': '3', 'windowType': '2.10', 'doorSize': '1.8', 'noofDoors': '33', 'doorType': '1.6', 'roofConstruction': '0.20', 'floorType': '0.25'}
