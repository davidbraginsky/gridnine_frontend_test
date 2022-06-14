import SortSidebar from "./components/SortSidebar";
import FlightTable from "./components/FlightTable";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    <div className="container">
      <div className="flights-table">
        <FilterProvider>
          <SortSidebar />
          <FlightTable />
        </FilterProvider>
      </div>
    </div>
  );
}

export default App;
