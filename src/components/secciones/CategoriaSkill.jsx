import { Box, HStack, Heading, Image, Text, Tooltip } from '@chakra-ui/react';

const CategoriaSkill = (props) => {
    const { categoriaNombre, categoria } = props;
    return (
        <Box mb={{ base: "2rem", md:"3rem", lg:"2.5rem" }}>
            <Heading mb="0.8rem" fontSize="1.2rem" as="h3">
            {categoriaNombre}
            </Heading>

            <HStack spacing="0" shouldWrapChildren wrap="wrap">
            
            {categoria.map((skill) => {
                return(
                    <Tooltip label={skill.name}
                    bg="gray.700" color="white" 
                    key={skill.name}
                    placement="top"
                    aria-label='A tooltip'>
                        <Box 
                            mb={{ base: "1rem", md: "0"}}
                            mr={{ base: "2rem"}}
                            textAlign="center"
                        >
                            <Image mx="auto" src={skill.img} boxSize="50px"/>
                            <Text
                                display={{ base: "block", md: "none"}}
                                fontSize="0.8rem"
                                fontWeight="600"
                                color={"gray.400"}
                                mt="3px"
                            >
                                {skill.name}
                            </Text>
                        </Box>
                    </Tooltip>
                )
            })}
            </HStack>
        </Box>
    );
}

export default CategoriaSkill;