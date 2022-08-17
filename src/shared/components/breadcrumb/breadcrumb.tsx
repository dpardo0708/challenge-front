import "./breadcrumb.scss";
import bread from "../../../images/breadcrumb.svg";

const Breadcrumb = () => {
  return (
    <>
      <div className="breadcrumb">
        <ul>
          <li>Ropa</li>
          <li>
            <img className="breadcrumb-icon" src={bread} alt="Breadcrumb" />
          </li>
          <li>Camisas</li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
