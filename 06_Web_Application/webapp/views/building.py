from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
from flask_login import login_required, current_user
from ..model.models import BuildingInfo, HeatLossCalculations, Prediction
from .. import db
import json
from sqlalchemy.sql import func
import json
from .calculationHelpers import helper
from .predictionHelper import MLhelper


building = Blueprint('building', __name__)


@building.route('/building', methods=['GET', 'POST'])
@login_required
def createBuilding():
    if request.method == 'POST':
        formData = request.form.to_dict()
        # print(formData)

        windowObject = {}
        doorObject = {}

        for i in range(1, int(formData['noofWindows'])+1):
            winS = 'windowSize' + str(i)
            windowObject.update({winS: formData[winS]})

        for i in range(1, int(formData['noofDoors'])+1):
            doorS = 'doorSize' + str(i)
            doorObject.update({doorS: formData[doorS]})

        helperClass = helper()
        totalHeatLoss = helperClass.calculateTotalHeatLoss(
            formData, windowObject, doorObject)
        # print(totalHeatLoss)

        MLHelperClass = MLhelper()
        EEPrediction = MLHelperClass.predictEnergyEfficiency(formData)

        new_Building = BuildingInfo(projectName=formData['projectName'], propertyAddress=formData['propertyAddress'], postCode=formData['postCode'], propertyType=formData['propertyType'], projectLocation=formData['projectLocation'], propertyAge=formData['propertyAge'],
                                    extensionCount=formData['extensionCount'],  noofFloors=formData['noofFloors'], indoorTemperature=formData['indoorTemperature'], externalWallType=formData['externalWallType'],energyTarrif=formData['energyTariff'],  
                                    lightingType=formData['lightingType'], noofRooms=formData['noofRooms'], hotwaterHeating=formData['hotwaterHeating'], mainHeatingControls=formData['mainHeatingControls'], transactionType=formData['transactionType'], openFireplace=formData['openFireplace'], buildingLength=formData['buildingLength'], buildingWidth=formData['buildingWidth'], extension1Length=formData['extension1Length'], 
                                    extension1Width=formData['extension1Width'], extension2Length=formData['extension2Length'], extension2Width=formData['extension2Width'], extension3Length=formData['extension3Length'], extension3Width=formData['extension3Width'], 
                                    roofHeight=formData['roofHeight'], heightofWall=formData['heightofWall'], extension1Height=formData['extension1Height'], extension2Height=formData['extension2Height'], extension3Height=formData['extension3Height'], noofWindows=formData['noofWindows'], windowType=formData['windowType'], windowObject=str(windowObject), noofDoors=formData['noofDoors'], doorType=formData['doorType'], doorObject=str(doorObject),
                                    roofConstruction=formData['roofConstruction'],  floorType=formData['floorType'], user_id=current_user.id,  date_modified=func.now()) 
        db.session.add(new_Building)
        db.session.commit()
        db.session.commit()

        new_heatLoss = HeatLossCalculations(windowHeatLoss=totalHeatLoss['windowHeatLoss'], doorHeatLoss=totalHeatLoss['doorHeatLoss'], wallHeatLoss=totalHeatLoss['wallHeatLoss'],
                                            roofHeatLoss=totalHeatLoss['roofHeatLoss'], floorHeatLoss=totalHeatLoss[
                                                'floorHeatLoss'], ventelationHeatLoss=totalHeatLoss['ventelationHeatLoss'], totalHeatLoss=totalHeatLoss['totalHeatLoss'],
                                            totalExternalHeatLoss=totalHeatLoss['totalExternalHeatLoss'], date_modified=func.now(), building_id=new_Building.id)

        db.session.add(new_heatLoss)
        db.session.commit()
        db.session.commit()

        prediction = Prediction(energyEfficiency=EEPrediction)

        db.session.add(prediction)
        db.session.commit()
        db.session.commit()

        return render_template("result.html", user=current_user, Building=new_Building)

    return render_template("building_details.html", user=current_user)


@building.route('/editbuilding', methods=['GET', 'POST'])
def editBuilding():
    buildingId = request.args.get('id')
    building = BuildingInfo.query.filter_by(id=buildingId).first()

    windows = json.loads(json.dumps(building.windowObject))
    doors = json.loads(json.dumps(building.doorObject))

    print(windows)
    print(doors)

    if request.method == 'POST':
        formData = request.form.to_dict()

        windowObject = {}
        doorObject = {}

        for i in range(1, int(formData['noofWindows'])+1):
            winS = 'windowSize' + str(i)
            windowObject.update({winS: formData[winS]})

        for i in range(1, int(formData['noofDoors'])+1):
            doorS = 'doorSize' + str(i)
            doorObject.update({doorS: formData[doorS]})

        building.projectName = formData['projectName']
        building.propertyAddress = formData['propertyAddress']
        building.postCode = formData['postCode']
        building.propertyType = formData['propertyType']
        building.projectLocation = formData['projectLocation']
        building.propertyAge = formData['propertyAge']
        building.extensionCount = formData['extensionCount']
        building.noofFloors = formData['noofFloors']
        building.indoorTemperature = formData['indoorTemperature']
        building.energyTarrif = formData['energyTarrif']
        building.lightingType = formData['lightingType']
        building.noofRooms = formData['noofRooms']
        building.hotwaterHeating = formData['hotwaterHeating']
        building.mainHeatingControls = formData['mainHeatingControls']
        building.buildingLength = formData['buildingLength']
        building.buildingWidth = formData['buildingWidth']
        building.extension1Length = formData['extension1Length']
        building.extension1Width = formData['extension1Width']
        building.extension2Length = formData['extension2Length']
        building.extension2Width = formData['extension2Width']
        building.extension3Length = formData['extension3Length']
        building.extension3Width = formData['extension3Width']
        building.roofHeight = formData['roofHeight']
        building.heightofWall = formData['heightofWall']
        building.noofWindows = formData['noofWindows']
        building.windowObject = windowObject
        building.noofDoors = formData['noofDoors']
        building.doorObject = doorObject
        building.roofConstruction = formData['roofConstruction']
        building.floorType = formData['floorType']
        building.date_modified = func.now()
        db.session.commit()
        return render_template("result.html", user=current_user, Building=building)

    return render_template("edit_building.html", user=current_user, Building=building,  Windows=windows, Doors=doors)


@building.route('/building/result', methods=['GET'])
def result():
    buildingId = request.args.get('id')
    building = BuildingInfo.query.filter_by(id=buildingId).first()

    print(building)

    return render_template("result.html", user=current_user, Building=building)

    # new_Building = BuildingInfo(projectName=formData['projectName'], propertyAddress=formData['propertyAddress'], postCode=formData['postCode'], propertyType=formData['propertyType'], projectLocation=formData['projectLocation'], propertyAge=formData['propertyAge'],
    #                            extensionCount=formData['extensionCount'],  noofFloors=formData['noofFloors'], indoorTemperature=formData['indoorTemperature'], energyTarrif=formData['energyTarrif'],  lightingType=formData['lightingType'], noofRooms=formData['noofRooms'], hotwaterHeating=formData['hotwaterHeating'],
    #                            mainHeatingControls=formData['mainHeatingControls'], buildingLength=formData['buildingLength'], buildingWidth=formData['buildingWidth'], extension1Length=formData['extension1Length'], extension1Width=formData['extension1Width'], extension2Length=formData['extension2Length'], extension2Width=formData['extension2Width'],
    #                             extension3Length=formData['extension3Length'], extension3Width=formData['extension3Width'], roofHeight=formData['roofHeight'], heightofWall=formData['heightofWall'], windowSize=formData['windowSize'], noofWindows=formData['noofWindows'], windowType=formData['windowType'], doorSize=formData['doorSize'],
    #                             noofDoors=formData['noofDoors'], doorType=formData['doorType'], roofConstruction=formData['roofConstruction'],  floorType=formData['floorType'], user_id=current_user.id,  date_modified=func.now())


# {'projectName': 'Project 5', 'propertyAddress': 'Stoke on Trent', 'postCode': 'ST5 1LZ', 'propertyType': 'detached', 'projectLocation': 'Northern Ireland', 'propertyAge': 'Built 2003 or later', 'extensionCount': '1', 'noofFloors': '33', 'indoorTemperature': '333', 'externalWallType': 'Cavity wall 2002 - 2020', 'energyTarrif': 'Standard Tariff', 'lightingType': 'No low energy lighting', 'noofRooms': '1', 'hotwaterHeating': 'Oil Boiler', 'mainHeatingControls': 'Programmer: time control',
#     'buildingLength': '4', 'buildingWidth': '4', 'extension1Length': '40', 'extension1Width': '04', 'extension2Length': '0', 'extension2Width': '0', 'extension3Length': '0', 'extension3Width': '0', 'roofHeight': '4', 'heightofWall': '4', 'noofWindows': '2', 'windowType': 'Double glazed from 2020', 'windowSize1': 'Small', 'windowSize2': 'Medium', 'noofDoors': '1', 'doorType': 'External', 'doorSize1': 'Small', 'roofConstruction': 'Insulated horizontally from 2021', 'floorType': 'Insulated Timber 1990 above'}


# {'windowSize1': 'Small', 'windowSize2': 'Medium'}
# {'doorSize1': 'Small', 'doorSize2': 'Medium'}
