import { KernelCpuInfo } from "./drv/function/bios/Cpu/getCpuInfo.js";
import { KernelCpuEndian } from "./drv/function/bios/Cpu/getCpuendian.js";
import { KernelCpuArch } from "./drv/function/bios/Cpu/getCpuArch.js";
import { KernelRamAmount } from "./drv/function/bios/memory/GetAllram.js";
import { KernelRamFreeMemory } from "./drv/function/bios/memory/getfreeMemory.js";
import { KernelGetBiosEnvioment } from "./drv/function/bios/Cpu/getBiosEnvioment.js";
//Fs
import { KernelTFSWriteFile } from "./drv/function/Filesystem/writefile.js"
import { KernelTFSAppendFile } from "./drv/function/Filesystem/appendFile.js"
import { KernelTFSCreateFile } from "./drv/function/Filesystem/createfile.js"
import { KernelTFSDeleteFile } from "./drv/function/Filesystem/DeleteFile.js"
import { KernelTFSRenameFile } from "./drv/function/Filesystem/rname.js"
import { KernelTFSDeleteFolder } from './drv/function/Filesystem/DeleteFolder.js';
//2
//Imports
import { zip } from "./imports/zip.js";
import { nets } from "./imports/https.js";
import { net } from "./imports/http.js";
import { netdns } from "./imports/dns.js";
import { FileSystem } from "./imports/FileSystem.js";
import { bios } from "./imports/bios.js";
import { enc } from "./imports/crypto.js";
