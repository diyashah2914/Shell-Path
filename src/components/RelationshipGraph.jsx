import { Target } from "lucide-react";
import { use } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { useNavigate } from "react-router-dom";

const nodes = [
    {id: "nmap"},
    {id : "netstat"},
    {id : "ping"},
    {id : "ss"},
    {id : "traceroute"}
]

const links = [
    {source: "nmap", target:"netstat"},
    {source: "nmap", target:"ping"},
    {source: "nmap", target:"ss"},
    {source: "nmap", target:"traceroute"}
]

const RelationshipGraph = () => {
    const navigate = useNavigate()

    return (
        <ForceGraph2D
            graphData={{nodes, links}}
            width={600}
            height={400}
            nodeLabel={"id"}
            nodeColor={() => "#00C554"}
            linkColor={() => "#30363D"}
            nodeRelSize={6}
            onNodeClick={(node) => navigate(`/command/${node.id}`)}
            nodeCanvasObject={(node, ctx, globalScale) => {

                ctx.beginPath()
                ctx.arc(node.x, node.y, 5, 0, 2*Math.PI)
                ctx.fillStyle = "#00C554"
                ctx.fill()

                const label = node.id
                const fontSize = 10 / globalScale
                ctx.font = `${fontSize}px Courier New`
                ctx.fillStyle = "#91ecba"
                ctx.textAlign = "center"
                ctx.fillText(label, node.x, node.y + 10)
            }}
        />
    )
}


export default RelationshipGraph