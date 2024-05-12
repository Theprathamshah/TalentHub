import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import FormRow from "../components/FormRow";
const Register = () => {
	return (
		<Wrapper>
			<form className='form'>
				<Logo />
				<h4>Register</h4>
				<FormRow
					required={true}
					name={"name"}
					type={"text"}
					defaultValue={"John"}
				/>
				<FormRow
					required={true}
					name={"lastName"}
					labelText={"last name"}
					type={"text"}
					defaultValue={"Doe"}
				/>
				<FormRow
					required={true}
					name={"location"}
					type={"text"}
					defaultValue={"India"}
				/>
				<FormRow
					required={true}
					name={"email"}
					type={"email"}
					defaultValue={"johndoe@gmail.com"}
				/>
				<FormRow
					required={true}
					name={"password"}
					type={"password"}
					defaultValue={"password"}
				/>
				<button type='submit' className='btn btn-block'>
					Submit
				</button>
				<p>Already a member?</p>
				<Link to={"/login"} className='member-btn'>
					Login
				</Link>
			</form>
		</Wrapper>
	);
};
export default Register;
