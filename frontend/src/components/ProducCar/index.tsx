import "./styles.css";
import ImgCar from "assets/images/car.png";
import ButtonPay from "components/ButtonPay";

const ProductCar = () => {
  return (
    <div className="car-container">
      <div className="img-car">
        <img src={ImgCar} alt="Carro" />
      </div>
      <div>
        <h6>Audi Supra TT</h6>
      </div>
      <div className="btn-pay">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <ButtonPay />
    </div>
  );
};

export default ProductCar;
