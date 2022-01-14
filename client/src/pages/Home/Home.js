import Banner from "../../components/Banner/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [prod, setProd] = useState([]);

  const getData = async () => {
    await axios.get("/prod/findMany").then((response) => {
      setProd(response.data);
    });
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <Banner image="https://http2.mlstatic.com/D_NQ_NP_676881-MLA48761918169_012022-OO.webp" />

      <CardContainer name="Produtos">
        {prod.map((prod) => (
          <Card
            key={prod.id}
            image={prod.imageUrl}
            name={prod.name}
            price={prod.price}
            id={prod.id}
          />
        ))}
      </CardContainer>
    </>
  );
}
