import React from "react";
import {Link} from "react-router-dom";

export default function ProductCard(props) {
	return (
		<>
		<div className="card">
			<img src={props.product.thumbnail} height={180} className="card-img-top" alt="..." />
			<div className="card-body" style={{height:"150px"}}>
				<h5 className="card-title" style={{height:"50px"}}>{props.product.title}</h5>
				<hr />
				<div className="row">
					<div className="col-6">
					<Link to={"/product/product-detail/" + props.product.id}
					className="btn btn-primary" style={{width:"120px"}}
				>
					Details
				</Link>
					</div>
					
					<div className="offset-1 col-5">
					<h3>
				{props.product.price + "₺"}
				</h3>
					</div>
				
				
				</div>
			</div>
		</div>
		</>
	);
}
