const EmployeeListItem = () => {
    return (
        <li className="list-group-item d-flex justify-content-around align-items-center">
            <span>Item</span>
            <span>$1000</span>
            <div className="btn-group gap-1">
                <button type="button" className="btn btn-success">Promotion</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </li>
    );
}

export default EmployeeListItem;