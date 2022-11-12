import { DLOG } from "./dlog.js"

export let print = {
    out(inp){
        DLOG(1,3,1,0,inp)
        console.log(inp)
    },
    outError(inp){
    
        console.error(inp)
    },
    outWarn(inp){
        console.warn(inp)
    }
}