import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "../../redux/reducer/user/userSlice";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setUser({}));
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="dark " variant="dark">
        <Container >
          <Navbar.Brand >
            <Link to="/" style={{ padding: "5px" }}>
              Gremlins
            </Link>
          </Navbar.Brand>
          <Nav >
            <Link to="/" className="text-decoration-none m-3 " >
              Home
            </Link>
            <Link to="login" className="m-2">
              <Button>Iniciar sesión</Button>
            </Link>
            <Link to="/newuser">
            <Button  className="m-2 bg-success">
              Registrase
            </Button>
            </Link>
            <Button className="m-2 bg-danger" onClick={logout}>
              Cerrar Sesión
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
