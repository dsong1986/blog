import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"

export  default function Register(){
  return (
    <>
      <section className="login">
        <div className="container">
            <div className="backImg">
                <img src={back} alt="image" />
            </div>
            <div className="text">
                <h3>Register</h3>
                <h1>My account</h1>
            </div>
            <form>
                <span>Email Address*</span>
                <input type="text" required/>
                <span>Username*</span>
                <input type="text" required/>
                <span>Password*</span>
                <input type="text" required />
                <span>Confirm Password*</span>
                <input type="text" required />
                <button className="button">Register</button>
            </form>
        </div>
      </section>
    </>
  )
}