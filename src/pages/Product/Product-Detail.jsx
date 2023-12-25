import React from "react";
import { Link, useParams } from "react-router-dom";
import { BarcodeOutlined, DollarCircleOutlined, LoadingOutlined, ShopOutlined, StarOutlined, TagOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Image, Avatar, List, Button } from "antd";

export default function ProductDetail({ data }) {
  const { id } = useParams();
  if (!data.products || !data) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <LoadingOutlined style={{ marginTop: "12px", fontSize: "36px" }} />
      </div>
    );
  }

  const product = data.products.find((item) => String(item.id) === id);

  const { title, description, price, rating, stock, images, brand, category } =
    product;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="breadcrumb-item active" style={{textDecoration:"none"}} to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
              <Link className="breadcrumb-item active" style={{textDecoration:"none"}} to={"/product"}>Products</Link>
              </li>
              <li className="breadcrumb-item">
              <Link className="breadcrumb-item active" style={{textDecoration:"none"}} >{category}</Link>
              </li>
              <li className="breadcrumb-item">
              <Link className="breadcrumb-item active" style={{textDecoration:"none"}} >{brand}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <Image width={500} src={images[0]} />
            <div className="mt-5">
              <Image width={120} height={80} src={images[2]} />
            </div>
          </div>
          <div className="col-6">
            <h1>{title}</h1>
            <hr />
            <List>
            <List.Item>
                <List.Item.Meta
                  avatar={<ShopOutlined style={{ marginTop: "2px", fontSize: "24px" }} />}
                  description={"Brand : " + brand}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<TagOutlined style={{ marginTop: "2px", fontSize: "24px" }} />}
                  description={"Category : " +category}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<UnorderedListOutlined style={{ fontSize: "24px" }} />}
                  description={"Description : " + description}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<StarOutlined style={{ fontSize: "24px" }} />}
                  description={"Rating : " + rating}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  avatar={<BarcodeOutlined style={{ fontSize: "24px" }} />}
                  description={"Stock : " + stock}
                />
              </List.Item>
              <List.Item  >
                <List.Item.Meta 
                  avatar={<DollarCircleOutlined style={{ fontSize: "24px" }} />}
                  description={"Price : " + price}
                />
              </List.Item>
              <List.Item  >
                <div className=""><Button danger>Delete</Button></div>
                
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
}
