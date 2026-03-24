import { useParams } from "react-router-dom";

const Command = () => {
    const routeParams = useParams()
    return(
    <div className = "min-h-screen bg-[#0D1117]">
        {routeParams.name}
    </div>)
}


export default Command