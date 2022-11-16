import { totalmem,freemem} from 'os' 
export class memory{
    GetSystemRam(){
        return totalmem()
    }
    GetFreeRam(){
        return freemem()
    }
}