import { Box, Button, ButtonGroup, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";

const MostrarProyecto = (props) => {
    const { project } = props;
    return (
        <Flex
            as="section"
            mb={{ base: "3rem", lg: "5rem" }}
            w={{ sm: "80", md: "80%", lg: "100%", xl: "95%" }} 
            justify="space-between"
            align="flex-start"
            direction={{ base: "column", lg: "row" }}
        >
            <Image
                mr={{ base: "0", lg: "2rem"}}
                mb={{ base: "1rem", md: "1.5rem", lg: "0" }}
                w={{ base: "full", lg: "450px" }}
                src={project.img}
                alt=""
            />
            
            <Box mt={{sm: "0", lg: "2rem"}} w="full" h="full" textAlign="left" >
                <Heading mb="1rem" as="h2" fontWeight="700" fontSize="3xl" >
                    {project.title}
                </Heading>

                <Text mb="0.5rem">
                    <Text fontWeight={"700"} as="span">
                    Built with:
                    </Text>
                    {" "} {project.builtWith}
                </Text>

                <Text>{project.description}</Text>

                <ButtonGroup mt="1rem" variant="outline" spacing="6" >
                    <Button 
                        href={project.live} 
                        isExternal
                        as={Link}
                        _hover={{
                            bg: "red.300",
                            color: "white",
                            textDecoration: "none",
                        }}
                        _active={{ bg: "red.300", color: "blue" }}
                        borderWidth="2px"
                        color="red.300"
                        borderColor= "red.300"
                        rightIcon={<FaLaptopCode />}
                        borderRadius="full"
                        >
                        Live
                    </Button>

                    <Button 
                        href={project.code} 
                        isExternal
                        as={Link}
                        _hover={{
                            bg: "blue.300",
                            color: "white",
                            textDecoration: "none",
                        }}
                        _active={{ bg: "blue.300", color: "white" }}
                        color={"blue.300"}
                        borderColor="blue.300"
                        size={"md"}
                        borderWidth={"2px"}
                        rightIcon={<FaGithub />}
                        borderRadius="full"
                    >
                        Code
                    </Button>

                </ButtonGroup>
            </Box>
        </Flex>
    );
}

export default MostrarProyecto;