import {motion, AnimatePresence, setStyle} from "framer-motion"
import { MountainIcon } from "lucide-react";
import { use, useState } from "react"


const OpenScan = ({ onDone }) => {
  const [stage, setStage] = useState("syn-exchange"); // "syn-exchange" -> "hidden" -> "rst" -> done

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (stage === "hidden") setStage("rst"); // once syn-exchange has faded out, start rst
      }}
    >
      {stage === "syn-exchange" && (
        <motion.g
          key="syn-exchange"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.line
            x1={180}
            y1={115}
            x2={830} 
            y2={115}
            stroke="#fefbfb"
            strokeWidth={1} 
            strokeDasharray="6 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
          />

          <motion.text
            x = {830}
            y = {118.5}
            fontFamily = {"Courier New"}
            fontSize = {16}
            textAnchor = {"middle"}
            fill = {"#fefbfb"}
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            transition = {{duration : 0.2, delay: 1.5, ease : "linear"}}
          > › </motion.text>


          <motion.text
            x={500} 
            y={110} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "linear" }}
          >
            SYN
          </motion.text>

          <motion.line
            x1={832}  
            y1={135} 
            x2={180} 
            y2={135}
            stroke="#136113" 
            strokeWidth={1.5} 
            strokeDasharray="6 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "linear" }}
          />

          <motion.text
            x = {183}
            y = {138.5}
            fill = {"#136113"}
            fontFamily={"Courier New"}
            fontSize={18}
            textAnchor={"middle"}
            initial = {{opacity:0}}
            animate = {{opacity : 1}}
            transition= {{duration:0.2, delay:3, ease:"linear"}}
          > ‹ </motion.text>

          <motion.text
            x={500} 
            y={150} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={15} 
            fill="#136113"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.5, ease: "linear" }}
          >
            SYN-ACK
          </motion.text>

          <motion.text
            x={510} 
            y={250} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 4, ease: "linear" }}
        > Nmap marks the port Open</motion.text>

          <motion.text
            x={510} 
            y={163} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 3.5, ease: "linear" }}
            onAnimationComplete={() => {
                setTimeout(() => setStage("hidden"), 1500);
            }} // last element done -> trigger exit
          >
            implies port is open and running
          </motion.text>
        </motion.g>
      )}

      {stage === "rst" && (
        <motion.g key="rst" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          <motion.line
            x1={180} 
            y1={125} 
            x2={830} 
            y2={125}
            stroke="#136113" 
            strokeWidth={1.5} 
            strokeDasharray="6 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
          />
          <motion.text
            x={500} 
            y={115} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={16} 
            fill="#136113"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7, ease: "linear" }}
            onAnimationComplete={onDone} // whole OpenScan sequence is done
          >
            RST 
          </motion.text>

          <motion.text
            x = {505}
            y = {145}
            textAnchor={"middle"}
            fontSize={14}
            fill = {"#fefbfb"}
            initial={{opacity : 0}}
            animate = {{opacity : 1}}
            transition={{ duration: 0.3, delay:0.7, ease:"linear" }}
          > Half-Open Connection Lost </motion.text>

          <motion.text
            x = {830}
            y = {129}
            fontFamily={"Courier New"}
            fontSize={18}
            fill = {"#136113"}
            textAnchor={"middle"}
            initial={{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration:0.2, delay: 1.3, ease:"linear"}}

          > › </motion.text>

          <motion.text
            x={510} 
            y={250} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "linear" }}
        > Nmap marks the port Open</motion.text>

        

        </motion.g>
      )}
    </AnimatePresence>
  )
}


const ClosedScan = () => {
    
    return (
        <>
        <motion.line
            x1={180}
            y1={115}
            x2={830} 
            y2={115}
            stroke="#fefbfb"
            strokeWidth={1} 
            strokeDasharray="6 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "linear" }}
          />

        <motion.text
            x = {830}
            y = {118.5}
            fontFamily = {"Courier New"}
            fontSize = {16}
            textAnchor = {"middle"}
            fill = {"#fefbfb"}
            initial = {{opacity : 0}}
            animate = {{opacity : 1}}
            transition = {{duration : 0.2, delay: 1.5, ease : "linear"}}
          > › </motion.text>

        <motion.text
            x={500} 
            y={110} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "linear" }}
          >
            SYN
        </motion.text>

        <motion.line
            x1={832}  
            y1={135} 
            x2={180} 
            y2={135}
            stroke="#cb1b1b" 
            strokeWidth={1.5} 
            strokeDasharray="6 3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "linear" }}
          />

        <motion.text
            x = {183}
            y = {138.5}
            fill = {"#cb1b1b"}
            fontFamily={"Courier New"}
            fontSize={18}
            textAnchor={"middle"}
            initial = {{opacity:0}}
            animate = {{opacity : 1}}
            transition= {{duration:0.2, delay:3, ease:"linear"}}
          > ‹ </motion.text>


        <motion.text
            x={500} 
            y={150} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={15} 
            fill="#cb1b1b"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 2.5, ease: "linear" }}
          >
            RST
        </motion.text>


        <motion.text
            x={510} 
            y={163} 
            textAnchor="middle" 
            fontFamily="Courier New" 
            fontSize={14} 
            fill="#fefbfb"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 3, ease: "linear" }}
        > no service is listening </motion.text>

        <motion.text
            x = {510}
            y = {250}
            textAnchor={"middle"}
            fontSize={14}
            fill={"#fefbfb"}
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition={{duration: 0.2, delay: 4, ease:"linear"}}
        > Nmap marks the port Closed</motion.text>

    

    </>
   
)}


const FilteredScan = ({onDone}) => {
    const [stage, setStage] = useState("syn-exchange")
    return(
        <AnimatePresence
            mode="wait"
            onExitComplete={() => {
                if (stage === "hidden") setStage("rst");
            }}
        >

            {stage === "syn-exchange" && (
                <motion.g
                    key = "syn-exchange"
                    exit = {{opacity : 0}}
                    transition={{duration : 0.5}}
                >
                    <motion.line
                x1={180}
                y1={115}
                x2={830} 
                y2={115}
                stroke="#fefbfb"
                strokeWidth={1} 
                strokeDasharray="6 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "linear" }} 
            ></motion.line>

            <motion.text
                x = {830}
                y = {118.5}
                fontFamily = {"Courier New"}
                fontSize = {16}
                textAnchor = {"middle"}
                fill = {"#fefbfb"}
                initial = {{opacity : 0}}
                animate = {{opacity : 1}}
                transition = {{duration : 0.2, delay: 1.5, ease : "linear"}}
          > › </motion.text>

            <motion.text
                x={500} 
                y={110} 
                textAnchor="middle" 
                fontFamily="Courier New" 
                fontSize={14} 
                fill="#fefbfb"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "linear" }}
                onAnimationComplete={() => {
                    setTimeout(() => setStage("hidden"), 1500);
                }}
          >
                SYN
          </motion.text>
        </motion.g>
        )}

        {stage === "rst" && (
            <motion.g 
                key="rst" 
                exit={{opacity: 0}}
                transition={{duration : 0.5}}    
            >

                <motion.text
                    x = {500}
                    y = {120}
                    textAnchor={"middle"}
                    fontFamily={"Courier New"}
                    fontSize={14}
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition={{duration : 0.2, ease:"linear"}}
                    fill={"#ffd93d"}
                    
                > No Reply - The Packet is dropped</motion.text>

                <motion.text
                    x = {500}
                    y = {250}
                    textAnchor={"middle"}
                    fontFamily={"Courier New"}
                    fontSize={14}
                    initial = {{opacity : 0}}
                    animate = {{opacity : 1}}
                    transition={{duration : 0.2, ease:"linear"}}
                    fill={"#ffd93d"}
                > Nmap marks the port Filtered</motion.text>
            </motion.g>

        )}

        
    </AnimatePresence>
    )
}

const PortScanAnimation = () => {
    const [scenario, setScenario]  = useState(null)

    return(
        <svg width = "1200" height = "300" style = {{background: "#0D1117"}}>
            <rect x="60" y="85" width="120" height= "80" rx = "5" ry = "5" fill = "#333" stroke = "#000" strokeWidth = "2"/>


            // Screen display area
            <rect x="65" y="90" width="110" height="70" fill = "#888c" stroke = "#000" strokeWidth = "1"/>

            // Monitor Stand 
            <rect x= "110" y="165" width="20" height="15" fill="#555"></rect>
            <rect x="95" y="180" width="50" height="5" fill="#555"></rect>

            <text x="120" y="220" textAnchor="middle" fill = "#58A6FF" fontFamily="Courier New" fontSize={16}> PC </text>


            //Ther Server
            <ellipse cx = "870" cy = "50" rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>
            <rect x="835" y="52" width={70} height={150} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></rect>
            <ellipse cx = "870" cy={200} rx={35} ry={10} fill="#1a1a2e" stroke="#ff0000" strokeWidth={0.5}></ellipse>


            <line x1={835} y1={70} x2={905} y2={70} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={90} x2={905} y2={90} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={110} x2={905} y2={110} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={130} x2={905} y2={130} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={150} x2={905} y2={150} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            <line x1={835} y1={170} x2={905} y2={170} stroke="#ff0000" strokeWidth={0.5} opacity={0.5}></line>
            

            //buttons
            <rect onClick={() => setScenario("Open")} x={70} y={20} width={80} height={32} rx={5} ry={5} fill="#136113" stroke="#000" strokeWidth={1}></rect>
            <rect onClick={() => setScenario("Closed")} x={160} y={20} width={80} height={32} rx={5} ry={5} fill="#791b1b" stroke="#000" strokeWidth={1}></rect>
            <rect  onClick={() => setScenario("Filtered")} x={250} y={20} width={80} height={32} rx={5} ry={5} fill="#927a22" stroke="#000" strokeWidth={1}></rect>

            <text x={110} y={40} textAnchor="middle" fill="#fff" fontFamily="Courier New" fontSize={14}> Open </text>
            <text x={200} y={40} textAnchor="middle" fill="#fff" fontFamily="Courier New" fontSize={14}> Closed </text>
            <text x={290} y={40} textAnchor="middle" fill="#fff" fontFamily="Courier New" fontSize={14}> Filtered </text>

            

            {scenario == "Open" && <OpenScan/>}
            {scenario == "Closed" && <ClosedScan/>}
            {scenario == "Filtered" && <FilteredScan/>}


        </svg>
    )
}

export default PortScanAnimation