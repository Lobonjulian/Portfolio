import { Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import MostrarProyecto from '../secciones/MostrarProyecto';
import Footer from '../secciones/Footer';
import { FaGithub } from 'react-icons/fa';
import { useEffect } from 'react'; 
import data from './../../assets/project/data';

const Proyectos = () => {
    useEffect(() => {
        document.title = "Projects Made by Julian Lobon"
        });

        return (
        <>
            <Flex as="main" direction="row" w="100%" justify="center" >
                <Flex className='container' direction="column" align="center" w={{base: "90%", lg: "80%", xl: "1040px"}}>
                    <Heading my="2rem" fontWeight="900" fontSize="2rem" as="h1">
                        My{" "}
                        <Text color="blue.300" as="span">
                            Projects
                        </Text>
                    </Heading>

                    {data.map((project, i) => {
                        return (
                            <MostrarProyecto key={`${project.title + i}`} project={project}/>
                        )
                    })}
                    <Button 
                        href="https://github.com/lobonjulian"
                        mb="2rem"
                        mt={{ base: "4rem", lg: "0" }}
                        size="lg"
                        isExternal
                        as={Link}
                        _hover={{color: "white",bg: "blue.300", textDecoration: "none",}}
                        _active={{ color: "white", bg: "blue.300" }}
                        borderWidth="2px"
                        color="blue.300"
                        bg="white"
                        borderColor="blue.300"
                        rightIcon={<FaGithub/>}
                        borderRadius="full"
                    > 
                        See All
                    </Button>
                </Flex>
            </Flex>  
            <Footer />
        </>
        )
}

export default Proyectos;
