import React, {useState} from 'react';
import fetchData from '../fetchData';
import {Output} from '../type';
import '../dataStyle.css';
import BusTable from "../BusTable";
import {useEffect} from "react";

const Buses: React.FC = () => {
  const [postcode, setPostcode] = useState<string>("");
  const [tableData, setTableData] = useState<Output[] | null>(null);

  async function formHandler(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault(); // to stop the form refreshing the page when it submits
    const data = await fetchData(postcode);
    if (!data) {
        alert('Please input valid postcode!')
    } else {
    setTableData(data);}
  }

  function updatePostcode(data: React.ChangeEvent<HTMLInputElement>): void {
    setPostcode(data.target.value)
  }

  async function automaticSubmission() {
      if (postcode) {
          const data = await fetchData(postcode);
          setTableData(data);
      }
  }

  useEffect(() => {
  const timeout = setInterval(automaticSubmission, 30000);
  return () => {
      clearInterval(timeout);
    }
  }, [automaticSubmission])
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
                <BusTable tableData={tableData}/>
            </table>}
        </div>
    </div>
  </>;
}

export default Buses;