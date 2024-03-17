const request = require ('request')
function getrequest(GETurl){
request({url: GETurl, json: true}, (error,response)=>{
    if(error){
        console.log(`Unable to get data`);
    } else if(response.body.success === false){
        console.log(`Invalid Inputs`);
    } else {
        console.log(response.body);
    }
})
}

module.exports = getrequest