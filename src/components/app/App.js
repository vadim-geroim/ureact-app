import './App.css';
import Header from '../app-header/Header';
import EmployeeSearch from '../employee-search/EmployeeSearch';
import EmployeeListFilter from '../employee-list-filter/EmployeeListFilter';
import EmployeeList from '../employee-list/EmployeeList';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="employee-search-wrapper">
        <EmployeeSearch />
        <EmployeeListFilter />
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
