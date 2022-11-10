import { LogIsTrue } from "./dlog.js"
import { print } from "./print.js"

export let email = {
    genEmail(name,Type){
        return `${name}10@${Type}`
        if (LogIsTrue === 0){
            print.out(`LOG:EMAIL.JS FN:genEmail(${name},${Type})`)
        }
    }
}