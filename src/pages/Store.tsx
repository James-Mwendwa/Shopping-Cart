import { Col, Row } from "react-bootstrap";
import storeItems from "../data/data.json";

function Store() {
  return (
    <>
      <h2>store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
