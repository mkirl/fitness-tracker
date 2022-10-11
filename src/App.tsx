import React, {useState} from 'react';
import Box from '@mui/material/Box';


const headerListStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
}

const headerItemStyle = {
    display: 'block',
    padding: '0px 50px 0px 10px',
}

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginMenu, setShowLoginMenu] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
        setShowLoginMenu(!showLoginMenu);
    }
    return (
        //render header
        <React.Fragment>
            <Box display='grid'
                // gridTemplateColumns='250px 250px'
                 gridTemplateAreas="'header' 'main' 'footer'"
            >
                <Box
                    gridArea='header'
                    border='1px solid black'>
                    <Box display='flex' flexDirection='row'>
                        <ul style={headerListStyle}>
                            <li style={headerItemStyle}><h1>Fitness Tracker</h1></li>
                            <li style={headerItemStyle}><h2>Header Item 1</h2></li>
                            <li style={headerItemStyle}><h2>Header Item 2</h2></li>
                            <li style={headerItemStyle}><h2>Header Item 3</h2></li>
                            <li style={headerItemStyle} onClick={handleLogin}>
                                <button>{isLoggedIn ? 'Profile' : 'Login'}</button>
                            </li>
                        </ul>
                    </Box>
                </Box>
                {showLoginMenu && <Box gridArea='main'
                                       border='1px solid black'
                                       display='flex'
                                       margin='10rem 0 0 0'
                                       flexDirection='column'
                                       alignItems='center'
                    // height='100vh'
                >
                    <Box border='1px solid red'>
                        <h1>Login</h1>
                        <form>
                            <label>
                                Email:
                                <input type="text" name="email"/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Password:
                                <input type="text" name="password"/>
                            </label>
                        </form>
                        <Box border='1px solid black' margin='1rem 0 0 0'>
                            <button>Register</button>
                            <button>Forgot Password</button>
                        </Box>
                    </Box>
                </Box>}

                <Box gridArea='footer' border='1px solid black'>
                    <h1>Footer</h1>
                </Box>
            </Box>
        </React.Fragment>

    );
}

export default App;
