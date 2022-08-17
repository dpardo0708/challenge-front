import { Col, Row } from "react-grid-system";
import "./detail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { getDetail, getDetailDescription } from '../../services/detail';

import image1 from "../../images/image1.png";

import Header from "../../shared/components/header/header";
import Breadcrumb from "../../shared/components/breadcrumb/breadcrumb";
import Button from "../../shared/components/button/button";
import { useState, useEffect } from "react";

const Detail = () => {

  const [detail, setDetail ] = useState([]);
  const [description, setDescription ] = useState([]);
  const location = useLocation();
  const param = location.pathname.split("/")[2];

  useEffect(() => {
    getDetailProduct();
  }, []);


  const getDetailProduct = async () => {
    const result = await getDetail(param);
    console.log("result", result);
    setDetail(result.items);
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      
      <Row className="detail">
        <Col xs={6} sm={6} md={6}>
          <img src={image1} />
        </Col>
        <Col className="detail-right" xs={6} sm={6} md={6}>
          <div>
            <h3>Tenis Deportivos</h3>
            <p>$30000</p>
            <Button>Comprar</Button>
          </div>
        </Col>

        <Col className="description">
          <div>
            <h2>Descripción</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Detail;
