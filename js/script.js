// Gerar Arquivo em pdf com o html


function gerarPDF() {
    var docPDF = document.getElementById('conteudo').innerHTML;

    var verPDF = window.open('','','width=800,height=600');
    verPDF.document.write('<html><head>');
    verPDF.document.write('<title>PDF</title></head>');
    verPDF.document.write('<body>');
    verPDF.document.write(docPDF);
    verPDF.document.write('</body></html>');
    verPDF.print();
}