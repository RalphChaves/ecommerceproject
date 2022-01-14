import { BsCartPlus } from "react-icons/bs";
import { Container, Item, Wish } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Card(props) {
  const navigate = useNavigate();
  const [prodAdded, setProdAdded] = useState(false);
  const [prodError, setProdError] = useState(false);

  const goToProdPage = () => {
    navigate("/prod", { state: props.id });
  };

  const wishProd = async () => {
    const token = localStorage.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const id = props.id;

    await axios.patch(`/user/addList/${id}`, "", config).then((response) => {
      if (response.data.status !== 200) {
        setProdError(true);
      }
    });
  };

  return (
    <Container>
      <Item onClick={goToProdPage}>
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <span>{"R$ " + props.price}</span>
      </Item>
      <Wish>
        <button onClick={wishProd}>
          <BsCartPlus />
        </button>
      </Wish>
      {prodError ? <p>ok</p> : ""}
    </Container>
  );
}
