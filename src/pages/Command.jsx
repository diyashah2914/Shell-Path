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
        <div className="min-h-screen bg-[#0D1117] p-8 mx-auto">
        <h6 className=" text-sm text-1xl text-[#808080] font-mono">
            //{routeParams.name}
        </h6>
        <h1 className=" text-5xl text-[#00C554] font-mono font-bold"> 
            {routeParams.name}</h1>
            <br></br>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
    
                    <h2 className="text-lg">Summary</h2>

                    <p className="text-2xl text-[#FAF9F6] ">{data.summary}</p>
                    <hr  className="border-[#30363D] my-6"></hr>
                    {data.steps.map((steps, index) => 
                    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4" key={index}><br></br>
                        <div className="text-[#00C554] font-bold">Step {index+1}</div> <br></br>
                     {steps.explanation}</div>)}
                    
                    <hr  className="border-[#30363D] my-6"></hr>

                    {data.flags.map((flags, meaning) =>
                    <div className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4" key={meaning}>
                        <br></br>
                        <div className="text-[#00C554] font-bold">Flags </div>
                        <br></br>
                        <div className="flex gap-4"><div className="text-[#58A6FF]">{flags.flag}</div>  
                        {flags.meaning}</div>
                    </div>)}
                    <hr  className="border-[#30363D] my-4"></hr>
                    <br></br>
                    <div className="border-[#F0C674] bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4">
                    <div className="text-[#EDC001] text-1xl">Challenge</div>
                    {data.challenge}</div>
                </div>
            )}

        </div>
    )
}

export default Command