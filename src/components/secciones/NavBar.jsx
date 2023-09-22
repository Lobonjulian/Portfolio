import { Flex, Spacer } from "@chakra-ui/react";
import Logo from "../ui/Logo";
import NavBarLink from "../ui/NavBarLink";
import CustomDrawer from "../ui/CustomDrawer";

const NavBar = () => {
    
    return (
        <Flex zIndex="docked" position="sticky" top="0"
            py="3" boxShadow="base"
            justify="center" align="center" as="header" bg="#FAF1E4"
            >
            <Flex as="nav"
                align="center"
                direction="row" h="full"
                w={{ base: "90%", lg: "80%", xl: "1040px" }}
                justify={"flex-start"}
            >
                <Logo />
                <Spacer />
                <NavBarLink 
                    display={{ base: "none", lg: "block" }}
                    fontSize="2rem"
                    spacing="2rem"
                    direction="row"
                    inicio={false}
                />
                <CustomDrawer/>
            </Flex>
        </Flex>
    );
}

export default NavBar;