import { Button } from '@chakra-ui/react';
import { FaUserAstronaut } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

const ButtonHero = (props) => {
    return (
        <Button {...props}
            to="/about"
            as={RouterLink}
            bg="#068fff"
            color="white"
            size="lg"
            px="30px"
            fontWeight="500"
            borderRadius="full"
            letterSpacing="1px"
            rightIcon={<FaUserAstronaut size="1rem"/>}
        >
            Know More 
        </Button>

    );
}

export default ButtonHero;