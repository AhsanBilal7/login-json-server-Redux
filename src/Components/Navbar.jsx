import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
function NavbarComp() {
    const loggeduser = useSelector((state) => state.loggedUser);
  return (
    <>
      <Navbar bg="dark" className="mb-2 d-flex flex-row justify-content-evenly" data-bs-theme="dark">
      <Container className=""> 
      
      
      { (Object.keys( loggeduser).length > 0 ) ?  <Navbar.Text className="text-light">Signed in as: {loggeduser.name}</Navbar.Text>
          : <Navbar.Brand  href="#home">{console.log("No User Logged In")}   Navbar</Navbar.Brand> 
      }
      
      </Container>
        <Container className="  d-flex  justify-content-end">
          <Nav className="8">
            <div className="mx-2 d-flex  align-items-right justify-content-end ">
              {" "}
              {/* Add a container with black background */}
              <Link to="/" className="btn btn-light m-2">
                Home
              </Link>{" "}
              {/* Add btn and m-2 classes */}
              <Link to="/registeration" className="btn btn-light m-2">
                Registerations
              </Link>{" "}
              {/* Add btn and m-2 classes */}
              <Link to="/login" className="btn btn-light m-2">
                Login
              </Link>{" "}
              {/* Add btn and m-2 classes */}
            </div>
          </Nav>
        </Container>
      </Navbar>
      {/* <button onClick={()=>{console.log(loggeduser , loggeduser.length ,   )}}>defewfewfwefw</button> */}

    
    </>
  );
}

export default NavbarComp;
