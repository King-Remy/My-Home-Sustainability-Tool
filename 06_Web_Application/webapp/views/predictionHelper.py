import json
import pandas as pd
import xgboost as xgb

model = xgb.XGBRegressor()
model.load_model("C:/Users/KingRemy/OneDrive - University of Keele/Documents/SEND/My-Home-Sustaainabilty-Tool-Web-App/webapp/model/MLModels/EnergyEfficiencyTool2.json")

trained_data = pd.read_csv('C:/Users/KingRemy/OneDrive - University of Keele/Documents/SEND/DATASETS/EPCs/training_data.csv')

class MLhelper:

    def calculateFloorHeight(self, formData):
        floor_height = float(formData['heightofWall']) / float(formData['noofFloors'])
        if 0 <= floor_height <= 2.3:
            floor_height = '0-2.3'
        elif 2.3 <= floor_height <= 2.4:
            floor_height = '2.3-2.4'
        elif 2.4 <= floor_height <= 2.5:
            floor_height = '2.4-2.5'
        elif floor_height == 2.5:
            floor_height = '2.5'
        elif 2.5 <= floor_height <= 2.7:
            floor_height = '2.5-2.7'
        else:
            floor_height = '2.7+'
        return floor_height

    def calculateTotalFloorArea(self, formData):

        buildingLength = float(formData['buildingLength'])

        buildingWidth = float(formData['buildingWidth'])

        extension1Length = float(formData['extension1Length'])

        extension1Width = float(formData['extension1Width'])

        extension2Length = float(formData['extension2Length'])

        extension2Width = float(formData['extension2Width'])

        extension3Length = float(formData['extension3Length'])

        extension3Width = float(formData['extension3Width'])

        noofFLoors = float(formData['noofFloors'])

        totalFloorArea = buildingLength * buildingWidth * noofFLoors + \
            (extension1Length * extension1Width) + (extension2Length *
                                                    extension2Width) + (extension3Length * extension3Width)
        
        return totalFloorArea

    def predictEnergyEfficiency(self, formData):

        propertyType = formData['propertyType']

        openFirePlace = int(formData['openFireplace'])

        noofRooms = int(formData['noofRooms'])

        extensionCount = int(formData['extensionCount'])

        if propertyType == 'Detached':
            propertyType = 'Few storey building'
        elif propertyType == 'Semi-Detached':
            propertyType = 'Few storey building'
        elif propertyType == 'Mid-Terrace':
            propertyType = 'Multiple storey building'
        elif propertyType == 'End-Terrace':
            propertyType = 'Multiple storey building'
        else:
            propertyType = 'One storey building'

        if noofRooms == 1:
            noofRooms = '1'
        elif noofRooms == 2:
            noofRooms = '2'
        elif noofRooms == 3:
            noofRooms = '3'
        elif noofRooms == 4:
            noofRooms = '4'
        elif noofRooms == 5:
            noofRooms = '5'
        elif noofRooms >= 6:
            noofRooms = '6+'

        if extensionCount == 0:
            extensionCount = '0'
        elif extensionCount == 1:
            extensionCount = '1'
        elif extensionCount >= 2:
            extensionCount = '2+'

        # openFirePlace = int(openFirePlace)

        if openFirePlace == 0:
            openFirePlace = '0'
        elif openFirePlace == 1: 
            openFirePlace = '1'
        elif openFirePlace >= 2:
            openFirePlace = '2+'

        TOTAL_FLOOR_AREA = self.calculateTotalFloorArea(formData)
        built_form = formData['propertyType']
        energy_tariff = formData['energyTariff']
        floor_description = formData['floorType']
        glazed_type = formData['windowType']
        hotwater_description = formData['hotwaterHeating']
        lighting_description = formData['lightingType']
        mainheat_controls = formData['mainHeatingControls']
        propertyType = propertyType
        roof_description = formData['roofConstruction']
        transaction_type = formData['transactionType']
        walls_description = formData['externalWallType']
        window_description = formData['windowType']
        extension = extensionCount
        floor_height = str(self.calculateFloorHeight(formData))
        habitable_rooms = noofRooms
        open_fireplaces = openFirePlace

        columns =[{'TOTAL_FLOOR_AREA':TOTAL_FLOOR_AREA, 'built_form': built_form, 'energy_tariff':energy_tariff,
                    'floor_description': floor_description, 'glazed_type': glazed_type, 'hotwater_description': hotwater_description,
                    'lighting_description': lighting_description, 'mainheat_controls': mainheat_controls, 'property_type': propertyType,
                    'roof_description': roof_description, 'transaction_type': transaction_type, 'walls_description':walls_description, 
                    'window_description': window_description, 'extension': extension, 
                    'floor_height': floor_height, 'habitable_rooms': habitable_rooms, 'open_fireplaces': open_fireplaces}]

        
        
        energyEfficiency = pd.DataFrame(columns, index = list(range(len(columns))))
        raw_column_energyEfficiency = energyEfficiency.columns.values.tolist()

        col_list = trained_data.columns.values.tolist()
        template = pd.DataFrame([96 * [None]], columns=col_list)

        # for key, value in energyEfficiency.items():
        #     print(value)
        #     print(key)
        #     print(type(energyEfficiency[key]))

        for col in raw_column_energyEfficiency:
            if 'TOTAL_FLOOR_AREA' == col:
                if energyEfficiency['TOTAL_FLOOR_AREA'].item() > 0:
                    template.loc[0, col] = 1
                else:
                    template.loc[0, col] = 0
            elif col in raw_column_energyEfficiency:
                template.loc[0, col + "_" + energyEfficiency.loc[0, col]] = 1
            else:
                template.loc[0, col] = energyEfficiency.loc[0, col]


        # replace  Nan with 0
        energyEfficiency = template.fillna(0)

        counted = energyEfficiency.columns.values.tolist()
        print(counted)



        energyEfficiencyPrediction = model.predict(energyEfficiency)
        energyEfficiencyPrediction = round(energyEfficiencyPrediction[0])

        return energyEfficiencyPrediction