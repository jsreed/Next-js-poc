import Leaf from "../lib/model/leaf";
import {Box} from "@chakra-ui/react";

type LeafProps = {
    editable: boolean
    leaf: Leaf
}

const Leaf = ({editable, leaf}: LeafProps) => {
    return (
        <Box>
            {editable ? 'editing' : ''} {leaf.id}
        </Box>
    )
}

export default Leaf