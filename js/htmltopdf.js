// Add a click event listener to the download button/link
document.getElementById('cvDownload').addEventListener('click', function() {
  // Create a new jsPDF instance
  var doc = new jsPDF();
  
  // Get the HTML element that you want to convert to PDF
  var element = document.getElementById('element-to-convert');
  
  // Convert the HTML element to PDF using jsPDF
  doc.html(element, {
    callback: function() {
      // Save the generated PDF with a specific file name and extension
      doc.save('Jagatheeswaran-CV.pdf');
    }
  });
});

