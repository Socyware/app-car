import ProductCar from "components/ProducCar";
import SearchCard from "components/SearchCard";
import "./styles.css";

const Catalog = () => {
  return (
    <div className="container-card-catalog">
      <div className="searchcard">
        <SearchCard />
      </div>
      <div className="container-position my4">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCar />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
