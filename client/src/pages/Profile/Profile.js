import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function Profile() {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.token) {
      const token = localStorage.token;

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios.get("/auth/profile", config).then((response) => {
        setUser(response.data);
        setLogged(true);
      });
    }
  }, [mounted]);

  const handleLogoff = () => {
    localStorage.removeItem("token");
  };

  return (
    <Container>
      {logged ? (
        <>
          <img src={user.imageUrl} alt={user.name} />
          <span>
            <strong>Nome:</strong> {user.name}
          </span>
          <span>
            <strong>Nickname:</strong> {user.nickname}
          </span>
          <span>
            <strong>Membro desde:</strong> {user.createdAt}
          </span>
          <button onClick={handleLogoff}>Logoff</button>
        </>
      ) : (
        <>
          <img
            src="https://i.pinimg.com/originals/67/bf/c0/67bfc092e13c62e1354e97a34d2949a0.png"
            alt="triste"
          />
          <h2>Sem dados do perfil, faça login</h2>
        </>
      )}
    </Container>
  );
}
