import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <div className="card_Container">
    <div className="card_V">
        <div className="card_Img_V">
            <h1 className="login-card-title">Login</h1>
        </div>
           
            <form className="login-form">                                                                           
                <div className="login-form-group">
                    <label for="email">Email</label><br/>
                    <input className="input" type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login-form-group">
                    <label for="password">Password</label><br/>
                    <input className="input" type="password" name="password" placeholder="Password" required />
                </div>
                <div className="login-form-checkbox">
                    <input type="checkbox" />
                    <label for="remember">Remember me</label><br/>
                </div>
                <div className="login-form-group">
                    <button type="submit" className="btn">Login</button>
                </div>
                <div className="login-form-group form-link">
                    <a href="./signup.html">Forget Password</a><br/>
                    <a href="./signup.html">Register</a>
                </div>
            </form>
        
        </div>
    </div>

  )
  }