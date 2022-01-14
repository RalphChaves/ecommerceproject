import logo from "./logo.png";
import { Container, Logo, List } from "./styles";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCartPlus } from "react-icons/bs";

export default function Navbar() {
  return (
    <Container>
      <Logo>
        <a href="/">
          <img src={logo} alt="Nintendo" />
        </a>
      </Logo>
      <List>
        <li>
          <a href="/wishlist">
            <BsCartPlus />
            <span>Carrinho</span>
          </a>
        </li>
        <li>
          <a href="/login">
            <FaRegUser />
            <span>Login</span>
          </a>
        </li>
        <li>
          <a href="/register">
            <FaUserPlus />
            <span>Criar conta</span>
          </a>
        </li>
        <li>
          <a href="/profile">
            <CgProfile />
            <span>Perfil</span>
          </a>
        </li>
      </List>
    </Container>
  );
}
