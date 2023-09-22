import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ImagenPrincipal from "../ui/ImagenPrincipal";
import ButtonHero from "../ui/ButtonHero";

const Hero = () => {
    return (
        <Flex as="section" 
            h="full"
            w={{base:"90%", lg:"80%", xl:"1040px"}}
            align="center"
            justify={{ base: "center", lg: "space-between"}}
            direction={{ base: "column", lg: "row" }}
            textAlign={{ base: "center", lg: "left" }}
        >
        
            <Box order={{ base: "2", lg: "1" }}>
                <Heading
                    letterSpacing="1px"
                    fontSize={{ base: "2xl" }}
                    fontWeight="400"
                    as="h2"
                    mb={{ base: "3", sm: "4", lg: "3" }}
                    >
                    Hi There !
                </Heading>

                <Heading
                    fontWeight="600"
                    letterSpacing="1px"
                    fontSize={{ base: "1.7rem", sm: "2rem", xl: "2.5rem" }}
                    as="h2"
                    lineHeight={{ base: "1.4", sm: "1.5", xl: "1.3" }}
                >
                    I am{" "}
                    <Text color="#068FFF" as="span">
                        Julian Lobon Aguilar
                    </Text>
                    <br />
                    An Aspiring Web Developer
                    <br />
                    With knowledge of front-end and back-end
                </Heading>

                <ButtonHero 
                    mb={{ base: "0.5rem", sm: "1.5rem", lg: "0" }}
                    mt={{ base: "4rem", xl: "5", lg: "4" }}
                />
            </Box>

            <ImagenPrincipal
                h={{ base: "13rem", md: "25rem", lg: "25rem", xl: "30rem" }}
                w={{ base: "80vw", md: "25rem", lg: "25rem", xl: "30rem" }}
                mb={{ base: "4rem", md: "3rem", lg: "0" }}
                order={{ base: "1", lg: "2" }}
                borderRadius="2rem"

            />
            
        </Flex>
    );
}

export default Hero;