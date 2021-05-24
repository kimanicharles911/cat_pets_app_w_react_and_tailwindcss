import NavBarComponent from "./components/NavbarComponent.jsx";
import ScottishComponent from "./components/ScottishComponent.jsx";
import MonthBreedComponent from "./components/MonthBreedComponent.jsx";
import PersianComponent from "./components/PersianComponent.jsx";
import AmericanComponent from "./components/AmericanComponent.jsx";
import JavaneseComponent from "./components/JavaneseComponent.jsx";
import KhaoComponent from "./components/KhaoComponent.jsx";
import SingapuraComponent from "./components/SingapuraComponent.jsx";
import YorkComponent from "./components/YorkComponent.jsx";
import RagaMuffinComponent from "./components/RagaMuffinComponent.jsx";
import AuthFailureComponent from "./components/AuthFailureComponent.jsx";
import AuthSuccessComponent from "./components/AuthSuccessComponent.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="container mx-auto">
      <Router>
        <NavBarComponent />
        <Switch>
          <Route path="/" exact component={MonthBreedComponent} />
          <Route path="/scottish" exact component={ScottishComponent} />
          <Route path="/persian" exact component={PersianComponent} />
          <Route path="/american" exact component={AmericanComponent} />
          <Route path="/javanese" exact component={JavaneseComponent} />
          <Route path="/khao" exact component={KhaoComponent} />
          <Route path="/singapura" exact component={SingapuraComponent} />
          <Route path="/york" exact component={YorkComponent} />
          <Route path="/ragamuffin" exact component={RagaMuffinComponent} /> 
          <Route path="/authfailure" exact component={AuthFailureComponent} /> 
          <Route path="/authsuccess" exact component={AuthSuccessComponent} />       
        </Switch>
      </Router>
    </div>
  );
};

export default App;
