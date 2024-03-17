const postreq = require('./post-req')
const getreq = require('./get-req')

const GETurl = 'https://kodessphere-api.vercel.app/devices/Gz4xJSN'
const POSTurl = 'https://kodessphere-api.vercel.app/devices';
const data = {
    "teamid": 'Gz4xJSN',
    "device": 'led',
    "value": "#ffffff"
};

// postreq(POSTurl,data);
getreq(GETurl)

