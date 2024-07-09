import React, {useState} from 'react';
import fetchData from '../fetchData';
import {Output} from '../type';
import '../dataStyle.css';

// async function getBuses(postcode: string): Promise<string> {
//   // very basic testing string, you'll likely return a list of strings or JSON objects instead!
//   const postcodeString = (postcode === "") ? "" : ` - given postcode is ${postcode}`;
//   return "Some cool bus HTML generated by TypeScript" + postcodeString;
// }

function Buses(): React.ReactElement {
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

  const busData = [];
  if (tableData) {
    for (let i = 0; i < tableData.length; i++) {
      busData.push(
          <tr>
            <td>{tableData[i].lineName}</td>
            <td>{tableData[i].destinationName}</td>
            <td>{tableData[i].stationName}</td>
            <td>{tableData[i].timeToStation} min</td>
          </tr>
      )
    }
  }


  return <>
    <h1> BusBoard </h1>
    <form action="" onSubmit={formHandler}>
      <label htmlFor="postcodeInput"> Postcode: </label>
      <input type="text" id="postcodeInput" onChange={updatePostcode}/>
      <input type="submit" value="Submit"/>
    </form>
    <table>
      <thead>
      <tr>
        <th>Line Name:</th>
        <th>Destination:</th>
        <th>Departing from:</th>
        <th>Due in:</th>
      </tr>
      </thead>

      <tbody>{busData}</tbody>
    </table>
  </>;
}

export default Buses;