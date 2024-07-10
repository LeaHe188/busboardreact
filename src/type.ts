export interface responseData {
    "id": "string",
    "operationType": 0,
    "vehicleId": "string",
    "naptanId": "string",
    "stationName": "string",
    "lineId": "string",
    "lineName": "string",
    "platformName": "string",
    "direction": "string",
    "bearing": "string",
    "destinationNaptanId": "string",
    "destinationName": "string",
    "timestamp": "string",
    "timeToStation": 0,
    "currentLocation": "string",
    "towards": "string",
    "expectedArrival": "string",
    "timeToLive": "string",
    "modeName": "string",
    "timing": {
        "countdownServerAdjustment": "string",
        "source": "string",
        "insert": "string",
        "read": "string",
        "sent": "string",
        "received": "string"
    }
}

export interface Coords {
    result: {
        "latitude": number;
        "longitude": number;
    }
}

export interface Stops {
    id: string,
    distance: number,
    commonName: string,
    lineGroup: Lines[]
}

export interface Lines {
    naptanIdReference: string,
}

export interface Output {
    lineName: string,
    timeToStation: number,
    destinationName: string,
    stationName: string,
    id? : number
}