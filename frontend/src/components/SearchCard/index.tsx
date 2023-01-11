import ButtonSearch from "components/ButtonSearch";
import "./styles.css";

const SearchCard = () => {
  return (
    <form action="#">
      <input type="text" className="form" placeholder="Digite a sua busca: " />
      <ButtonSearch />
    </form>
 
  );
}

export default SearchCard;
