from views.calculationHelpers import helper
from views.predictionHelper import MLhelper


formData = {'projectName': 'Project 5', 'propertyAddress': 'Stoke on Trent', 'postCode': 'ST5 1LZ', 'propertyType': 'Detached', 'projectLocation': 'Northern Ireland', 'propertyAge': 'Built 2003 or later', 'extensionCount': '1', 'noofFloors': '33', 'indoorTemperature': '23', 'externalWallType': 'Cavity wall 2002 - 2020', 'energyTarrif': 'Standard Tariff', 'lightingType': 'No low energy lighting', 'noofRooms': '1', 'hotwaterHeating': 'Oil Boiler', 'mainHeatingControls': 'Programmer: time control',
    'buildingLength': '4', 'buildingWidth': '4', 'extension1Length': '40', 'extension1Width': '04', 'extension2Length': '0', 'extension2Width': '0', 'extension3Length': '0', 'extension3Width': '0', 'roofHeight': '4', 'heightofWall': '4', 'noofWindows': '2', 'windowType': 'Double glazed from 2020', 'windowSize1': 'Small', 'windowSize2': 'Medium', 'noofDoors': '1', 'doorType': 'External', 'doorSize1': 'Small', 'roofConstruction': 'Insulated horizontally from 2021', 'floorType': 'Insulated Timber 1990 above'}


# windowObject = {'windowSize1': 'Small', 'windowSize2': 'Medium'}
# doorObject = {'doorSize1': 'Small', 'doorSize2': 'Medium'}

helperClass = helper()

# print(helperClass.calculateTotalHeatLoss(formData, windowObject, doorObject))

formData2 = {'TOTAL_FLOOR_AREA': 127.0, 'propertyType': 'Detached', 'energyTarrif': 'Standard Tariff', 'floorType': 'Insulated Timber 1990 above', 'hotwaterHeating': 'Oil Boiler', 'lightingType': 'No low energy lighting', 'mainHeatingControls': 'Programmer: time control', 'noofRooms': '1', 'roofConstruction': 'Insulated horizontally from 2021', 'transactionType': 'Private rental', 'externalWallType': 'Cavity wall 2002 - 2020', 'windowType': 'Double glazed from 2020', 'extensionCount': '1', 'heightofWall': '4', 'noofFloors': '3', 'noofRooms': '2', 'openFireplace': 2, 'buildingLength': '4', 'buildingWidth': '4', 'extension1Length': '40', 'extension1Width': '04', 'extension2Length': '0', 'extension2Width': '0', 'extension3Length': '0', 'extension3Width': '0', 'roofHeight': '4', 'heightofWall': '4', 'noofFloors': '33'}

helperClass = MLhelper()

print(helperClass.predictEnergyEfficiency(formData2))



