import { Box } from '@chakra-ui/react';
import logo from './../../assets/logo.svg';
import { Link as RouterLink } from 'react-router-dom';

const Logo = (props) => {
    return (
        <Box {...props} h="40px" w="100px" as="div">
            <RouterLink to="/">
                <img src={logo} alt="logo" />
            </RouterLink>
        </Box>
    );
}

export default Logo;
