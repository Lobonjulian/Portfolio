import { Icon, IconButton, Link, Stack } from "@chakra-ui/react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

const SocialMedia = (props) => {
    const estilo = {
        color: "#9e9fa5",
        hoverColor: "#4E4FEB",
    }

    return (
        <Stack {...props}>
            <IconButton 
                color={estilo.color}
                _hover={{ color: estilo.hoverColor }}
                href="mailto:Julitolos6@gmail.com"
                size="lg"
                variant="link"
                as={Link}
                icon={<Icon boxSize={10} as={FaEnvelope}/>}
            />

            <IconButton
                color={estilo.color}
                _hover={{ color:estilo.hoverColor}}
                href="https://github.com/lobonjulian"
                isExternal
                size="lg"
                variant="link"
                as={Link}
                icon={<Icon boxSize={10} as={FaGithub}/>}
            />

            <IconButton
                color={estilo.color}
                _hover={{ color: estilo.hoverColor }}
                href="https://www.linkedin.com/in/julian-aguilar-/"
                isExternal
                size="lg"
                variant="link"
                as={Link}
                icon={<Icon boxSize={10} as={FaLinkedin}/>}
            />            
        </Stack>
    );
}

export default SocialMedia;