import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";

function App() {
  return (
    
    <div className="App">
      {/* Add your components here */ }
      {/* <Sidebar /> */ }
  <StatefulGreetingWithPrevState />
    </div >
  );
}

export default App;