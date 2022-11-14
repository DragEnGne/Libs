import os from 'os'
function log(inp){
    console.log(inp)
}
let cpuednen = os.freemem()
log(os.platform())
log(cpuednen)