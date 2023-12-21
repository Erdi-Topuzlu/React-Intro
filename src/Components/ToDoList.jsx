import React from "react";
import { useState } from "react";

import {
  Col,
  Row,
  Button,
  Input,
  Space,
  Typography,
  Divider,
  Timeline,
} from "antd";
const { Text, Title } = Typography;

export default function ToDoList() {
  const style = {
    background: "#9fa9a3",
    padding: "0 8px 8px 4px",
    border: "2px solid",
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const InputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div style={style}>
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
          <div>
            <Divider orientation="center">
              <Row>
                <Col span={12}>
                  <Space direction="vertical">
                    <Title level={3}>ToDo List</Title>
                  </Space>
                </Col>
              </Row>
            </Divider>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                status=""
                placeholder="ToDo:"
                value={inputValue}
                onChange={InputChange}
              />
              <Divider orientation="center">
                <Button type="primary" onClick={AddTodo}>
                  Add
                </Button>
              </Divider>
            </Space>

            <Space direction="vertical" style={{ width: "100%" }}>
              <Divider orientation="center">
                <Timeline>
                  {todos.map((todo, index) => (
                    <Timeline.Item>
                      {todo} -{" "}
                      <Button
                        type="primary"
                        onClick={() => DeleteTodo(index)}
                        danger
                      >
                        X
                      </Button>
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Divider>
            </Space>
          </div>
        </Col>
        <Col className="gutter-row" span={8}></Col>
      </Row>
    </div>
  );
}
