import EmployeeListItem from "../employee-list-item/EmployeeListItem";
import './EmployeeList.css';

const EmployeeList = ({ data }) => {
    const listItems = data.map(item => {
        const { id, ...itemProps } = item;
        return <EmployeeListItem key={id} {...itemProps} />
    });

    return (
        <ul className="list-group">
            {listItems}
        </ul>
    );
}

export default EmployeeList;