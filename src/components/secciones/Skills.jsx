import { Box, Heading } from '@chakra-ui/react';
import CategoriaSkill from './CategoriaSkill';
import CustomHero from './../ui/CustomHero';

const Skills = (props) => {
    const { skills, ...rest } = props;
    const skillsArray = [];

    for (let categoria in skills){
        skillsArray.push(
            <CategoriaSkill
                key={categoria}
                categoria={skills[categoria]}
                categoriaNombre={categoria}
            />
        );
    }

    return (
        <Box {...rest} px="2rem" as="section" w="full" textAlign={'left'}>
            <Heading mb="5px" fontSize="2rem" fontWeight="700" as="h2">
                My Skills
            </Heading>

            <CustomHero mb="2rem" w="100%" />
            
            {skillsArray}
        </Box>
    );
}

export default Skills;