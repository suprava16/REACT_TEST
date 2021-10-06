
import Login from "./components/Login"
import {BrowserRouter,Link,Route} from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Link to="/">LOGIN</Link>
      <Route exact path="/" component={(props)=>(<Login {...props}/>)}></Route>
      <Route exact path="/home" component={Home}></Route> 
      </BrowserRouter>
    </div>
  );
}

export default App;
