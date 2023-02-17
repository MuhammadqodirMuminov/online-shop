import React from "react";
import { Link } from "react-router-dom";
import { findStars } from "../helpers/findStars";
import classes from "../styles/allProduct.module.css";

const AllProduct = ({ product }) => {
	return (
		<>
			<div className={`col-4 ${classes.product__card}`}>
				<Link to={`/products/${product.id}`}>
					<img
						style={{
							width: "292px",
							height: "292px",
							borderRadius: "10px",
						}}
						src={product.thumbnail}
						alt="product img"
					/>
				</Link>

				<h3>{product.title}</h3>

				<p>{findStars(product.rating)}</p>

				<p>${product.price}</p>

				<div className={classes.addtoCard}>
					<i id={classes.fovoriteBtn} className="fa-regular fa-heart user"></i>

					<i id={classes.addBtn} className="fa-solid fa-cart-plus"></i>
				</div>
			</div>
		</>
	);
};

export default AllProduct;
