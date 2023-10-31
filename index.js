const convert = require('xml-js')

app.put('/getJson',async (req,res)=>{
    let xml = Buffer.from(req.body.xml, 'base64');
    xml = JSON.parse(convert.xml2json(xml, { compact: true, spaces: 4 }))['FacturaElectronica']
    console.log(xml);
    res.send(xml)
    });