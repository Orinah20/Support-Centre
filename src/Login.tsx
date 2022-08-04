import vector_left from './svg/Login/vector_left.svg';
import vector_right from './svg/Login/vector_right.svg';
import agent from './svg/Login/agent.svg'
import sky_logo_login from "./svg/Login/sky_logo_login.svg"
import './App.css';
import {useForm} from "@mantine/form";
import {Group, PasswordInput, TextInput, Button} from "@mantine/core";

import {useNavigate} from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',

            //dummyvalidation

            confirmEmail: 'forinan2000@gmail.com',
            confirmPassword: 'Qwerty123$'
        },

        validate: {

            //dummyvalidation

            email: (value, values) => (/^\S+@\S+$/.test(value) ?
                (value !== values.confirmEmail ? 'Wrong Email' : null) : 'Invalid email'),
            password: (value, values) =>
                value !== values.confirmPassword ? 'Wrong Password' : null,

        },

    });

    const handleClick = () => {
        navigate('/landing');
    };


    return (
        <div className={"login_page"}>
            <div className={"vector"}>
                <img className={"vector-left"} alt={""} src={vector_left}/>
                <img className={"vector-right"} alt={""} src={vector_right}/>
            </div>

            <div>
                <div className={"central_container"}>
                    <img className={"agent_vector"} alt={""} src={agent}/>
                    <img className={"login_logo"} alt={""} src={sky_logo_login}/>
                    <span className={"login_area"}>
                            <div className={"form_header"}>Login</div>
                            <div className={"form_content"}>
                                <form onSubmit={form.onSubmit(() => handleClick())}>
                                    <TextInput
                                        required
                                        mt="md"
                                        label="Email Address"
                                        placeholder="Email Address"
                                        {...form.getInputProps('email')}/>

                                    <PasswordInput
                                        required
                                        mt="md"
                                        label="Password"
                                        placeholder="Password"
                                        {...form.getInputProps('password')} />

                                    <Group
                                        position="right"
                                        mt="md"
                                    >
                                            <Button
                                                size="xs"
                                                type="submit"
                                            >
                                                Login
                                            </Button>
                                    </Group>

                                    <Group
                                        position="right"
                                    >
                                    <a href={"/"} style={{fontSize: 14}}>
                                        Forgot password?
                                    </a>
                                    </Group>

                            </form>
                            </div>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default Login;
