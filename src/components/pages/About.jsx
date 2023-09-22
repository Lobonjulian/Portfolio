import { Flex, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Foto from './../ui/Foto';
import Skills from '../secciones/Skills';
import Introducion from '../secciones/Introducion'
import RandomFacts from '../secciones/RandomFacts'
import Footer from '../secciones/Footer'
import skills from '../../assets/skills/SkillsData';

const About = () => {

    // const [clipboardValue, setClipboardValue] = useState('julitolos6@gmail.com');
    // const { hasCopied, onCopy } = useClipboard(clipboardValue);
    // const toast = useToast();
    // const handleCopyAndToast = () => {
    //     onCopy();
    //     toast({
    //         title: 'Email Copied',
    //         status: 'success',
    //         duration: 3000,
    //         isClosable: true,
    //         position: 'bottom-left',
    //     });
    // }

    useEffect(() => {
        document.title = "Julian Lobon | Acerca de Mi";
    }, [])
    
    return (
        <>
            <Flex mb="4rem" direction="row" w="100%" justify="center" as="main">
                <Flex className='container' w={{ base: "90%", lg: "80%", xl: "1040px" }} 
                    direction="column" align="center" justify="center">
                    <Heading as="h1" mt="2rem" fontSize={{base : '4xl'}} fontWeight="700">
                        About{" "}
                        <Text color="#068FFF" as="span">
                            Me
                        </Text>
                    </Heading>
                    
                    <Foto mt="1.5rem" />
                    <Introducion />
                    <Skills skills={skills} mt="4rem"/>
                    <RandomFacts />
                </Flex>
            </Flex> 
            <Footer/>  
        </>
    );
}

export default About;
