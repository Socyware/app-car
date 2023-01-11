import { ReactComponent as MainImage } from "assets/images/car-home.svg";
import ButtonIcon from "components/ButtonIcon";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-image-card">
          <MainImage />
        </div>
        <div>
          <h6>O carro perfeito para você.</h6>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho.
          </p>
        </div>
      </div>
      <div className="home-card-2">
        <NavLink to="/catalog" activeClassName="active">
          <ButtonIcon />
        </NavLink>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};

export default Home;
