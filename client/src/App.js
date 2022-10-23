import './App.css';
import Main from "./components/main";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import DownloadFile from "./components/downloadFile";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route exact path={'/'} component={Main}></Route>
                <Route exact path={'/:fileName'} component={DownloadFile}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
