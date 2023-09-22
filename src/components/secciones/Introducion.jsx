import { Box, Button, Heading, Text, Tooltip } from "@chakra-ui/react";
import SocialMedia from "../ui/SocialMedia";

const Introducion = (props) => {
    const { onClick } = props;
    return (
        <Box as="section" px={2} mt="1.5rem" w="full" textAlign="left" >
            <Heading mb="2rem" fontSize="2xl" fontWeight="500" as="h2">
                Hi, I am Julian Lobon.
            </Heading>

            <Text mb={4} fontSize="1.2rem" >
                I am a self-taught developer, living in Colombia. 
                I enjoy transforming complex problems into simple and intuitive solutions. 
                I love exploring and learning new things. Currently, 
                most of my efforts are in JavaScript and Python.
            </Text>

            <Text mb={4} fontSize="1.2rem">
                Besides, I am passionate about technology.
                I like WWE and Soccer                
            </Text>

            <Text mb={4} fontSize="1.2rem">
                As someone with a strong interest in technology and a knack for problem-solving, 
                web development was an obvious path.            
            </Text>

            <Text fontSize="1.1rem" >
                Let's get in touch to work together {" "}
                <Tooltip 
                    bg="#068FFF"
                    color="#f8fafc"
                    label="Click to copy email address"
                    aria-label="A tooltip"
                    placement="top"
                >
                    <Button onClick={onClick} color="#068FFF" variant="link">
                        Julitolos6@gmail.com
                    </Button>
                </Tooltip>
            </Text>

            <SocialMedia ml="-9px" mt="2rem" direction="row"/>
        </Box>
    );
}

export default Introducion;
