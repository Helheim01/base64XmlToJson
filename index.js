const convert = require('xml-js')
const express= require('express');
const app= express();
app.use(express.json());
const port= process.env.port || 3000;
app.listen(port,()=>console.log("Escuchando en puerto: "+port));

app.put('/getJson',async (req,res)=>{
    let xml = Buffer.from(req.body.xml, 'base64');
    xml = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }))['FacturaElectronica']
    console.log(xml);
    res.send(xml)
    });