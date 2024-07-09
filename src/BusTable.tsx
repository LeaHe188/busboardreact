import {Output} from "./type";
import BusRow from './BusRow'
interface BusTableProps {
    tableData: Output[] | null;
}

const BusTable : React.FC<BusTableProps> = ({tableData}) => {
    if (tableData) {
        return (
            <>
                <BusRow row={tableData[0]}/>
                <BusRow row={tableData[1]}/>
                <BusRow row={tableData[2]}/>
                <BusRow row={tableData[3]}/>
                <BusRow row={tableData[4]}/>
            </>
        );
    } else {
        return <></>;
    }
}
export default BusTable;