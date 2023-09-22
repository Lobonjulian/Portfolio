import { IconButton } from "@chakra-ui/react";
import IconosMenu from "./IconosMenu";

const hoverEstilo = { color: "red.300",}

const ButtonMenu = (props) => {

    const { drawerRef, ...rest } = props;
    return (
        <IconButton
            _hover={hoverEstilo} display={{ base: "block", lg: "none" }}
            bg="white" 
            icon={<IconosMenu />}
            {...rest}
            ref={drawerRef}
        />
    );
}

export default ButtonMenu;