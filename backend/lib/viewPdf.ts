export function generateHeader(doc:PDFKit.PDFDocument) {
    doc
      .fillColor("#444444")
      .fontSize(20)
      .text("KolendaTeam", 110, 57)
      .fontSize(10)
      .text("Kraków,", 200, 65, { align: "right" })
      .moveDown();
  }
  
export function generateFooter(doc:PDFKit.PDFDocument) {
    doc
      .fontSize(10)
      .text(
        "Payment is due within 15 days. Thank you for your business.",
        50,
        780,
        { align: "center", width: 500 }
      );
  }

  function generateTableRow(doc:PDFKit.PDFDocument, y:number, c1:string, c2:string, c3:any, c4:string, c5:string) {
    doc
      .fontSize(10)
      .text(c1, 50, y)
      .text(c2, 150, y)
      .text(c3, 280, y, { width: 90, align: "right" })
      .text(c4, 370, y, { width: 90, align: "right" })
      .text(c5, 0, y, { align: "right" });
  }

  function generateInvoiceTable(doc:PDFKit.PDFDocument, invoice:any) {
    let i,
      invoiceTableTop = 330;
  
    for (i = 0; i < invoice.items.length; i++) {
      const item = invoice.items[i];
      const position = invoiceTableTop + (i + 1) * 30;
      generateTableRow(
        doc,
        position,
        item.item,
        item.description,
        item.amount / item.quantity,
        item.quantity,
        item.amount
      );
    }
  }


  export default { generateHeader, generateFooter};