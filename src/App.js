import React, { Component } from 'react';
import './App.css';
import Input from './components/input/Input'
class App extends Component {
  constructor(props){
    super(props);
    this.state = { appData : {}, user:"", password:"", errorMsg:""}
    this.updatePassword = this.updatePassword.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.clickLogin = this.clickLogin.bind(this);
  }
  clickLogin(e){
    e.preventDefault(); 
    if(!this.state.user || !this.state.password){
      return this.setState({errorMsg:"Please enter credentials"})
    }
    var url = `//${window.location.hostname}:3001/login`;
    var data = {username: this.state.user , password:this.state.password};
    
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        let errorMsg = response.error;
        let appData = response.error?{} : response;
        this.setState({appData,errorMsg})
   })
  }
   updateUser(e){
      this.setState({user:e.target.value})
   }

   updatePassword(e){
       this.setState({password: e.target.value})
  }
  render() {
      let version=[];
      for (let i in this.state.appData)
      {
        version.push(<Input 
                      text={`value of:${i}`}
                      defaultValue={this.state.appData[i]}
                      id={`r-${i}`}
                      key={`r-${i}`}
                      />);
      }
    return (
      <div className="App">
          <form>
            <Input
              text="User"
              ariaReq="true"
              id="user"
              onChange={this.updateUser}
            />
            <Input
              text="Password"
              ariaReq="true"
              id="password"
              onChange={this.updatePassword}
              type="password"
            />
            <div className="errorMsg">{this.state.errorMsg}</div>
            <button onClick={this.clickLogin}>Enter</button>
            {version}
          </form>
      </div>
    );
  }
}

export default App;
