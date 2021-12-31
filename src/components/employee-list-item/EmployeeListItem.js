import './EmployeeListItem.css';

const EmployeeListItem = ({ name, salary, isPromoted }) => {
    let classNames = "list-group-item d-flex justify-content-around align-items-center";
    if (isPromoted) classNames += " promoted";

    return (
        <li className={classNames}>
            <span>{name}</span>
            <span>{`$${salary}`}</span>
            <div className="btn-group gap-1">
                <button type="button" className="btn btn-success">Promotion</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </li>
    );
}

export default EmployeeListItem;