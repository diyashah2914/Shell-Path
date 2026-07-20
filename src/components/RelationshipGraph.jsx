import { Target } from "lucide-react";
import ForceGraph2D from "react-force-graph-2d";

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
    return (
        <ForceGraph2D
            graphData={{nodes, links}}
            width={600}
            height={400}
            nodeLabel={"id"}
            nodeColor={() => "#00C554"}
            linkColor={() => "#30363D"}
            nodeRelSize={6}
        />
    )
}


export default RelationshipGraph