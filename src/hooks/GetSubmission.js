import { useState, useEffect } from 'react'

export default function GetSubmission(subreddit, limit) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [submission, setSubmission] = useState([])
    const body =  {
        subreddit : subreddit,
        limit : limit
    }
    
    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetch(`${process.env.REACT_APP_API}/reddit`,{
            method : 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body : JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            setSubmission(data)
            setIsLoading(false);
        })
        .catch(err => {
            setError(false);
            setIsLoading(false);
            console.log("err", err)
        })
        
    }, [subreddit, limit])

    return { isLoading, error, submission }
}