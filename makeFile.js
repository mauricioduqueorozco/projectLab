
var child_process = require('child_process');
child_process.exec('/Build/makefile.sh', function (err, stdout, stderr){
    if (err) {
        console.log("child processes failed with error code: " +
            err.code);
    }
    console.log(stdout);
});