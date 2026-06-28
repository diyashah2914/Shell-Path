import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import DNSAnimation from '../components/visuals/DNSAnimation'

const Command = () => {
    const routeParams = useParams()
    const [data, setdata] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [openSteps, setOpenSteps] = useState([]);

    const handleToggle = (index) => {
        setOpenSteps((prev) => {
            //ensure index is a valid number
            if (typeof index !== "number" || index < 0) return prev;

            //if index already exists, remove it
            if (prev.includes(index)) {
                return prev.filter((i) => i !== index);
            }
            //otherwise add it
            return [...prev, index];
        })
    }
    

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
                    <motion.div initial={{opacity:0}} transition={{delay: 1, duration: 1}} animate={{opacity: 1}}><hr  className="border-[#30363D] my-6"></hr></motion.div>
                    {data.steps.map((steps, index) => 
                    <motion.div initial={{opacity:0}} transition={{delay: 1, duration: 1}} animate={{opacity: 1}} className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4" key={index}><br></br>
                        <div className="text-[#00C554] font-bold">Step {index+1}</div> <br></br>
                     {steps.explanation}
                     <br></br>
                     <br></br>
                     <button onClick={() => handleToggle(index)}>
                            {openSteps.includes(index) ? "▼ Hide Visual" : "▶ Show Visual"}
                        </button>
                        {openSteps.includes(index) && (
                            <div style = {{padding : "5px", background : "#1F2937", }}>
                                <DNSAnimation />
                            </div>
                        )}</motion.div>)}
                    
                    <motion.div initial={{opacity:0}} transition={{delay: 1.5, duration: 1.5}} animate={{opacity: 1}}><hr className="border-[#30363D] my-6"></hr></motion.div>

                    <div className="text-[#00C554] font-bold">Flags </div>
                    <br></br>
                    {data.flags.map((flags, meaning) =>
                    <motion.div  initial={{opacity:0}} transition={{ delay: 1.5, duration: 1.5}} animate={{opacity: 1}} className="bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4" key={meaning}>
                    
                        <div className="flex gap-4 items-start"><div className="text-[#58A6FF] whitespace-nowrap">{flags.flag}</div>  
                        {flags.meaning}</div>  
                    </motion.div>)}
                    <motion.div initial={{opacity:0}} transition={{delay: 2, duration: 2}} animate={{opacity: 1}}><hr  className="border-[#30363D] my-4"></hr></motion.div>
                    <br></br>
                    <motion.div initial={{opacity:0}} transition={{delay: 2, duration: 2}} animate={{opacity: 1}} className="border-[#F0C674] bg-[#161B22] border border-[#30363D] rounded-lg p-4 mb-4">
                    <div className="text-[#EDC001] text-1xl">Challenge</div>
                    {data.challenge.question}</motion.div>
                </div>
            )}

        </div>
    )
}

export default Command