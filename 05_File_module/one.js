// Require the given module
const fs = require('fs');

// it will create a new file with name writeme.txt and the content inside the file will be read me 
//writeFileSync is inbuilt funtion   directly used to create a file in node js
//it comprises of 2 things 1st is name and 2nd is content
// synchronous func
fs.writeFileSync('writeMe.txt', readMe);

//asynchronous write function 
//isme ek call back funton bbhi hota h 
//fs.writeFile() also takes three parameters, file name with its complete path,
// the second parameter is the data to be written in file and 
// the third is a callback function which runs in case an error occurs while writing the file.

fs.Writeile('writeMe.txt', 'utf-8', function(err, data) {
    if( !err )
        fs.writeFile('writeMe.txt', data, (err)=>{
            if( err ) {
                throw err;
            }
        });
    else
        throw err;
});



//read function
//REadfile sync
//synchronomus
const result = fs.readFileSync('readMe.txt', 'utf-8');
console.log(result);

//asyn
//asynchronous write function 
//isme ek call back funton bhi hota h 
//fs.ReadFile() also takes three parameters, file name with its complete path,
// the second parameter is the data to be written in file and 
// the third is a callback function which runs in case an error occurs while writing the file.
fs.readFile('readMe.txt', 'utf-8', function(err, data) {

            if( err ) {
                console.log( err);
            }
    
    else
        console.log(data);
});



/*------------------------------------------------------------------*/
//The fs.appendFile() method is used to asynchronously append the given data to a file.
// A new file is created if it does not exist.
fs.appendFile( path, data[, options], callback )

/*path: It is a String, Buffer, URL or number that denotes the source filename or file descriptor that will be appended to.
data: It is a String or Buffer that denotes the data that has to be appended.

options: It is an string or an object that can be used to specify optional parameters that will affect the output. It has three optional parameters:

///((((((encoding: It is a string which specifies the encoding of the file. The default value is ‘utf8’.
////mode: It is an integer which specifies the file mode. The default value is ‘0o666’.
///flag: It is a string which specifies the flag used while appending to the file. The default value is ‘a’.)))))))

///callback: It is a function that would be called when the method is executed.*/




//Delete the file
//asynchronously
// delete a file asynchronously

fs.unlink( path, callback )

fs.unlink('file.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File is deleted.');
  }
});

  
