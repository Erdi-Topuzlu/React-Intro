import React from "react";
import { Col, Row, Button, Space, Typography, Divider } from "antd";

import { useEffect, useState } from "react";
const { Text, Title } = Typography;

export default function Counter() {
  const style = {
    background: "#9fa9a3",
    padding: "0 8px 8px 4px",
    border: "2px solid",
  };

  let totalCount = 0;

  const [total, setTotal] = useState(0); //useState UI ' da anında etkileşime geçmek için değişken tanımlarken kullanılır.

  const increase = () => {
    setTotal((prevState) => {
      //Birden fazla satır kod yazarken değeri return etmeliyiz!
      return prevState + 1;
    });
  };

  const decrease = () => {
    setTotal(total - 1);
  };

  useEffect(() => {
    //useEffect dep Listteki herhangi bir değişken değiştiğinde tetiklenir.her sayfa açılışı useEffect'i tetikler.
    console.log("useEffect run!");
  }, [total]);
  return (
    <div>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={8}></Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Divider orientation="center">
              <Row>
                <Col span={12}>
                  <Space direction="vertical">
                    <Title level={3}>Sayaç : {total}</Title>
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      increase();
                    }}
                  >
                    +
                  </Button>
                  <Button type="primary" onClick={decrease} danger>
                    -
                  </Button>
                  </Space>
                </Col>
              </Row>
            </Divider>
          </div>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
    </div>
  );
}
