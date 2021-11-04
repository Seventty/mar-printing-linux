/*
    * Connection with the printer here
*/
import { exec, execSync } from 'child_process';

function allPrinters(){
    const allPrintersCommand = "lpstat -p | awk '{print $2}'";
    return execSync(allPrintersCommand).toString().replace('\n', '');
};


export { allPrinters }