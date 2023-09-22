import { Image } from "@chakra-ui/react";
import foto from "./../../assets/foto.jpg";

const Foto = (props) => {
    return <Image {...props} boxSize="200px" borderRadius="full" src={foto} alt="Jlobon"/>
}

export default Foto;