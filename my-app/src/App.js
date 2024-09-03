import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    
    <div className="App">
      {/* Add your components here */ }
      {/* <Sidebar /> */ }
  <StatefulGreeting greeting="I'm learning Stateful class Component" name = "Mila" age ="18"/>
    </div >
  );
}

export default App;