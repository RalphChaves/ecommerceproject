import { useState } from "react";
import axios from "axios";
import { Container, Title, Form, Terms, Button } from "./styles";

export default function Register() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      nickname: nickname,
      email: email,
      birthdate: birthdate,
      imageUrl: imageUrl,
      password: password,
      passwordConfirmation: passwordConfirmation,
    };

    axios
      .post("/user/register", user)
      .then((response) => console.log(response));
  };

  return (
    <Container>
      <Title>Criar uma conta Nintendo</Title>
      <Form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />

        <label>Nickname</label>
        <input
          type="text"
          required
          onChange={(event) => setNickname(event.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Data de Nascimento</label>
        <input
          type="text"
          required
          onChange={(event) => setBirthdate(event.target.value)}
        />

        <label>Imagem de perfil</label>
        <input
          type="text"
          required
          onChange={(event) => setImageUrl(event.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          required
          onChange={(event) => setPassword(event.target.value)}
        />

        <label>Confirmação da Senha</label>
        <input
          type="password"
          required
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />

        <Terms>
          <input type="checkbox" required />
          <label>
            Eu concordo com os termos do MercadoDoido
            e confirmo que li a Política de privacidade do MercadoDoido.
          </label>
        </Terms>
        <Button>
          <input type="submit" value="Continuar" />
        </Button>
      </Form>
    </Container>
  );
}
