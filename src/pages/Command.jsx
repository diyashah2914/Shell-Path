import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Command = () => {
    const routeParams = useParams()
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3001/api/explain`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ command: routeParams.name })
        }
        )
            .then(res => res.json())
            .then(response => {
                setdata(response)
                setLoading(false)
            })
    }, [routeParams.name])

    return (
        <div className="min-h-screen bg-[#0D1117]">
            {routeParams.name}  
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>Summary</h2>
                    <p>{data.summary}</p>
                    
                    {data.steps.map((steps, index) => 
                    <div key={index}><br></br>
                        Step {index+1} <br></br>
                     {steps.explanation}</div>)}

                    {data.flags.map((flags, meaning) =>
                    <div key={meaning}>
                        <br></br>
                        Flags <br></br>
                        {flags.flag} <br></br>
                        {flags.meaning}
                    </div>)}
                    <br></br>
                    {data.challenge}
                </div>
            )}

        </div>
    )
}

export default Command