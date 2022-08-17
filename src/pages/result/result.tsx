import React, { useEffect, useState } from "react";
import "./result.scss";
import { Row, Col } from "react-grid-system";
import getItems from "../../services/items";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../shared/components/header/header";
import Breadcrumb from "../../shared/components/breadcrumb/breadcrumb";

const Result = () => {
  const [list, setList] = useState([]);
  const [ id, setId] =  useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const param = location.search.split("=")[1];

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const result = await getItems(param);
    setList(result.items);
  };

    const showDetail = (id:string) => {
    return navigate(`/items/${id}`);
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      {list.map((obj: any) => {
        const {
          id,
          thumbnail,
          title,
          price,
          address: { city_name },
        } = obj;
        return (
          <Row onClick={() => showDetail(id)} className="result">
            <Col xs={3} sm={3} md={3}>
              <div className="image-result">
                <img src={thumbnail} />
              </div>
            </Col>
            <Col xs={3} sm={3} md={3}>
              <div className="content-result">
                <span>${price}</span>
                <h3>{title}</h3>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6}>
              <div className="city-result">
                <span>{city_name}</span>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Result;
