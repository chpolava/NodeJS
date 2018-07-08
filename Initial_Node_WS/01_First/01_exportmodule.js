var url = 'http://someurl.com/';

function funcname(message){
    console.log(message);
}

// exporting several methods or variables
module.exports.funcname = funcname;
module.exports.endPoint = url;

// exporting only one property
//module.exports = funcname;
console.log(module);