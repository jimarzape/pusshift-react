import { TextField, Button, Container, ButtonGroup } from '@mui/material';
import Submission from "../components/Submission"
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import { useState, useEffect } from 'react';

const Home = () => {
    const [topic, setTopic] = useState('webdev') 
    const [subs, setSub] = useState('webdev')
    const onChangeHandler = event => {
        setTopic(event.target.value);
    };

    const btnClick = () => {
        setSub(topic)
    }
   
    return (
        <Container className='mt-2'>
            <div className='mb-2'>
            <ButtonGroup variant="contained" aria-label=" button group">
                <TextField  type="text" variant="outlined" name="topic" value={topic} onChange={ onChangeHandler }/> 
                <Button variant="outlined" aria-label='outlined primary' startIcon={<DownloadForOfflineOutlinedIcon/>} onClick={ btnClick }>fetch</Button>
            </ButtonGroup>
            </div>
            <Submission subreddit={subs} limit={15} />
        </Container>
    )
}

export default Home