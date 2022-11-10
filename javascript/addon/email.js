import { logFILENAME, logFN, LogIsTrue, logTYPE } from "./dlog.js"
import { print } from "./print.js"

export let email = {
    genEmail(name,Type){
        return `${name}10@${Type}`
        if (LogIsTrue === 0){
            print.out(`${(logTYPE[2])} {(logFILENAME[2])} ${(logFN[1])}`)
        }
    }
}