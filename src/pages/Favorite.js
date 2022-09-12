import { TextField, Button, Container, ButtonGroup } from '@mui/material';
import FavTopic from '../components/FavTopic';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const Favorite = () => {
    const [topic, setTopic] = useState('webdev') 
    const [subs, setSub] = useState('webdev')
    const onChangeHandler = event => {
        setTopic(event.target.value);
    };

    const btnClick = () => {
        setSub(topic)
    }
   
    return (
        <>
            <NavBar/>
            <Container className='mt-5'>
                <FavTopic limit={15} />
            </Container>
        </>
    )
}

export default Favorite