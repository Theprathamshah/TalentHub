import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						Job <span>Tracking</span> App
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Harum commodi dolores ab sed, provident molestias
						consectetur odit sequi debitis veniam.
					</p>

					<Link to={"/register"} className='btn register-link'>
						Register
					</Link>
					<Link to={"/register"} className='btn register-link'>
						Login / Guest User
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

export default Landing;
