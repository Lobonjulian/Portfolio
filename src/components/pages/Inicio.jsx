import { Flex } from '@chakra-ui/react';
import Footer from '../secciones/Footer';
import { useEffect } from 'react';
import Hero from '../secciones/Hero';

const Inicio = () => {
        useEffect(() => {
            document.title = "Julian Lobon | Developer";
        })
    return (
        <>
            <Flex w="100%" h="80vh" justify="center" as="main">
                <Hero/>
            </Flex>

            <Footer/>
        </>
    );
}

export default Inicio;