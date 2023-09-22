import { Flex, Link } from "@chakra-ui/react";
import SocialMedia from "../ui/SocialMedia.jsx";
import { Link as RouterLink } from "react-router-dom"
import Logo from "../ui/Logo.jsx";

export default function Footer() {
    return (
      <Flex as="footer" boxShadow="inner"
        py="2rem"
        justify="center"
        align="center"
        bg="#FAF1E4"
      > 
        <Logo />
        <Flex
          direction="column" align="center" justify="center" h="full" 
          w={{ base:"90%", lg:"80%", xl:"1040px" }}
          >
          <SocialMedia direction="row"/>
        </Flex>
        
        <Link 
          to="/"
          color= "#9e9fa5"
          fontWeight="600" mb="1rem" 
          _hover={{ textDecoration: "none", color: "#4E4FEB" }}
          as={RouterLink}
          >
            © {new Date().getFullYear()} - Julian Lobon Aguilar
            Todos los derechos reservados.
        </Link>
      </Flex>
    );
  }