import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom"
import Features from "./components/Features";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/features">
                    <Features/>
                </Route>
                <Route path="/contacts">
                    <Contacts/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
