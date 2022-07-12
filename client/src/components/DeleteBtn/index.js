import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteBtn = () => {
    return(
        <>
            <Fab size="small" color="primary" aria-label="add">
                <DeleteIcon/>
            </Fab>
        </>
    )
}

export default DeleteBtn;