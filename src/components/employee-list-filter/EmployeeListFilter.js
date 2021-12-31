import './EmployeeListFilter.css'

const EmployeeListFilter = () => {
    return (
        <div className="btn-group gap-1">
            <button type="button" className="btn btn-light">All</button>
            <button type="button" className="btn btn-light">On promotion</button>
            <button type="button" className="btn btn-light">Salary > 100k</button>
        </div>
    );
}

export default EmployeeListFilter;