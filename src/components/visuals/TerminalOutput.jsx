import {motion} from "framer-motion"

const TerminalOutput = () => {
    return(
        <div className="bg-[#0D1117] border border-[#30363D] rounded-lg p-6 font-mono w-full">
            <motion.p 
                className="mt-0"
                initial={{opacity:0}} 
                animate={{opacity:1}}
                transition={{duration:0.3, ease:"linear", delay:0.2}}>
                    Starting Nmap scan... </motion.p>

            <motion.p
                className="whitespace-pre  mt-10"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:0.6, ease:"linear"}}
            >{'PORT     STATE     SERVICE     VERSION'}</motion.p>

            <motion.p
                className="whitespace-pre text-[#781b1b] mt-6"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:1, ease:"linear"}}
            >{'22/tcp   closed    ssh      '}</motion.p>

            <motion.p
                className="whitespace-pre text-[#136113] mt-3"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:1.4, ease:"linear"}}
            >{'80/tcp   open      http        Apache/2.4.41'}</motion.p>

            <motion.p
                className="whitespace-pre text-[#927a22] mt-3"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.3, delay:1.8, ease:"linear"}}
            >{'443/tcp  filtered  http'} </motion.p>


            <motion.p
                className="whitespace-pre mt-14"
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:2.4, duration:0.3, ease:"linear"}}
            >Nmap done: 1 IP address scanned </motion.p>

            


        </div>
    )
}


export default TerminalOutput