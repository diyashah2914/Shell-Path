import { useNavigate } from "react-router-dom"
import { useState } from "react";
import RelationshipGraph from "../components/RelationshipGraph";
// import { input, text } from "framer-motion/client";
// import { addStyleValue } from "framer-motion";

function Home() {
  let navigate = useNavigate();
  const [input, setInput] = useState("")
  return (
    <div className="min-h-screen bg-[#0D1117] flex flex-col items-center justify-center px-4">
      
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-[#8B949E] text-sm font-mono mb-2">// linux command explorer</p>
        <h1 className="text-[#00FF88] text-6xl font-bold font-mono">Shell Path</h1>
        <p className="text-[#8B949E] mt-3 text-lg">Because man pages are boring.</p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center bg-[#161B22] border border-[#30363D] rounded-lg px-4 py-3 gap-3 focus-within:border-[#00FF88] transition-colors">
          <span className="text-[#00FF88] font-mono text-lg">$</span>
          <input
            type="text"
            onChange = {(e) => setInput(e.target.value)} 
            value={input}
            // input = {input}
            onKeyDown={(e) => e.key==='Enter' && navigate(`/command/${input}`)}
            placeholder="search a command... e.g. nmap, ls, grep"
            className="bg-transparent flex-1 outline-none text-[#C9D1D9] font-mono placeholder-[#8B949E]"
          />
        </div>
        <p className="text-[#8B949E] text-xs font-mono mt-2 ml-1">press enter to explore</p>
      </div>

      {/* Quick Commands */}
      <div className="mt-12 flex flex-wrap gap-3 justify-center">
        {["nmap", "grep", "chmod", "netstat", "ps", "find", "curl", "ssh"].map(cmd => (
          <button
            key={cmd}
            onClick={() => navigate(`/command/${cmd}`)}
            className="bg-[#161B22] border border-[#30363D] text-[#8B949E] font-mono text-sm px-4 py-2 rounded hover:border-[#00FF88] hover:text-[#00FF88] transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
        <RelationshipGraph/>
    </div>
  )
}

export default Home