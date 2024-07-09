import React, {useState} from 'react';
import fetchData from '../fetchData';
import {Output} from '../type';
import '../dataStyle.css';
import BusTable from "../BusTable";

const Buses: React.FC = () => {
  const [postcode, setPostcode] = useState<string>("");
  const [tableData, setTableData] = useState<Output[] | null>(null);

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    const data = await fetchData(postcode);
    setTableData(data);
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  // const busData = [];
  // if (tableData) {
  //   for (let i = 0; i < tableData.length; i++) {
  //     busData.push(
  //         <tr>
  //           <td>{tableData[i].lineName}</td>
  //           <td>{tableData[i].destinationName}</td>
  //           <td>{tableData[i].stationName}</td>
  //           <td>{tableData[i].timeToStation} min</td>
  //         </tr>
  //     )
  //   }
  // }



  return <>
    <div className="bgimg">
        <div className="bodyText">
            <h2 style={{margin: 0}}> BusBoard </h2>
            <form id="postCodeForm" action="" onSubmit={formHandler}>
                <label htmlFor="postcodeInput"> Postcode: </label>
                <input type="text" id="postcodeInput" onChange={updatePostcode}/>
                <input className="button" type="submit" value="Submit"/>
            </form>
            {tableData && <table>
                <thead>
                <tr>
                    <th>Line Name</th>
                    <th>Destination</th>
                    <th>Departing from</th>
                    <th>Due in</th>
                </tr>
                </thead>

                {/*<tbody>{busData}</tbody>*/}
                <tbody><BusTable tableData={tableData}/></tbody>
            </table>}
        </div>
    </div>
  </>;
}

export default Buses;