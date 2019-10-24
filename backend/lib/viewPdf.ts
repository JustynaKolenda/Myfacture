import moment from 'moment'

interface ModelFacturCreate {
    date: Date,
    title: string,
    name: string,
    surName: string,
    netto: number
}


function generateHr(doc:PDFKit.PDFDocument, y:any) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}

function formatDate(date:Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}

export function generateHeader(doc:PDFKit.PDFDocument) {
  
    doc
      .fillColor("#444444")
      .fontSize(20)
      .text("KolendaTeam", 110, 57)
      .fontSize(10)
      .text(`Kraków, ${(moment().format("DD-MM-YYYY"))}`, 200, 65, { align: "right" })
      .moveDown();
  }

export  function generateCustomerInformation(doc:PDFKit.PDFDocument, factur:ModelFacturCreate) {
    doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Faktura", 50, 160);

    generateHr(doc, 185);
    const customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Nr faktury:", 50, customerInformationTop)
    .font("Helvetica-Bold")
    .text(factur.title, 150, customerInformationTop)
    .font("Helvetica")
    .text("Data wystawienia: ", 50, customerInformationTop + 15)
    .text(`${(moment(factur.date).format("DD-MM-YYYY"))}`, 150, customerInformationTop + 15)
    
    .text(`Kwota faktury:`, 50, customerInformationTop + 30)
    .text(
      `${factur.netto}`,
      150,
      customerInformationTop + 30
    )

    .font("Helvetica-Bold")
    .text(factur.name, 300, customerInformationTop)
    .font("Helvetica")
    .text(factur.surName, 300, customerInformationTop + 15)
    .moveDown();

  generateHr(doc, 252);
}
  
export function generateFooter(doc:PDFKit.PDFDocument) {
    doc
      .fontSize(10)
      .text(
        "Prosimy dokonać płatności w ciagu 7 dni.",
        50,
        780,
        { align: "center", width: 500 }
      );
  }



  export default { generateHeader, generateCustomerInformation, generateFooter};