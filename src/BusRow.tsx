import React from "react";
import {Output} from "./type";
import {Modal} from "./Modal"
import './modalStyle.css'

interface BusRowProps {
    row: Output
}

export const BusRow: React.FC<BusRowProps> = ({row}) => {
    return(<><Modal
        lineName={row.lineName} btn={document.getElementById(`modal_${row.lineName}_btn`)}
    /><tr>
        <td>
            <button id={`modal_${row.lineName}_btn`}> {row.lineName} </button></td>
        <td>{row.destinationName}</td>
        <td>{row.stationName}</td>
        <td>{row.timeToStation} min</td>
    </tr></>);
}

export default BusRow;