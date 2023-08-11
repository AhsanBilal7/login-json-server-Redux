import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { register_get, register_post } from "../Store/registerSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  useSelector } from "react-redux/es/hooks/useSelector";


function Registeration() {

  const userDataBase = useSelector((state) => state.register);
  const dispatch = useDispatch();
  



  const [id, idchange] = React.useState("");
  const [password, passwordchange] = React.useState("");
  const [name, namechange] = React.useState("");
  const [email, emailchange] = React.useState("");
  const [phone, phonechange] = React.useState("");
  const [country, countrychange] = React.useState("Pakistan");
  const [address, addresschange] = React.useState("");
  const [gender, genderchange] = useState("");
  const isFormValid = () => {
    return (
      id !== "" &&
      password !== "" &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      country !== "" &&
      address !== "" &&
      gender !== ""
      );
    };
    
    const handlesubmit = (e) => {
      
      e.preventDefault();
      let reg = { id, name, password, email, phone, country, address, gender };
      console.log(reg);
      if (isFormValid()) {

      console.log("Form is Valid");
      dispatch(register_post(reg));
    } else {
      console.log("Form is Not Valid");
      toast.warning("Please Provide all fields");
      
    }
    console.log("Clicked");
    console.log(userDataBase);
 
  };
  return (
    <>
      <div>
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <div className="card">
              <div className="card-header">
                <h1>User Registeration</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        User Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={id}
                        onChange={(e) => idchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Password <span className="errmsg">*</span>
                      </label>
                      <input
                        value={password}
                        onChange={(e) => passwordchange(e.target.value)}
                        type="password"
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Full Name <span className="errmsg">*</span>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Email <span className="errmsg">*</span>
                      </label>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Phone <span className="errmsg"></span>
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>
                        Country <span className="errmsg">*</span>
                      </label>
                      <select
                        value={country}
                        onChange={(e) => countrychange(e.target.value)}
                        className="form-control"
                      >
                        <option value="india">Pakistan</option>
                        <option value="usa">USA</option>
                        <option value="singapore">Singapore</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <textarea
                        value={address}
                        onChange={(e) => addresschange(e.target.value)}
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Gender</label>
                      <br></br>
                      <input
                        type="radio"
                        checked={gender === "male"}
                        onChange={(e) => genderchange(e.target.value)}
                        name="gender"
                        value="male"
                        className="app-check"
                      ></input>
                      <label>Male</label>
                      <input
                        type="radio"
                        checked={gender === "female"}
                        onChange={(e) => genderchange(e.target.value)}
                        name="gender"
                        value="female"
                        className="app-check"
                      ></input>
                      <label>Female</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>{" "}
                |
                <Link to={"/login"} className="btn btn-danger">
                  Close
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <button onClick={()=>registerButtonClick(newData)} >Register</button> */}

    </>
  );
}

export default Registeration;
