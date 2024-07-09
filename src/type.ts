interface responseData {
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

interface Coords {
    result: {
        "latitude": number;
        "longitude": number;
    }
}

interface Stops {
    id: string,
    distance: number,
    commonName: string,
    lineGroup: Lines[]
}

interface Lines {
    naptanIdReference: string,
}

interface Output {
    lineName: string,
    timeToStation: number,
    destinationName: string,
    stationName: string,

}
export type {responseData, Coords, Stops, Output};
