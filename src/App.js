import './App.css';
import './components/Navbar';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Templates from "./components/Templates";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  

} 
from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="container-md" style={{maxWidth: "650px", marginTop: "50px"}}>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/templates">
            <Templates />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
