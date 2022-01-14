import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Container, Social } from "./styles";

export default function Footer() {
  return (
    <Container>
      <Social>
        <a href="!">
          <FaFacebookSquare />
        </a>
        <a href="!">
          <FaInstagramSquare />
        </a>
        <a href="!">
          <FaTwitterSquare />
        </a>
        <a href="!">
          <FaYoutubeSquare />
        </a>
      </Social>
      <span>
        © 2021 MercadoDoido. Os produtos e preço e demais informaçoes aqui, são
        meramente pra estudo, nao condizem com a realidade, imagens tiradas da
        internet "google", direito tota de seus respectivos donos.
      </span>
    </Container>
  );
}
