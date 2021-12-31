import './App.css';
import Header from '../app-header/Header';
import EmployeeSearch from '../employee-search/EmployeeSearch';
import EmployeeListFilter from '../employee-list-filter/EmployeeListFilter';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="employee-search-wrapper">
        <EmployeeSearch />
        <EmployeeListFilter />
      </div>
    </div>
  );
}

export default App;
