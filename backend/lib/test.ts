const pdf = require('pdfkit');
const fs = require('fs');

const myDoc = new pdf;

myDoc.pipe(fs.createWriteStream('node.pdf'));

myDoc.font('Arial')
    .fontSize('48')
    .text('Node PDF', 100, 100);

myDoc.end;