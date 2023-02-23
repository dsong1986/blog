import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"

export  default function Login(){
  return (
    <>
      <section className="login">
        <div className="container">
            <div className="backImg">
                <img src={back} alt="image" />
            </div>
            <div className="text">
                <h3>Login</h3>
                <h1>My account</h1>
            </div>
            <form>
                <span>Username or Email Address*</span>
                <input type="text" required/>
                <span>Password*</span>
                <input type="text" required />
                <button className="button">Login</button>
            </form>
        </div>
      </section>
    </>
  )
}