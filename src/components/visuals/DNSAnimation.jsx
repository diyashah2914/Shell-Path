import { motion } from "framer-motion"

const DNSAnimation = () => {
    return(
        <svg width = "800" height = "200" style = {{background: "#0D1117"}}>
        
        //PC look-alike
        //Monitor Screen
        <rect x="50" y="20" width="120" height= "80" rx = "5" ry = "5" fill = "#333" stroke = "#000" stroke-width = "2"/>


        // Screen display area
        <rect x="55" y="25" width="110" height="70" fill = "#888c" stroke = "#000" stroke-width = "1"/>

        // Monitor Stand 
        <rect x= "100" y="100" width="20" height="15" fill="#555"></rect>
        <rect x="85" y="115" width="50" height="5" fill="#555"></rect>

        <text x="110" y="155" textAnchor="middle" fill = "#58A6FF" fontFamily="Courier New" fontSize={16}> PC </text>


        {/* DNS Server cylinder */}
        <ellipse cx="380" cy="30" rx="35" ry="10" fill="#1a1a2e" stroke="#58A6FF" strokeWidth="0.5"/>
        <rect x="345" y="30" width="70" height="80" fill="#1a1a2e" stroke="#58A6FF" strokeWidth="0.5"/>
        <line x1="345" y1="50" x2="415" y2="50" stroke="#58A6FF" strokeWidth="0.5" opacity="0.5"/>
        <line x1="345" y1="70" x2="415" y2="70" stroke="#58A6FF" strokeWidth="0.5" opacity="0.5"/>
        <line x1="345" y1="90" x2="415" y2="90" stroke="#58A6FF" strokeWidth="0.5" opacity="0.5"/>
        <ellipse cx="380" cy="110" rx="35" ry="10" fill="#1a1a2e" stroke="#58A6FF" strokeWidth="0.5"/>
        <text x="380" y="145" textAnchor="middle" fill="#58A6FF" fontFamily="Courier New" fontSize="14">DNS SERVER</text>

        {/* line from PC to DNS Server */}
        <motion.line
            x1={175}
            y1={55}
            x2={338}
            y2={45}
            stroke="#00C554"
            strokeWidth={1}
            strokeDasharray="6 3"
            opacity={0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, ease: "linear" }}
        />
        <motion.text
            x="335"
            y="48"
            fill="#00C554"
            fontFamily="Courier New"
            fontSize="14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        >›</motion.text>
        <motion.text
            x="250"
            y="40"
            textAnchor="middle"
            fill="#00C554"
            fontFamily="Courier New"
            fontSize="12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
        >google.com</motion.text>

        {/* line from DNS server to PC */}
        <motion.line
            x1={338}
            y1={75}
            x2={175}
            y2={85}
            stroke="#FFD93D"
            strokeWidth={1}
            strokeDasharray="6 3"
            opacity={0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.85, ease: "linear" }}
        />
        <motion.text
            x="250"
            y="100"
            textAnchor="middle"
            fill="#FFD93D"
            fontFamily="Courier New"
            fontSize="12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.95, ease: "linear" }}
        >142.250.68.206</motion.text>
        <motion.text
            x="172"
            y="88"
            fill="#FFD93D"
            fontFamily="Courier New"
            fontSize={14}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.95, ease: "linear" }}
        >‹</motion.text>

        



        </svg>
    )
}

export default DNSAnimation