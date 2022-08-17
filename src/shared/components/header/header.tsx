import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../search/search";
import "./header.scss";

const Header = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    let { name } = e.target;
    let { value } = e.target;
    if (name) {
      if (name === "search") {
        setSearch(value);
      }
    }
  };

  const clickButton = () => {  
      
    return navigate(`items?search=${search}`);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="https://www.mercadolibre.com.co/"></a>
      </div>
      <Search
        placeholder={"Nunca dejes de buscar"}
        name="search"
        id="search"
        value={search}
        type="text"
        onChange={handleChange}
        onClick= {clickButton}
      />
    </div>
  );
};

export default Header;
