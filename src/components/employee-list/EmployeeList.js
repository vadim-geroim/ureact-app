import EmployeeListItem from "../employee-list-item/EmployeeListItem";
import './EmployeeList.css';

const EmployeeList = ({ data }) => {
    const listItems = data.map((item, index) => <EmployeeListItem key={index} {...item} />);

    return (
        <ul className="list-group">
            {listItems}
        </ul>
    );
}

export default EmployeeList;