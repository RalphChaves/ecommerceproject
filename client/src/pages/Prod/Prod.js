import { Container, Header, Info, Bar } from "./styles";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Prod() {
  const state = useLocation();
  const id = state.state;

  const [prod, setProd] = useState({});
  const [mounted, setMounted] = useState(false);

  const getData = async () => {
    await axios.get(`/prod/find/${id}`).then((response) => {
      setProd(response.data);
    });
  };

  useEffect(() => {
    setMounted(true);
    getData();
  }, [mounted]);

  return (
    <Container>
      <Header>
        <img src={prod.imageUrl} alt={prod.name} />
      </Header>
      <Info>
        <h2>{prod.name}</h2>

        <Bar>
          <span>R$ {prod.price}</span>
          <a href="wishlist">
            <FaRegHeart />
          </a>
        </Bar>

        <p>{prod.description}</p>
      </Info>
    </Container>
  );
}
