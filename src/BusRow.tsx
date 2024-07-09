import React from "react";
import {Output} from "./type";

interface BusRowProps {
    row: Output
}

const BusRow: React.FC<BusRowProps> = ({row}) => {
    return(<tr>
        <td>{row.lineName}</td>
        <td>{row.destinationName}</td>
        <td>{row.stationName}</td>
        <td>{row.timeToStation} min</td>
    </tr>);
}

export default BusRow;