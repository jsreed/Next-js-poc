
import {Box} from "@chakra-ui/react";
import {useState} from "react";

const Header = () => {
    const [editing, setEditing] = useState(false)
    return (
        <Box>
            {!editing ? (
                <Box>
                    <button onClick={
                        event => {
                            event.preventDefault();
                            setEditing(true);
                        }
                    }>Edit</button>
                </Box>
            )
            : (
                    <Box>
                        <button onClick={
                            event => {
                                event.preventDefault();
                                setEditing(false);
                            }
                        }>Save</button>
                    </Box>
            )}
        </Box>
    )
}

export default Header