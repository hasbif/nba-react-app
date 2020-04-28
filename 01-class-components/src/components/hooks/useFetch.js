import { useState, useEffect } from 'react'

export default (url) => {
    const [data, setData] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "21eedf4d07msha5d52bf1a701aa8p19733bjsn8fa2554194df"
            }
        })
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false))
    }, [url])

    return [data, err, loading]
}