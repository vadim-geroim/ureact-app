import './App.css';
import Header from '../app-header/Header';
import EmployeeSearch from '../employee-search/EmployeeSearch';
import EmployeeListFilter from '../employee-list-filter/EmployeeListFilter';
import EmployeeList from '../employee-list/EmployeeList';
import EmployeeAddForm from '../employee-add-form/EmployeeAddForm';

const data = [
  { id: 1, name: "Kate Jakson", salary: 50000, isPromoted: true },
  { id: 2, name: "Jake Smith", salary: 400000, isPromoted: false },
  { id: 3, name: "Clark Gibson", salary: 100000, isPromoted: true }
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="employee-search-wrapper">
        <EmployeeSearch />
        <EmployeeListFilter />
        <EmployeeList data={data} />
      </div>
      <EmployeeAddForm />
    </div>
  );
}

export default App;
