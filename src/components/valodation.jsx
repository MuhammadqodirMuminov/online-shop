import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/persistance";
import { logOutUser } from "../slice/auth";
import classes from "../styles/addToCard.module.css";

const Valodation = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { loggedIn } = useSelector((state) => state.auth);

	const logOuthandler = () => {
		dispatch(logOutUser());
		navigate("/login");
		removeItem("token");
	};

	return (
		<nav>
			<ul id="MenuItems">
				<Link className="navbar-link" to={"/"}>
					<li>
						<i className="fa-solid fa-bag-shopping user"></i>
						<p className="user-span">
							Savat <span className={classes.addToCardCount}>0</span>
						</p>
					</li>
				</Link>
				{loggedIn ? (
					<Link to={"./account"}>
						<li >
							<i className="fa-solid fa-user user"></i>
						</li>
					</Link>
				) : (
					<Link to={"/login"}>
						<li>
							<i className="fa-solid fa-user user"></i>
							<span className="user-span">Log in</span>
						</li>
					</Link>
				)}
				<Link to={"/"}>
					<li>
						<i className="fa-regular fa-heart user"></i>
						<span className="user-span">Fovourite</span>
					</li>
				</Link>

				{loggedIn ? (
					<li onClick={logOuthandler}>
						<i className="fa-solid fa-right-from-bracket user"></i>
						<span className="user-span">log out</span>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export default Valodation;
