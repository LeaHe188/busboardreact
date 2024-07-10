import {Output} from "./type";
import BusRow from './BusRow'
interface BusTableProps {
    tableData: Output[] | null;
}

const BusTable : React.FC<BusTableProps> = ({tableData}) => {
    return (tableData && <tbody>{tableData.map((item: Output) => {return <BusRow row={item} key={item.id}/>})}</tbody>);
}
export default BusTable;