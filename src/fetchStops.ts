import {RouteResponse} from "./type";

const fetchStops = async (id: string) => {
    const response = await fetch(`https://api.tfl.gov.uk/line/${id}/Route/sequence/inbound`);
    const responseJson : RouteResponse = await response.json();


    return responseJson.stopPointSequences[0].stopPoint.map((item) => {return item.name})
}
export default fetchStops;
