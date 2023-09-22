import { Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const hoverEstilo = { color: "#068FFF" };

const NavBarLink = (props) => {
    
    const { inicio, onClick, ...rest } = props;
    return (
        <Stack {...rest}>
        {inicio ? (
            <Link _hover={hoverEstilo} onClick={onClick} as={RouterLink} to="/">
            </Link>
        ): null}
            <Link _hover={hoverEstilo}  marginRight="1rem" onClick={onClick} as={RouterLink} to="/about">
                Acerca de Mi 
            </Link>

            <Link _hover={hoverEstilo} mr="1rem" onClick={onClick} as={RouterLink} to="/proyectos">
                Proyectos
            </Link>
        
            <Link _hover={hoverEstilo} onClick={onClick} isExternal 
                    href= "mailto:Julitolos6@gmail.com">
                    Cv
            </Link>
        </Stack>
    );
}

export default NavBarLink;