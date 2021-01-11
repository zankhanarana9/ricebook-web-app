
import React from 'react';

class Login extends React.Component {  
    

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleClick = (event) => {
        event.preventDefault();   
        if(this.state.email === "" ||
            this.state.password === "") {
                alert("Username and apssword are required");
                return;
            }
        this.props.login(this.state.email, this.state.password); 
                              
    }   

    setEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    setPassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (      
            <section id="login">
                 <div style={{margin: "0px auto",display:"block" }}>
                    <div className="row">
                        <h2 className="display-4 text-center">                                    
                            <small className="text-muted">Login</small>
                        </h2>
                    </div>
                    <div className="row">
                        <form id="login">
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="mb-3">
                                        <label htmlFor="loginUsername" 
                                            className="form-label text-left"
                                            style={{textAlign:"left"}}>
                                                User Name (Email):
                                        </label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="loginUsername" 
                                            placeholder="email@example.com" 
                                            value={this.state.email}
                                            required 
                                            onChange={this.setEmail}    
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="mb-3">
                                        <label htmlFor="loginPassword" className="form-label">Password:</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="loginPassword" 
                                            placeholder="password"
                                            value={this.state.password}
                                            onChange={this.setPassword} 
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row text-left mt-1">
                               <div className="col-lg-6">
                                <div className="mb-3">                                    
                                    <button className="btn btn-primary"
                                        onClick={this.handleClick}
                                    >Login</button>
                                </div>
                               </div>
                            </div>                            
                        </form>
                    </div>
                 </div>
            </section>
       )
    }
}
export default Login;
