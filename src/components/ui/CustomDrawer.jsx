import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import Logo from "./Logo";
import ButtonMenu  from "./ButtonMenu";
import NavBarLink from "./NavBarLink";
import SocialMedia from "./SocialMedia";

const CustomDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef()
    return (
        <>
            <ButtonMenu drawerRef={btnRef} onClick={onOpen}/>

            <Drawer 
                isOpen={isOpen} 
                placement="right" onClose={onClose} 
                finalFocusRef={btnRef}>
                    <DrawerOverlay>
                        <DrawerContent>
                            <DrawerCloseButton _hover={{color: "red.300"}}/>
                            <DrawerHeader p={8}>
                                <Logo onClick={onClose}/>
                            </DrawerHeader>

                            <DrawerBody px={8} pb={16}>
                                <NavBarLink
                                    justify="center"
                                    fontSize="1.25rem"
                                    spacing={4}
                                    onClick={onClose}
                                    direction="column"
                                    inicio={true}
                                    h="full"
                                />
                            </DrawerBody> 

                            <DrawerFooter justifyContent="flex-start" px={4} py={8}>
                                <SocialMedia direction="row"/>
                            </DrawerFooter>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            
        </>
    );
}

export default CustomDrawer;