import React from 'react';
import '../Login/Login.css';

export const SignUP=()=>{
    return (
        <div className="card_Container">
                <div className="card_V">
                <div className="card_Img_V">
                    <h1 className="login-card-title">Sign Up</h1>
                </div>
                    <div className="login-card-body">
                        <form className="login-form">                                                                           
                            <div className="login-form-group">
                                <label for="email">Email</label><br/>
                                <input className="input" type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="login-form-group">
                                <label for="password">Password</label><br/>
                                <input className="input" type="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="login-form-group">
                                <label for="password">Password</label><br/>
                                <input className="input" type="password" name="password" placeholder="Re-enter Password" required /> 
                            </div>
                            <div className="login-form-checkbox">
                                <input type="checkbox" />
                                <label for="T&C">Terms & conditions<sup>*</sup></label><br/>
                            </div>
                            <div className="login-form-group">
                                <button type="submit" className="btn success login-btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}