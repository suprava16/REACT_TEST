import React, { Component } from "react";

export default class login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }
    handleClick=()=>{
        fetch("https://apibestdrop.ajatus.in/userApi/login",{
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            }
            )
        })
        .then((response)=>response.json())
        .then((result)=>{
            console.log(result)
            if(result.error!=="Email  Not Registered"){
                alert("registered successfull")
            }
            else{
                alert("Email Not Registered")
            }
            this.props.history.push("/home")
        })
        .catch((error)=>{
            console.error(error)
        })
    }
  render() {
      console.log(this.state)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6 m-auto">
              <div class="mb-3">
                <label for="formGroupExampleInput" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter email"
                  onChange={(e)=>{this.setState({
                      email:e.target.value
                  })}}
                />
              </div>
              <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Enter Passwprd"
                  onChange={(e)=>{this.setState({
                    password:e.target.value
                })}}
                />

              </div>
              <div>
              <button className="btn btn-primary"  type="submit" onClick={this.handleClick}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
