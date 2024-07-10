import React from "react";
import {Output} from "./type";

interface BusRowProps {
    row: Output
}

export const BusRow: React.FC<BusRowProps> = ({row}) => {
    return(<><tr>
        <td><a href={`https://tfl.gov.uk/bus/route/${row.lineName}/?direction=inbound/`}>{row.lineName}</a></td>
        <td>{row.destinationName}</td>
        <td>{row.stationName}</td>
        <td>{row.timeToStation} min</td>
    </tr></>);
}

export default BusRow;