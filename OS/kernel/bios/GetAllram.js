import { uefi } from "./uefi";
function bytesToSize(bytes) {
    for (var i = 0; i < sizes.length; i++) {
      if (bytes <= 1024) {
        return bytes;
      } else {
        bytes = parseFloat(bytes / 1024).toFixed(2)
      }
    }
    return bytes
}
export let KernelRamAmount= {
    gig(){
        uefi.totalmem() 
    },
    mb(){
        uefi.freemem()
    },
    Kb(){

    }
}