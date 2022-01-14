import { Container, InfoBar } from "./styles";

export default function Banner(props) {
  return (
    <Container>
      <img src={props.image} alt={props.name} />
      <InfoBar>
        <span>Já disponível</span>       
      </InfoBar>
    </Container>
  );
}
