import {useState} from "react";
import Post from "./Post";
import Loading from "./Loading";
import GetFav from "../hooks/GetFav";


const FavTopic = ({limit}) => {

    const { isLoading, error, submission } = GetFav(limit)
    return (
        <>
        {
            isLoading ? 
            <Loading />
            :
            submission.map((data, index) =>  {
                return (
                    <Post key={index} data={data} />
                )   
            })
        }
        </>
    )
}

export default FavTopic