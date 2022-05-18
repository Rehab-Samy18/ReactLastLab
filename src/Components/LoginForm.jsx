import React from "react";
import App from "../App"; 
class Login extends React.Component{
    state = {
        AdminData:{
            Name:"rehab",
            Password:123
        },
        LoginUser:false,
        txtuser:'',
        txtpass:''
    };
    handlerInput = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubMitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted")
        //Get values ==> inputs
        let loginObjectUser = {
            Name:this.state.txtuser,
            Password:parseInt(this.state.txtpass)
        }
        //Save object ==> session
        //check
        if(
            this.state.AdminData.Name == this.state.txtuser &&
            this.state.AdminData.Password == this.state.txtpass
        ){
            this.setState({
                LoginUser:true
            })
        }
    }
    render(){
        if(!this.state.LoginUser){
            return(
                <>
                <form onSubmit={this.onSubMitHandler}>
                    <span>Username</span>
                    <input
                    className="form form-control" 
                    type="text" 
                    value={this.state.txtuser} 
                    name="txtuser" 
                    onChange={this.handlerInput}
                    /><br />
                    <span>Password</span>
                    <input 
                    className="form form-control" 
                    type="password" 
                    value={this.state.txtpass} 
                    name="txtpass" 
                    onChange={this.handlerInput}
                    />
                    <input type={"submit"} value="Login" className="btn btn-primary" />
                </form>
                </>
            )
        }
        else{
            return <App />
        }
    }
}
export default Login;