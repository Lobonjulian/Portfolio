import { Box, Heading, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import CustomHero from '../ui/CustomHero';
import { PiCaretDoubleRightThin } from 'react-icons/pi';

const RandomFacts = (props) => {
    return (
        <Box {...props} px={2} as="section" w="full" textAlign="left">
            <Heading mb="5px" fontSize="2rem" fontWeight="700" as="h2">
                Datos de Interés 
            </Heading>

            <CustomHero mb="2rem" w="100%" />
            
            <List fontSize="1.2rem" mt="2rem" textAlign="left" spacing={3}>
                <ListItem>
                    <ListIcon color="red.300" mb="1.5rem" as={PiCaretDoubleRightThin} />
                        <Text  color="blue.300" as="span">
                            Football player
                        </Text> 
                        <br/>
                        He has been part of a neighborhood soccer league with weekly practices for more than six years. 
                        I consider myself a follower of this sport that I consider of great value in our culture.
                </ListItem>

                <ListItem>
                    <ListIcon color="red.300" mb="1.5rem" as={PiCaretDoubleRightThin} />
                        <Text  color="blue.300" as="span">
                            History buff 
                        </Text>
                        <br/>
                        Years of non-academic or professional interest in history have led me to form my own 
                        library on the subject, with more than one hundred volumes read on various topics. 
                        With a special predilection for paranormal themes
                </ListItem>

                <ListItem>
                    <ListIcon color="red.300" mb="1.5rem" as={PiCaretDoubleRightThin} />
                        <Text color="blue.300" as="span" >
                            Frequent traveler.
                        </Text>
                        <br/>
                            I have visited more than 20 national destinations in the last 10 years of life, 
                            among the departments of my country. This has given me an opening of vital perspectives that 
                            I consider indispensable.
                </ListItem>

                <ListItem>
                    <ListIcon color="red.300" mb="1.5rem" as={PiCaretDoubleRightThin} />
                        <Text color="blue.300" as="span">
                            Bookish
                        </Text>
                        <br/>
                        I read an average of six or seven books a year. 
                        I am a regular at reading clubs.
                </ListItem>
            </List> 
        </Box>
    );
}

export default RandomFacts;