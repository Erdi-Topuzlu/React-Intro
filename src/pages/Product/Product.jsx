import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Action from "../../components/Actions/Action";

export default function Product({data}) {

	
		const products = data.products || [];
	
	return (
		<div className="container mt-5">
			<Action className=""/>
			<div className="row mt-5">
				{products.map(product => (
					<div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
						
						<ProductCard product={product} />
						
					</div>
				))}
			</div>
		</div>
	);
}
