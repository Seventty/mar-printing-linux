/*
    * Connection with the printer here
*/
import { exec, execSync } from 'child_process';

export function allPrinters(){
    const allPrintersCommand = "lpstat -p | awk '{print $2}'";
    const res = execSync(allPrintersCommand).toString().replace('\n', '');
    return res;
};

