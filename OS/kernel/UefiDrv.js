import { KernelCpuInfo } from "./drv/function/bios/Cpu/getCpuInfo.js";
import { KernelCpuEndian } from "./drv/function/bios/Cpu/getCpuendian.js";
import { KernelCpuArch } from "./drv/function/bios/Cpu/getCpuArch.js";
import { KernelRamAmount } from "./drv/function/bios/memory/GetAllram.js";
import { KernelRamFreeMemory } from "./drv/function/bios/memory/getfreeMemory.js";
import { KernelGetBiosEnvioment } from "./drv/function/bios/Cpu/getBiosEnvioment.js"
export class cpu {
    GetSystemEnvionments(){
        return KernelGetBiosEnvioment()
    }
    GetEndian(){
        
    }
    CpuInfo(){
        return KernelCpuInfo()
    }
}
export class ram{

}
export class UEFI extends cpu{
    CpuInfo(){
        return KernelCpuInfo()
    }


}