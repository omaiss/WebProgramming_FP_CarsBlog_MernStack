import { Box, Button, TextField, Typography, styled } from "@mui/material";
import autoblog from '../images/autoblog_rm.png';
import sideimg from '../images/car.jpg';
import { useState } from "react";
import { API } from '../services/api';

const Component = styled(Box)`
    width:600px;
    margin:auto;
    margin-top:20px;
    color:black;
    padding: 25px;
`
const Image = styled('img')({
    width: '300px',
    height: 'inherit',
    display: 'block',
    margin: 'auto',
});

const Wrapper = styled(Box)`
    padding: 50px 50px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & > button, & > p{
        margin-top: 30px;
    }
`

const PageBox = styled(Box)`
    display:flex;
`

const Sideimage = styled("img")({
    width: "79%",
    height: "828px",
});

const Errortext = styled(Typography)`
    margin: 0 auto;
    font-size: 12px;
    color: red;
    margin-top: 10px;
    font-weight:600px;
`

const UserData = {
    email: '',
    username: '',
    password: '',
}

const Login = () => {
    const [acc, toggleAcc] = useState('login');
    const [user_data, setuserdata] = useState();
    const [error, seterror] = useState('');
    const [success, setsuccess] = useState('');

    const handlebuttonclick = () => {
        if (acc === 'login')
            toggleAcc('signup');
        else
            toggleAcc('login');
    }

    const handleChange = (e) => {
        setuserdata({ ...user_data, [e.target.name]: e.target.value });
        console.log(user_data);
    }

    const signupuser = async () => {
        try {
            let response = await API.userSignup(user_data);
            if (response.isSuccess) {
                seterror('');
                setuserdata(UserData);
                toggleAcc('login');
                setsuccess('SignUp Success. Login Now');
            }             
        } catch (error) {
            if (user_data)
            seterror('User email already registered.');
        }
    }
    
    const loginChange = (e) => {   
        console.log(e.target.name, e.target.value);
    }

    const handlelogin = (e) => {
        seterror('Implement it bitch');
    }

    return (
        <PageBox>
            <Component>
                <Image src={autoblog} alt='login' />
                {acc === 'login' ?
                    <Wrapper>
                        <TextField name='username' variant="standard" placeholder="Username" onChange={(e) => loginChange(e)} />
                        <TextField name='password' type='password' variant="standard" placeholder="Password" onChange={(e) => loginChange(e)} />
                        <Button style={{ "backgroundColor": "red", color: "white" }} variant='contained' onClick={handlelogin}>Login</Button>
                        {error && <Errortext margin={"0 auto"}> {error}</Errortext>}
                        {success && <Errortext margin={"0 auto"}> {success} </Errortext>}
                        <Typography margin={"0 auto"}>OR</Typography>
                        <Button style={{ color: "black", backgroundColor: "#e5e5e5" }} onClick={handlebuttonclick}>Create Account</Button>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField name='username' variant="standard" placeholder="Username" onChange={(e) => handleChange(e)} />
                        <TextField name='password' type='password' variant="standard" placeholder="Password" onChange={(e) => handleChange(e)} />
                        <TextField name='email' variant="standard" placeholder="Email" type='email' onChange={(e) => handleChange(e)} />
                        {error && <Errortext> {error}</Errortext>}
                        <Button style={{ "backgroundColor": "red", color: "white" }} variant='contained' onClick={signupuser}>Sign Up</Button>
                        <Typography margin={"0 auto"}>OR</Typography>
                        <Button style={{ color: "black", backgroundColor: "#e5e5e5" }} onClick={handlebuttonclick}>Login to Account</Button>
                    </Wrapper>
                }
            </Component>
            <Sideimage src={sideimg} alt='sideimg' />
        </PageBox>
    )
}

export default Login;