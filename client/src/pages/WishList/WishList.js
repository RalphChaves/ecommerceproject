import CardContainer from "../../components/CardContainer/CardContainer";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WishList() {
  const [wishlist, setWishlist] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("user/userList", config).then((reponse) => {
        setWishlist(reponse.data.prod);
      });
    }
  }, [mounted]);

  return (
    <CardContainer title="Lista de Desejos">
      {wishlist.length > 0 ? (
        wishlist.map((prod) => (
          <Card
            key={prod.id}
            image={prod.imageUrl}
            name={prod.name}
            price={prod.price}
            id={prod.id}
          />
        ))
      ) : (
        <h2>Lista vazia</h2>
      )}
    </CardContainer>
  );
}
