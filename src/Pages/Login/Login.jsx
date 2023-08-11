import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { loggedUser } from "../Store/LoggedUserSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const usenavigate = useNavigate();
  const [username, usernameupdate] = React.useState("");
  const [password, passwordupdate] = React.useState("");
  const formverify = () => {
    if (username === "" || password === "") {
      return false;
    } else {
      return true;
    }
  }
const dispatch = useDispatch();
  const userDataBase = useSelector((state) => state.register);
  const ProceedLogin = (e) => {
    e.preventDefault()
    if(formverify()){

      console.log("Form is Valid");
      console.log(userDataBase);

      if (userDataBase.length > 0) {
        let user = userDataBase.find((user) => user.name === username);
        if (user) {
          if (user.password === password) {
            toast.success("Login Successfull");
            const toadINFO = toast.info("Please Wait. Redirecting to Home" , {autoClose: false})
            setTimeout(() => {
              toast.dismiss(toadINFO);
              usenavigate("/");
            }, 2000); 

          } else {
            toast.error("Password is Incorrect");
          }
          dispatch(loggedUser(user))
          
        } else {
          toast.error("User Not Found");
        }
      }



    }else{
      toast.warning("Please Provide all fields");
    }
  };



  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
          <form onSubmit={ProceedLogin} className="container">
            <div className="card">
              <div className="card-header">
                <h2>User Login</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>
                    User Name <span className="errmsg">*</span>
                  </label>
                  <input
                    value={username}
                    onChange={(e) => usernameupdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <label>
                    Password <span className="errmsg">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => passwordupdate(e.target.value)}
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>{" "}
                |
                <Link className="btn btn-success" to={"/registeration"}>
                  New User
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>


  );
}

export default Login;
