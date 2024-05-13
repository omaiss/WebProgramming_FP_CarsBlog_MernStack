import { Box, Button, TextField, Typography, styled } from "@mui/material";
import autoblog from '../../images/autoblog_rm.png';

const Component = styled(Box)`
    width:600px;
    margin:auto;
    margin-top:10%;
    color:black;
    box-shadow: 5px 2px 5px 2px whitesmoke;
    padding: 25px;
`
const Image = styled('img')({
    width: '600px',
    height: 'inherit',
    display: 'block',
    margin: 'auto', 
    "border-radius":'5px',
    border:'1px solid transparent',
    animation: "policeLights 2s infinite"
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

const Login = ()=>{
    return (
        <Component>
            <Image src={autoblog} alt='login'/> 
            <Wrapper>
                <TextField variant="standard" placeholder="Username"/>
                <TextField type='password' variant="standard" placeholder="Password"/>
                <Button style={{"background-color":"red", color:"black"}}  variant='contained'>Login</Button>
                <Typography>OR</Typography>
                <Button style={{color:"red"}}>Create Account</Button>
            </Wrapper>
        </Component>
    )
}

export default Login;