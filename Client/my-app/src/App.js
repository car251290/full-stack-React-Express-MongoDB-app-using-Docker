import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      apiResponse: "",
      dbResponse :""
    };
  }
  // Go toa api and check the testApi router for a response
  callApi() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}))
    .catch(err => err);
  }
  //Go to the Api and check the testDB route for a response 
  callDB() {
    fetch("http://localhost:9000/testDB")
    .then(res => res.text())
    .then(res => this.setState({dbResponse:res}))
    .catch(err => err);
  }
  //Excute the calls when components mounts
  componentDidMount(){
    this.callApi();
    this.callDB();
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className = "App-title">Welcome to react word</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <p className="App-intro">{this.state.dbResponse}</p>

      </div>
    )
  }
}

export default App;
