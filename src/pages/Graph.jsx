import RelationshipGraph from "../components/RelationshipGraph";


const Graph = () => {
    return (
        <div className="min-h-screen bg-[#0D1117] p-8 mx-auto">
            <h1 className="text-[#00C554] font-mono text-4x1 font-bold mb-8">// command graph </h1>
            <RelationshipGraph/>
        </div>
    )
}

export default Graph