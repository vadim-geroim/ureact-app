import EmployeeListItem from "../employee-list-item/EmployeeListItem";
import './EmployeeList.css';

const EmployeeList = () => {
    return (
        <ul className="list-group">
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </ul>
    );
}

export default EmployeeList;