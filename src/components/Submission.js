import {useState} from "react";
import Post from "./Post";
import Loading from "./Loading";
import GetSubmission from "../hooks/GetSubmission";


const Submission = ({subreddit, limit}) => {

    const { isLoading, error, submission } = GetSubmission(subreddit, limit)
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

export default Submission