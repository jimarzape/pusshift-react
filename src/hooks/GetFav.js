import { useState, useEffect } from 'react'

export default function GetFav(subreddit, limit) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const [submission, setSubmission] = useState([])
    useEffect(() => {
        setIsLoading(true);
        setError(false);
        fetch(`${process.env.REACT_APP_API}/reddit/favorite/list`)
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
        
    }, [limit])

    return { isLoading, error, submission }
}