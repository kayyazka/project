function previewCV() {
    const element = document.getElementById('cv');
    const previewFrame = document.getElementById('pdf-preview');
    const downloadBtn = document.getElementById('download-btn');
    const closePreviewBtn = document.getElementById('close-preview-btn');

    // Hide the download button and show the preview frame and close button
    downloadBtn.style.display = 'none';
    previewFrame.style.display = 'block';
    closePreviewBtn.style.display = 'inline-block';

    // Generate the PDF and load it in the iframe
    html2pdf().from(element).outputPdf('datauristring').then(function(pdfDataUri) {
        previewFrame.src = pdfDataUri;
    });
}

function closePreview() {
    const previewFrame = document.getElementById('pdf-preview');
    const downloadBtn = document.getElementById('download-btn');
    const closePreviewBtn = document.getElementById('close-preview-btn');

    // Hide the preview frame and close button, show the download button
    previewFrame.style.display = 'none';
    closePreviewBtn.style.display = 'none';
    downloadBtn.style.display = 'inline-block';
}

function downloadCV() {
    const element = document.getElementById('cv');
    const downloadBtn = document.getElementById('download-btn');
    const previewBtn = document.getElementById('preview-btn');

    // Hide the download button
    downloadBtn.style.display = 'none';
    previewBtn.style.display = 'none';

    // Generate the PDF
    html2pdf()
        .from(element)
        .save('CV.pdf')
        .then(() => {
            // Show the download button again after the PDF is generated
            downloadBtn.style.display = 'inline-block';
            previewBtn.style.display = 'inline-block';
        });
}