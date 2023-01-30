import { Route, Routes } from "react-router-dom";
import { Navbar } from "./index";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				
			</Routes>

			{/* <div class="small-container">
				<div class="row row-2">
					<h2>All Products</h2>
					<select>
						<option value="">Default Shorting</option>
						<option value="">Short by price</option>
						<option value="">Short by popularity</option>
						<option value="">Short by rating</option>
						<option value="">Short by sale</option>
					</select>
				</div>
				<div class="row">
					<div class="col-4">
						<img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star-half-alt"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>
				</div>

				<div class="row">
					<div class="col-4">
						<img src="https://i.ibb.co/47Sk9QL/product-1.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/b7ZVzYr/product-2.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/KsMVr26/product-3.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star-half-alt"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/0cMfpcr/product-4.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>
				</div>

				<div class="row">
					<div class="col-4">
						<img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star-half-alt"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>
				</div>

				<div class="row">
					<div class="col-4">
						<img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star-half-alt"></i>
						</div>
						<p>₹500.00</p>
					</div>

					<div class="col-4">
						<img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt="" />
						<h4>Red Printed T-shirt</h4>
						<div class="rating">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
							<i class="far fa-star"></i>
						</div>
						<p>₹500.00</p>
					</div>
				</div>

				<div class="page-btn">
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>&#8594;</span>
				</div>
			</div> */}

			{/* <div class="footer">
				<div class="container">
					<div class="row">
						<div class="footer-col-1">
							<h3>Download Our App</h3>
							<p>Download App for Android and iso mobile phone.</p>
							<div class="app-logo">
								<img
									src="https://i.ibb.co/KbPTYYQ/play-store.png"
									alt=""
								/>
								<img
									src="https://i.ibb.co/hVM4X2p/app-store.png"
									alt=""
								/>
							</div>
						</div>

						<div class="footer-col-2">
							<img
								src="https://i.ibb.co/j3FNGj7/logo-white.png"
								alt=""
							/>
							<p>
								Our Purpose Is To Sustainably Make the Pleasure and
								Benefits of Sports Accessible to the Many.
							</p>
						</div>

						<div class="footer-col-3">
							<h3>Useful Links</h3>
							<ul>
								<li>Coupons</li>
								<li>Blog Post</li>
								<li>Return Policy</li>
								<li>Join Affiliate</li>
							</ul>
						</div>

						<div class="footer-col-4">
							<h3>Follow us</h3>
							<ul>
								<li>Facebook</li>
								<li>Twitter</li>
								<li>Instagram</li>
								<li>YouTube</li>
							</ul>
						</div>
					</div>
					<hr />
					<p class="copyright">Copyright &copy; 2021 - Red Store</p>
				</div>
			</div> */}
		</>
	);
};

export default App;
