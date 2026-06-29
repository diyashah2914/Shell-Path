import {motion} from "framer-motion"
import { useState } from "react"

const TCPAnimation = () => {
    const [returnDone, setReturnDone] = useState(false)

    return (
        <svg width={1200} height={300} style={{background : "#0D1117"}}>

            //PC lookalike
             //Monitor Screen
            <rect x="50" y="80" width="120" height= "80" rx = "5" ry = "5" fill = "#333" stroke = "#000" strokeWidth = "2"/>


            // Screen display area
            <rect x="55" y="85" width="110" height="70" fill = "#888c" stroke = "#000" strokeWidth = "1"/>

            // Monitor Stand 
            <rect x= "100" y="160" width="20" height="15" fill="#555"></rect>
            <rect x="85" y="175" width="50" height="5" fill="#555"></rect>

            <text x="110" y="215" textAnchor="middle" fill = "#58A6FF" fontFamily="Courier New" fontSize={16}> PC </text>



            //Target Server
            //The body

            <ellipse cx = "780" cy = "30" rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>
            <rect x="745" y="32" width={70} height={150} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></rect>
            <ellipse cx = "780" cy={180} rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>


            <line x1={745} y1={50} x2={815} y2={50} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={745} y1={70} x2={815} y2={70} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={745} y1={90} x2={815} y2={90} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={745} y1={110} x2={815} y2={110} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={745} y1={130} x2={815} y2={130} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={745} y1={150} x2={815} y2={150} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            

            //The text of Target Server 
            <text x = "780" y = "220" fill="#ff0000" fontFamily="Courier New" fontSize={14} textAnchor="middle"> Target Server </text>

            //The Servers
            <rect x="660" y="40" rx={5} ry={5} width={60} height={40} fill="#136113" stroke="#010d01" strokeWidth={0.5} ></rect>
            <text x = "688" y = "63" textAnchor="middle" fontFamily="Courier New" fontSize={15} fill = "#fff"> :80 </text>

            <rect x = "660" y = "90" rx={5} ry={5} width={60} height={40} fill="#781b1b" stroke="#370c0c" strokeWidth={0.5}></rect>
            <text x = "688" y = "113" textAnchor="middle" fontFamily="Courier New" fontSize={15} fill = "#fff"> :22 </text>

            <rect x="660" y="140" rx={5} ry={5} width={60} height={40} fill="#927a22" stroke="#353505" strokeWidth={0.5} ></rect>
            <text x="688" y={163} textAnchor="middle" fontFamily="Courier New" fontSize={15} fill="#fff"> :443 </text>

            //lines between PC and Target Server
            
           
            <motion.line
                x1={180}
                y1={95}
                x2={645}
                y2={50}
                stroke="#fefbfb"
                strokeWidth={1}
                strokeDasharray="6 3"
                strokeDashoffset={450}
                opacity={0.9}
                initial = {{pathLength : 0 }}
                animate = {{pathLength : 1 }}
                transition={{ duration: 1.5, ease: "linear" }}
            />

            <motion.text
                x={645} 
                y={53} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#fff"
                initial = {{opacity : 0}}
                animate = {{ opacity: 1}}
                transition = {{ duration : 0.2, delay : 1.5, ease : "linear" }}
            > › </motion.text>


            <motion.line
                x1={645}
                y1={60}
                x2={180}
                y2={105}
                stroke={"#16e516"}
                strokeWidth={0.5}
                strokeDasharray="6 3"
                strokeLinecap="round"
                opacity={0.9}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.7, ease: "linear" }}
            />
            
            <motion.text
                x={180} 
                y={108} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#16e516"
                initial = {{ opacity : 0 }}
                animate = {{ opacity : 1 }}
                transition={{ duration : 0.2, delay : 3.2, ease : "linear" }}
                >‹</motion.text>

            <motion.line 
                x1 = {180} 
                y1={125} 
                x2={645} 
                y2={100} 
                stroke="#fefbfb" 
                strokeWidth={1} 
                strokeDasharray="6 3"
                startOffset={450}
                opacity={0.9}
                initial = {{pathLength : 0 }}
                animate = {{pathLength : 1 }}
                transition= {{duration : 1.5, ease : "linear"}}
            />

            <motion.text
                x={645} 
                y={103} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#fff"
                initial = {{opacity : 0}}
                animate = {{ opacity: 1}}
                transition = {{ duration : 0.2, delay : 1.5, ease : "linear" }}
            > › </motion.text>

            <motion.line
                x1={645} 
                y1={110} 
                x2={180} 
                y2={135} 
                stroke="#cb1b1b" 
                strokeWidth={1}
                strokeDasharray="6 3"
                opacity={0.9}
                initial = {{pathLength : 0}}
                animate = {{pathLength : 1}}
                transition={{duration : 1.5, delay : 1.7, ease : "linear" }}
            />

            <motion.text 
                x={180} 
                y={138} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#cb1b1b"
                initial = {{ opacity : 0 }}
                animate = {{ opacity : 1 }}
                transition={{duration : 0.2, delay : 3.2, ease : "linear"}}
            > ‹ </motion.text>
            
            <motion.line 
                x1={180} 
                y1={150} 
                x2={645} 
                y2={160} 
                stroke={ returnDone ? "#FFD93D" : "#fefbfb"} 
                strokeWidth={1} 
                strokeDasharray="6 3"
                strokeDashoffset={450}
                opacity={0.9}
                initial = {{pathLength : 0}}
                animate = {{ pathLength : 1 }}
                transition={{ duration : 1.7, ease : "linear"}}
                onAnimationComplete={() => setReturnDone(true)}
            ></motion.line>

            <motion.text
                x={645} 
                y={163} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill={ returnDone? "#FFD93D" : "#fff"}
                initial={{ opacity : 0 }}
                animate = {{ opacity : 1 }}
                transition={{duration : 0.2, delay : 1.7, ease : "linear"}}
                onAnimationComplete={() => setReturnDone(true)}
            > › </motion.text>

        {/* <motion.text
                x={645} 
                y={163} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#927a22"
                initial={{ opacity : 0 }}
                animate = {{ opacity : 1 }}
                transition={{duration : 0.2, delay : 1.5, ease : "linear"}}
            > › </motion.text> */}

            

        </svg>
    )
}


export default TCPAnimation