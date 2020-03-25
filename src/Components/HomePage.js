import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Order from "./Modal/order";
import Bill from "./Modal/bill";
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";

const HomePage = () => {
  const [isOrderVisible, setIsOrderVisible] = useState(false);
  const [isBillVisible, setIsBillVisible] = useState(false);
  const [isDish1Checked, setIsDish1checked] = useState(false);
  const [isDish2Checked, setIsDish2checked] = useState(false);
  const [isDish3Checked, setIsDish3checked] = useState(false);
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <h3>Food Menu</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                checked={isDish1Checked}
                onChange={() => console.log("onChanged")}
              />
              <label
                className='custom-control-label'
                onClick={() => setIsDish1checked(!isDish1Checked)}
              >
                <Card
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    maxHeight: "20em"
                  }}
                >
                  <Card.Img variant='top' src={dish1} />
                </Card>
                <p style={{ marginBottom: 0 }}>Tapas con bacalao</p>
                <p>
                  {" "}
                  <font size='3'>€ 1.00</font>
                </p>
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                checked={isDish2Checked}
                onChange={() => console.log("onChanged")}
              />
              <label
                className='custom-control-label'
                onClick={() => setIsDish2checked(!isDish2Checked)}
              >
                <Card
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    maxHeight: "20em"
                  }}
                >
                  <Card.Img variant='top' src={dish2} />
                </Card>
                <p style={{ marginBottom: 0 }}>Tapas con pulpo</p>
                <p>
                  {" "}
                  <font size='3'>€ 1.00</font>
                </p>
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <div className='custom-control custom-checkbox'>
              <input
                type='checkbox'
                className='custom-control-input'
                checked={isDish3Checked}
                onChange={() => console.log("onChanged")}
              />
              <label
                className='custom-control-label'
                onClick={() => setIsDish3checked(!isDish3Checked)}
              >
                <Card
                  style={{
                    width: "100%",
                    maxWidth: "20em",
                    maxHeight: "20em"
                  }}
                >
                  <Card.Img variant='top' src={dish3} />
                </Card>
                <p style={{ marginBottom: 0 }}>Tapas con ensaladia rusa</p>
                <p>
                  {" "}
                  <font size='3'>€ 1.00</font>
                </p>
              </label>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <Button
              variant='primary'
              type='submit'
              disabled={!isDish1Checked || !isDish2Checked || !isDish3Checked}
              onClick={() => setIsOrderVisible(true)}
            >
              Order
            </Button>
          </Col>
        </Row>
      </Container>
      {isOrderVisible && (
        <Order
          isOrderVisible={isOrderVisible}
          handleConfirmOrder={() => {
            setIsOrderVisible(false);
            setIsBillVisible(true);
          }}
          handleCloseOrder={() => setIsOrderVisible(false)}
        />
      )}

      {isBillVisible && (
        <Bill
          isBillVisible={isBillVisible}
          handleClose={() => {
            setIsBillVisible(false);
            setIsDish1checked(false);
            setIsDish2checked(false);
            setIsDish3checked(false);
          }}
        />
      )}
    </>
  );
};
export default HomePage;
