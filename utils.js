function parseCommand(s) {  
    try{
        var command = "git clone "+ s;  
    const { exec } = require("child_process");

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    return command
     }catch(e){
        var err = "Something went wrong please try to give correct repo";
        console.log(err);
        return err
     }
  
    
    
}
function showHelp() {                                                             
    console.log('\nOptions:\r')  
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r')  
    console.log('    -gd, --gitdownload\t' + '      ' + 'clone repo from given path.' + '\t\t' + '[boolean]\r')  
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n')  
}
module.exports = { showHelp: showHelp, parseCommand: parseCommand };