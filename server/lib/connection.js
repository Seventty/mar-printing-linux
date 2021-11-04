/*
    * Connection with the printer here
*/
import { exec, execSync } from 'child_process';

function allPrinters(){
    const allPrintersCommand = "lpstat -p | awk '{print $2}'";
    return execSync(allPrintersCommand).toString().replace('\n', '');
};

function printJob(textToPrint){
    const printCommand = `echo ${textToPrint} | netcat -c 192.168.0.5 9100`;
    return execSync(printCommand).toString().replace('\n', '');
}


export { allPrinters, printJob }