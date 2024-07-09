import { responseData, Coords, Stops, Output } from "./type";

// const args = process.argv.slice(2);

const getBuses = async (id : string)=> {
    const response = await fetch(`https://api.tfl.gov.uk/StopPoint/${id}/Arrivals?app_key=854bdfdeffe74cb8945931e23fdcb6fd`);
    const responseJson = await response.json();
    const sortedResponse = responseJson.sort((n1: responseData, n2: responseData) => {
        if (n1.timeToStation > n2.timeToStation) {
            return 1;
        }
        else {
            return -1;
        }
    });
    if (sortedResponse.length > 5) {return sortedResponse.slice(0, 5);}
    return sortedResponse;
}


const fetchData = async (postcode: string): Promise<Output[]> => {
    const response2 = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    const postcodeJson = await response2.json() as Coords ;

    const latitude : number = postcodeJson.result.latitude
    const longitude : number = postcodeJson.result.longitude

    const response3 = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanOnstreetBusCoachStopPair&radius=1000`);
    const stopsJson = await response3.json();
    const stops : Stops[] = stopsJson.stopPoints;

    //already sorted

    const distanceSortedStops = stops.filter((n1: Stops) => n1.lineGroup.length>0);

    const sorted1 = await getBuses(distanceSortedStops[0].lineGroup[0].naptanIdReference);
    const sorted2 = await getBuses(distanceSortedStops[1].lineGroup[0].naptanIdReference);
    const fullBusses = sorted1.concat(sorted2);
    const sortedFull = fullBusses.sort((n1: responseData, n2: responseData) => {
        if (n1.timeToStation > n2.timeToStation) {
            return 1;
        }

        else {
            return -1;
        }
    });
    let output;
    if (sortedFull.length > 5) {output = sortedFull.slice(0,5)} else {output = sortedFull}

    const results = [];
    for (let item of output) {
        // console.log(`Route Number: ${item.lineName}`);
        // console.log(`Destination: ${item.destinationName}`);
        // console.log(`Time to Station: ${Math.floor(item.timeToStation/60)} min`);
        // console.log(`Stop name: ${item.stationName}\n`);
        results.push({lineName: item.lineName, timeToStation:Math.floor(item.timeToStation/60), destinationName: item.destinationName, stationName: item.stationName});
    }
    return results;
}

export default fetchData;

// fetchData()