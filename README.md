# ShellPath 🐚
 
> Because man pages are boring.
 
**ShellPath** is an interactive Linux command learning tool that teaches you how commands work under the hood — not just what they do, but the actual process behind them. Search a command, get a step-by-step animated breakdown of what happens inside your computer.
 
🔗 **Live demo:** [shell-path-ivory.vercel.app](https://shell-path-ivory.vercel.app)
 
---
 
## What it does
 
Most tools tell you *what* a command does. ShellPath shows you *how* it works.
 
Search `nmap` and instead of a man page, you get:
 
- A **step-by-step breakdown** of what happens internally — DNS resolution, TCP handshake, port scanning, banner grabbing, final report
- **Animated SVG diagrams** for each step — packets moving between machines, ports lighting up green/red/orange based on response type
- **Real flags** explained with syntax examples
- A **challenge question** to test your understanding
- An **interactive relationship graph** showing how commands connect to each other
---
 
## Tech stack
 
**Frontend**
- React + Vite
- Tailwind CSS (dark terminal aesthetic)
- Framer Motion (step-by-step animations)
- React Force Graph (D3-powered relationship graph)
- React Router
**Backend**
- Node.js + Express
- Structured command schema (`commands.json`) — real curated content, not AI-generated on every request
- AI fallback for commands outside the schema
**Deployment**
- Frontend → Vercel
- Backend → Railway
---
 
## Architecture
 
The core experience runs on a **structured command schema** — not live AI generation. For curated commands (nmap, netstat, ping, ss, traceroute), all content is pre-written and served directly from `commands.json`. AI is used only as a fallback for commands outside the library.
 
```
User searches "nmap"
→ Backend checks commands.json
→ Found → serves real curated data
→ Frontend renders steps + animations
→ No AI call needed
```
 
This means the core experience works even without an AI API key — the animations, graph, and content are all static, fast, and reliable.
 
---
 
## Features
 
| Feature | Status |
|---|---|
| Step-by-step command explanations | ✅ |
| Animated SVG diagrams per step | ✅ |
| Toggle to show/hide visuals | ✅ |
| Real flags with syntax examples | ✅ |
| Challenge questions | ✅ |
| Interactive D3 relationship graph | ✅ |
| Clickable graph nodes → navigate to command | ✅ |
| Structured command schema (no AI dependency) | ✅ |
| AI fallback for unknown commands | In progress |
| More commands in library | In progress |
 
---
 
## Running locally
 
**Clone the repo**
```bash
git clone https://github.com/diyashah2914/Shell-Path.git
cd Shell-Path
```
 
**Install frontend dependencies**
```bash
npm install
```
 
**Install backend dependencies**
```bash
cd backend
npm install
```
 
**Start the backend**
```bash
cd backend
node index.js
# runs on http://localhost:3001
```
 
**Start the frontend**
```bash
# from root
npm run dev
# runs on http://localhost:5173
```
 
---
 
## Project structure
 
```
Shell-Path/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # search bar + command buttons
│   │   ├── Command.jsx       # step-by-step command page
│   │   └── Graph.jsx         # relationship graph page
│   └── components/
│       └── visuals/
│           ├── DNSAnimation.jsx
│           ├── TCPAnimation.jsx
│           ├── PortScanAnimation.jsx
│           ├── BannerGrabAnimation.jsx
│           ├── TerminalOutput.jsx
│           └── RelationshipGraph.jsx
├── backend/
│   ├── index.js              # Express server
│   └── commands.json         # curated command schema
└── vite.config.js
```
 
---
 
## Roadmap
 
- [ ] Expand command library (grep, chmod, ssh, curl, find)
- [ ] AI-powered challenge answer validation
- [ ] More animation types (file tree, process tree)
- [ ] User progress tracking
---
 
Built by [Diya Shah](https://github.com/diyashah2914) — CS undergraduate at the University of Manchester
