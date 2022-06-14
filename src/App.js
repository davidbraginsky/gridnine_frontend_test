import SortSidebar from "./components/SortSidebar";
import FlightTable from "./components/FlightTable";

function App() {
  return (
    <div className="container">
      <div className="flights-table">
        <SortSidebar />
        <FlightTable />
      </div>
    </div>
  );
}

export default App;
