import SortSidebar from "./components/SortSidebar";
import FlightTable from "./components/FlightTable";
import { FlightProvider } from "./context/FlightContext";

function App() {
  return (
    <div className="container">
      <div className="flights-table">
        <FlightProvider>
          <SortSidebar />
          <FlightTable />
        </FlightProvider>
      </div>
    </div>
  );
}

export default App;
