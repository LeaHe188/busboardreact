import { responseData, Coords, Stops, Output } from "./type";


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


const fetchData = async (postcode: string): Promise<Output[] | null> => {
    let counter = 0;
    const response2 = await fetch(`https://api.postcodes.io/postcodes/${postcode}`);
    if (response2.status !== 200) {return null}

    const postcodeJson = await response2.json() as Coords ;


    const latitude : number = postcodeJson.result.latitude
    const longitude : number = postcodeJson.result.longitude

    const response3 = await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${latitude}&lon=${longitude}&stopTypes=NaptanOnstreetBusCoachStopPair&radius=1000`);
    const stopsJson = await response3.json();
    const stops : Stops[] = stopsJson.stopPoints;

    const distanceSortedStops = stops.filter((n1: Stops) => n1.lineGroup.length>0);

    const sorted1 = await getBuses(distanceSortedStops[0].lineGroup[0].naptanIdReference);
    const sorted2 = await getBuses(distanceSortedStops[1].lineGroup[0].naptanIdReference);
    const fullBusses = sorted1.concat(sorted2);
    const sortedFull = fullBusses.sort(
        (n1: responseData, n2: responseData) => {
        return n1.timeToStation > n2.timeToStation ? 1 :  -1
        }
    )
    const output = sortedFull.slice(0,5);

    return output.map((item: Output) => {return {lineName: item.lineName, timeToStation:Math.floor(item.timeToStation/60), destinationName: item.destinationName, stationName: item.stationName, id: counter++}});
}

export default fetchData;

