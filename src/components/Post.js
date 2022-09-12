import {useState} from "react";
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { SetFavorite } from "../api/favorite";

const Post = (data) => {
    const [favorite, setFavorite] = useState(data.data.favorite)
    const favClick = () => {
        setFavorite(current => !current)
        const body = {
            id : data.data.reddit_id,
            favorite : !favorite
        }
        SetFavorite(body)
        .then(res => {

        })
        .catch(err => {
            console.log("err", err)
        })

    }
    return (
        <>
            <Card className="mb-2">
                <CardContent>
                    <Typography variant="h5" component="div">{data.data.title}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton aria-label="set favorite" onClick={() => favClick()}>
                        {favorite ? <StarOutlinedIcon/> : <StarBorderOutlinedIcon/>}
                    </IconButton>
                    <Typography color="text.secondary" title="favorite"></Typography>
                    <Typography color="text.secondary"><ArrowUpwardOutlinedIcon/> {data.data.ups}</Typography>
                    <Typography color="text.secondary"><ArrowDownwardOutlinedIcon/> {data.data.downs}</Typography>
                    <Typography color="text.secondary"><Link href={data.data.link} target="_blank"><LanguageIcon/></Link></Typography>
                </CardActions>
            </Card>
        </>
    )
}

export default Post