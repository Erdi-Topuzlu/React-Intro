import React from "react";
import { Link } from "react-router-dom";

export default function Action() {


  const handleAdd = () => {
  const title = prompt("Product Title")
  const price = prompt("Product Price")
  fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      price: price
      /* other product data */
    }),
  })
    .then((res) => res.json())
    .then(data => {console.log("Added Product", data)} );
  }

  const handleDelete = ()=> { 
  const id = prompt("Product ID")
  fetch(`https://dummyjson.com/products/${id}`, {
  method: 'DELETE',
})
.then(res => res.json())
.then(data => {console.log("Deleted Product : ", data)});
  }
  return (
    <div className="row" style={{ display: "flex", textAlign: "end" }}>
      <div className="col-8"></div>
      <div className="offset-2 col-2 ml-5">
        <button onClick={handleAdd}
          className="btn btn-success"
          style={{ marginRight: "8px" }}
          type="button"
        >
          Add
        </button>
        <button onClick={handleDelete} className="btn btn-danger" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}
