import { Image } from "@chakra-ui/react";
import imagen from "./../../assets/imagen.gif";

const ImagenPrincipal = (props) => {
    return ( 
        <Image {...props} src={imagen} alt="programador" /> 
    )
}

export default ImagenPrincipal;