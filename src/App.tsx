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

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
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
                <Box gridArea='main'>
                    <h1>Menu Item One</h1>
                </Box>
            </Box>
        </React.Fragment>

    );
}

export default App;
