import json


class helper:

    # property_type = {'detached': 4, 'semiDetached': 3, 'midTerrace': 2, 'endTerrace': 3, 'other': 4}

    property_type = {'Detached': 4, 'Semi-Detached': 3, 'Mid-Terrace': 2, 'End-Terrace': 3, 'Other': 4}
    
    property_location = {'North England and the English Midlands': 30.0, 'Northern Ireland': 26.9,
                         'Scotland': 29.4, 'South East England and Wales': 27.5, 'South West England': 25.0}

    external_wall_type = {'Cavity wall from 2021 to present': 0.26, 'Cavity wall 2002 - 2020': 0.35,
                          'Cavity wall 1980 - 2001': 0.60, 'Cavity wall 1960 - 1980': 1.70, 'No insulation': 1.60, 'I dont know the wall constrcution': 1.60}

    property_age = {'Built 2003 or later': 0.35,
                    'Built 1980 - 2002': 0.45, 'Built 1960 - 1980': 0.55} 

    window_size = {'Small': 1.2, 'Medium': 2.2, 'Large': 3.2}

    window_description = {'Double glazed from 2020': 1.60, 'Double glazed': 2.10,
                          'Single glazed': 4.80, 'I dont know the window type': 1.6}

    door_size = {'Small': 1.8, 'Medium': 2.8, 'Large': 3.8}

    door_type = {'External': 1.60, 'Internal': 1.80}

    floor_description = {'Insulated concrete 1990 above': 0.25,
     'Insulated Timber 1990 above': 0.25, 'Timber un-insulated floor pre 1990': 2, 'Concrete uninsulated floor pre 1990': 2,
                         'I dont know the floor type': 2}
    # floor_description = {'Insulated concrete 1990 above': 4, 'Insulated Timber 1990 above': 4, 'Timber un-insulated floor pre 1990': 0, 'Concrete uninsulated floor pre 1990': 0,
    #                      'I dont know the floor type': 0}

    roof_description = {'Insulated horizontally from 2021': 0.16, 'Insulated horizontally from 2002 to 2021': 0.20, 'Insulated horizontally from 1990 to 2002': 0.25,
                        'Insulated on the slope from 2021': 0.16, 'Insulated on the slope from 2002 To 2021': 0.20, 'Insulated on the slope from 1990 To 2001': 0.25,
                        'No insulation': 1.90, 'I dont know the roof type': 0.25}

    # def calculateExposedself.exposedPerimeter(self, length, width, ext1L, ext1W, ext2L, ext2W, ext3L, ext3W):

    #     self.exposedPerimeter = (2*length) + (2*width) + (2*ext1L) + ext1W + (2*ext2L) + ext2W + (2*ext3L) + ext3W

    #     return self.exposedPerimeter

    def calculateTotalExposedPerimeter(self, formData):

        buildingLength = float(formData['buildingLength'])

        buildingWidth = float(formData['buildingWidth'])

        extension1Length = float(formData['extension1Length'])

        extension1Width = float(formData['extension1Width'])

        extension2Length = float(formData['extension2Length'])

        extension2Width = float(formData['extension2Width'])

        extension3Length = float(formData['extension3Length'])

        extension3Width = float(formData['extension3Width'])

        propertyType  = formData['propertyType'].upper()

        extensionCount=formData['extensionCount']

        detchedPerimeter = (2 * buildingLength) + (2 * buildingWidth)
        
        detachedPerimeterExt1 = buildingLength + (2 * buildingWidth) + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length)

        detachedPerimeterExt2 = buildingLength + buildingWidth + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length) + (2 * extension2Width) + extension2Length + (buildingWidth - extension2Width)
        
        detachedPerimeterExt3 = buildingLength + buildingWidth + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length) + (2 * extension2Width) + extension2Length + (buildingWidth - extension2Width) + (2 * extension3Width) + extension3Length + (buildingWidth - extension3Width)
        
        semiDetachedPerimeter = (2 * buildingLength) + buildingWidth

        semiDetachedPerimeterExt1 = buildingLength + buildingWidth + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length)

        semiDetachedPerimeterExt2 = buildingLength + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length) + (2 * extension2Width) + extension2Length + (buildingWidth - extension2Width)
        
        midTerracePerimeter = (2 * buildingLength)
        
        midTerracePerimeterExt1 = (2 * buildingLength) + (2 * extension1Width) + extension1Length + (buildingLength - extension1Length)

        endTerracePerimeter = semiDetachedPerimeter

        endTerracePerimeterExt1 = semiDetachedPerimeterExt1

        endTerracePerimeterExt2 = semiDetachedPerimeterExt2

        otherPerimeter = detchedPerimeter

        otherPerimeterExt1 = detachedPerimeterExt1

        otherPerimeterExt2 = detachedPerimeterExt2

        otherPerimeterExt3 = detachedPerimeterExt3

        totalExposedPerimeter = float()

        if propertyType == 'DETACHED' and  extensionCount == 0:
            totalExposedPerimeter = detchedPerimeter
        if propertyType == 'DETACHED' and  extensionCount == 1:
            totalExposedPerimeter = detachedPerimeterExt1
        if propertyType == 'DETACHED' and  extensionCount == 2:
            totalExposedPerimeter = detachedPerimeterExt2
        if propertyType == 'DETACHED' and  extensionCount == 3:
            totalExposedPerimeter = detachedPerimeterExt3

        if propertyType == 'SEMIDETACHED' and  extensionCount == 0:
            totalExposedPerimeter = semiDetachedPerimeter
        if propertyType == 'SEMIDETACHED' and  extensionCount == 1:
            totalExposedPerimeter = semiDetachedPerimeterExt1
        if propertyType == 'SEMIDETACHED' and  extensionCount == 2:
            totalExposedPerimeter = semiDetachedPerimeterExt2

        if propertyType == 'MIDTERRACE' and  extensionCount == 0:
            totalExposedPerimeter = midTerracePerimeter
        if propertyType == 'MIDTERRACE' and  extensionCount == 1:
            totalExposedPerimeter = midTerracePerimeterExt1

        if propertyType == 'ENDTERRACE' and  extensionCount == 0:
            totalExposedPerimeter = endTerracePerimeter
        if propertyType == 'ENDTERRACE' and  extensionCount == 1:
            totalExposedPerimeter = endTerracePerimeterExt1
        if propertyType == 'ENDTERRACE' and  extensionCount == 2:
            totalExposedPerimeter = endTerracePerimeterExt2
        
        if propertyType == 'OTHER' and  extensionCount == 0:
            totalExposedPerimeter = otherPerimeter
        if propertyType == 'OTHER' and  extensionCount == 1:
            totalExposedPerimeter = otherPerimeterExt1
        if propertyType == 'OTHER' and  extensionCount == 2:
            totalExposedPerimeter = otherPerimeterExt2
        if propertyType == 'OTHER' and  extensionCount == 3:
            totalExposedPerimeter = otherPerimeterExt3
    
        return totalExposedPerimeter

    def calculateTotalAreaLowerGround(self, formData):

        buildingLength = float(formData['buildingLength'])

        buildingWidth = float(formData['buildingWidth'])

        extension1Length = float(formData['extension1Length'])

        extension1Width = float(formData['extension1Width'])

        extension2Length = float(formData['extension2Length'])

        extension2Width = float(formData['extension2Width'])

        extension3Length = float(formData['extension3Length'])

        extension3Width = float(formData['extension3Width'])

        totalAreaLowerGround = (buildingLength * buildingWidth) + (extension1Length * extension1Width) \
            + (extension2Length * extension2Width) + (extension3Length * extension3Width)

        return totalAreaLowerGround

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
        
    
    def calculateTotalExternalWallArea(self, formData, windowObject, doorObject):
        
        propertyType = formData['propertyType']
        
        buildingWidth = float(formData['buildingWidth'])

        windowObject = json.dumps(windowObject, indent=4)
        windowObject = json.loads(windowObject)

        windowSize = [value for keys,
                      value in windowObject.items() if 'windowSize' in keys]

        self.windowSizeAreas = sum([helper.window_size.get(keys) for keys in windowSize])

        doorObject = json.dumps(doorObject, indent=4)
        doorObject = json.loads(doorObject)

        doorSize = [value for keys, value in doorObject.items()
                    if 'doorSize' in keys]

        self.doorSizeAreas = sum([helper.door_size.get(keys) for keys in doorSize])

        # noofFloors = formData['noofFloors']

        # roofHeight = formData['roofHeight']

        heightofWall = float(formData['heightofWall'])

        noofExternalWalls = float(helper.property_type[f'{propertyType}'])

        extension1Width = float(formData['extension1Width'])

        extension2Width = float(formData['extension2Width'])

        extension3Width = float(formData['extension3Width'])

        extension1Height = float(formData['extension1Height'])

        extension2Height = float(formData['extension2Height'])
        
        extension3Height = float(formData['extension3Height'])
        # self.exposedPerimeter = self.calculateTotalExposedPerimeter(formData)

        # buildingHeight = roofHeight + heightofWall

        masonaryAreas = ((buildingWidth * heightofWall) + (extension1Width * extension1Height) + (extension2Width * extension2Height) + (extension3Width * extension3Height)) * noofExternalWalls

        totalExternalWallArea = masonaryAreas - self.windowSizeAreas - self.doorSizeAreas 

        return totalExternalWallArea

    def calculateWindowHeatLoss(self, formData, windowObject):

        # windowSize=formData['windowSize']

        # windowType=formData['windowType']

        # noofWindows=formData['noofWindows']

        windowObject = json.dumps(windowObject, indent=4)
        windowObject = json.loads(windowObject)

        windowSize = [value for keys,
                      value in windowObject.items() if 'windowSize' in keys]

        self.windowSizeAreas = sum([helper.window_size.get(keys) for keys in windowSize])

        # windowSizeAreas = self.windowSizeAreas

        windowType = formData['windowType']

        windowUValue = helper.window_description[f'{windowType}']

        windowHeatLoss = (self.windowSizeAreas) * windowUValue

        return windowHeatLoss

    def calculateWallHeatLoss(self, formData, windowObject, doorObject):

        # helper.property_location['North England and the English Midlands']

        totalExternalWallArea = self.calculateTotalExternalWallArea(formData, windowObject, doorObject)

        externalWallType = formData['externalWallType']

        externalWallUValue = helper.external_wall_type[f'{externalWallType}']

        wallHeatLoss = totalExternalWallArea * externalWallUValue

        return wallHeatLoss

    def calculateDoorHeatLoss(self, formData, doorObject):

        doorObject = json.dumps(doorObject, indent=4)
        doorObject = json.loads(doorObject)

        doorSize = [value for keys, value in doorObject.items()
                    if 'doorSize' in keys]

        self.doorSizeAreas = sum([helper.door_size.get(keys) for keys in doorSize])
        
        # doorSizeAreas = self.doorSizeAreas
        
        doorTypes = formData['doorType']

        doorUValue = helper.door_type[f'{doorTypes}']

        doorHeatLoss = (self.doorSizeAreas) * doorUValue

        return doorHeatLoss

    def calculateRoofHeatLoss(self, formData):

        totalAreaLowerGround = self.calculateTotalAreaLowerGround(formData)

        roofType = formData['roofConstruction']

        roofUValue = helper.roof_description[f'{roofType}']

        roofHeatLoss = float(totalAreaLowerGround) * float(roofUValue)

        return roofHeatLoss

    def calculateFloorHeatLoss(self, formData):

        totalAreaLowerGround = self.calculateTotalAreaLowerGround(formData)

        B = float(self.calculateTotalExposedPerimeter(formData))

        propertyAge = formData['propertyAge']

        floorTypeInput = formData['floorType']

        floorType = helper.floor_description[floorTypeInput]

        wallThickness = float(helper.property_age[f'{propertyAge}'])

        # floorResitance = [value == 0 if 'I dont know the floor type' in floorType in keys else value ==
        #   4 for keys, value in helper.floor_description.items()]

        if floorTypeInput == 'I dont know':
            floorType == 0
        else:
            floorType == 4

        floorResitance = floorType

        d = wallThickness + 2*(0.17 + floorResitance + 0.04)

        floorUValue = 2/((0.457 * B) + d)

        floorHeatLoss = totalAreaLowerGround * floorUValue

        return floorHeatLoss

    def calculateVentelationHeatLoss(self, formData):

        roofHeight = float(formData['roofHeight'])

        heightofWall = float(formData['heightofWall'])

        totalFloorArea = self.calculateTotalFloorArea(formData)

        totalFlowRate = totalFloorArea * (roofHeight + heightofWall) + 0.76

        ventelationHeatLoss = totalFlowRate * 0.33

        return ventelationHeatLoss

    def calculateTotalHeatLoss(self, formData, windowObject, doorObject):
        # print(formData)
        propertyLoaction = formData['projectLocation']

        locationFactor = helper.property_location[f'{propertyLoaction}']

        indoorTemperature = float(formData['indoorTemperature'])

        windowHeatLoss = self.calculateWindowHeatLoss(formData, windowObject)
        doorHeatLoss = self.calculateDoorHeatLoss(formData, doorObject)
        wallHeatLoss = self.calculateWallHeatLoss(formData, windowObject, doorObject)
        roofHeatLoss = self.calculateRoofHeatLoss(formData)
        floorHeatLoss = self.calculateFloorHeatLoss(formData)
        ventelationHeatLoss = self.calculateVentelationHeatLoss(formData)

        # totalHeatLoss = self.calculateWindowHeatLoss(formData, windowObject) + self.calculateDoorHeatLoss(formData, doorObject) + self.calculateWallHeatLoss(
        #     formData) + self.calculateRoofHeatLoss(formData) + self.calculateFloorHeatLoss(formData) + self.calculateVentelationHeatLoss(formData)
        totalHeatLoss = windowHeatLoss + doorHeatLoss + wallHeatLoss + \
            roofHeatLoss+floorHeatLoss+ventelationHeatLoss

        totalExternalHeatLoss = totalHeatLoss * \
            (locationFactor - indoorTemperature)

        heatLoss = {'windowHeatLoss': windowHeatLoss, 'doorHeatLoss': doorHeatLoss, 'wallHeatLoss': wallHeatLoss,
                    'roofHeatLoss': roofHeatLoss, 'floorHeatLoss': floorHeatLoss, 'ventelationHeatLoss': ventelationHeatLoss, 'totalHeatLoss':totalHeatLoss, 'totalExternalHeatLoss':totalExternalHeatLoss}

        return heatLoss
