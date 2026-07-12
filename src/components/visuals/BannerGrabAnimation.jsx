import {motion} from "framer-motion"
import { del } from "framer-motion/client"
import { Motorbike } from "lucide-react"
import { useState} from "react"

const BannerGrabAnimation = () => {
    const [returnDone, setReturnDone] = useState(false)

    return(
            <svg width = "1200" height = "400" style = {{background: "#0D1117"}}>
            <rect x="60" y="85" width="120" height= "80" rx = "5" ry = "5" fill = "#333" stroke = "#000" strokeWidth = "2"/>


            {/* Screen display area */}
            <rect x="65" y="90" width="110" height="70" fill = "#888c" stroke = "#000" strokeWidth = "1"/>

            {/* Monitor Stand */}
            <rect x= "110" y="165" width="20" height="15" fill="#555"></rect>
            <rect x="95" y="180" width="50" height="5" fill="#555"></rect>

            <text x="120" y="220" textAnchor="middle" fill = "#58A6FF" fontFamily="Courier New" fontSize={16}> PC </text>


            {/* The Server */}
            <ellipse cx = "870" cy = "50" rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>
            <rect x="835" y="52" width={70} height={150} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></rect>
            <ellipse cx = "870" cy={200} rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>


            <line x1={835} y1={70} x2={905} y2={70} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={90} x2={905} y2={90} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={110} x2={905} y2={110} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={130} x2={905} y2={130} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={150} x2={905} y2={150} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={170} x2={905} y2={170} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>

            {/* The port */}
            <rect x = {770} y = {100} width = {60} height={40} rx={5} ry={5} fill = {"#136113"} stroke="#010d01" strokeWidth={1.5} ></rect>
            <text x ={797} y={125} textAnchor="middle" fontFamily="Courier New" fontSize={18} fill="#fefbfb"> :80 </text>


            {/* Animation lines */}

            <motion.line
                x1 = {180}
                y1 = {110}
                x2 = {767}
                y2 = {110}
                stroke={"#136113"}
                strokeWidth={1.5}
                strokeDasharray="6 3"
                initial = {{pathLength: 0}}
                animate = {{pathLength : 1}}
                transition={{duration:1.5, ease: " linear"}}

            ></motion.line>

            <motion.text
                x = {765}
                y = {115}
                textAnchor={"middle"}
                fill={"#136113"}
                fontFamily={"Courier New"}
                fontSize={24}
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                transition = {{duration: 0.2, delay : 1.5, ease:"linear"}}
            > › </motion.text>

            <motion.text
                x = {465}
                y = {100}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={14}
                fill={"#136113"}
                initial = {{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.2, delay:1, ease:"linear"}}
            > Connect to Port 80</motion.text>

            <motion.line
                x1 = {768}
                y1 = {125}
                x2 = {180}
                y2 = {125}
                stroke={"rgb(22, 66, 132)"}
                strokeWidth={1.5}
                strokeDasharray={"6 3"}
                initial = {{pathLength:0}}
                animate = {{pathLength : 1}}
                transition={{duration : 1.5, delay:1.5, ease:"linear"}}
            ></motion.line>

            <motion.text
                x = {184}
                y = {130.5}
                textAnchor={"middle"}
                fill={"rgb(22, 66, 132)"}
                fontFamily={"Courier New"}
                fontSize={24}
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                transition={{duration : 0.2, delay: 3, ease:"linear"}}
            > ‹ </motion.text>

            <motion.text
                x = {465}
                y = {140}
                fill={"rgb(22,66,132"}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={14}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:2, duration:0.2, ease:"linear"}}
            > Server : Apache/2.4.41 </motion.text>

            <motion.text
                x = {480}
                y = {240}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={18}
                fill={returnDone ? "rgb(22, 66, 132)" : "#136113"}
                initial = {{opacity:0}}
                animate = {{opacity:1}}
                transition={{duration:1.5, ease:"linear"}}
                onAnimationComplete={() => setReturnDone(true)}
                
            > 
                {returnDone ? "Banner Returns" : "Nmap Connects"}   
            </motion.text>


            {/* The banner */}
            <motion.rect 
                x="70"
                y="270" 
                width="170" 
                height="90" 
                rx={5} 
                ry={5} 
                fill = "#1a1a2e" 
                stroke = "#093109" 
                strokeWidth = "3"
                animate={{opacity:1}}
                initial={{opacity:0}}
                transition={{duration:0.8, delay:3.2, ease:"linear"}}
                />

            <motion.text
                x = {155}
                y = {285}
                fill={"#35a635"}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={13.5}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:3.4, ease:"linear"}}
            > Nmap identifies : </motion.text>

            <motion.text
                x = {155}
                y = {305}
                fill={"rgba(188, 185, 185, 0.8)"}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={13.5}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:3.5, ease:"linear"}}
            > Port 80 — open </motion.text>

            <motion.text
                x = {155}
                y = {320}
                fill={"rgba(188, 185, 185, 0.8)"}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={13.5}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:3.6, ease:"linear"}}
            > Service : http </motion.text>

            <motion.text
                x = {155}
                y = {335}
                fill={"rgba(188, 185, 185, 0.8)"}
                textAnchor={"middle"}
                fontFamily={"Consolas"}
                fontSize={12.5}
                initial={{opacity:0}}
                animate = {{opacity:1}}
                transition = {{duration:0.3, delay:3.7, ease:"linear"}}
            > Version : Apache 2.4.41 </motion.text>

            </svg>
    )
}


export default BannerGrabAnimation