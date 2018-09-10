const PDFDocument = require('pdfkit');


let fs = require('fs');
let doc = new PDFDocument;

doc.pipe(fs.createWriteStream('C:/Users/AF81778/Desktop/output.pdf'));

doc.fontSize(15).text('Wally Gator !', 50, 50);
// Set the paragraph width and align direction
doc.text(`Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. 
There has never been a greater operator in the swamp. See ya later, Wally Gator.`, {
    width: 410,
    align: 'left'
});
//doc.image(`https://www.google.com/search?q=himalayas&rlz=1C1GGRV_enUS805US805&source=lnms&tbm=isch&sa=X&ved=0ahUKEwihu9Tbo-LcAhUr3IMKHWzHCUYQ_AUICygC&biw=1366&bih=635&safe=active&ssui=on`, 320, 280, 0.25)
//.text('Scale', 320, 265)
doc.end();