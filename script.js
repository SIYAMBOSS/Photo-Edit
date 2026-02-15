function handleFiles(files) {
    const file = files[0];
    if (file) {
        alert("Image Received: " + file.name + "\nNow connecting to AI Server for HD Processing...");
        // এখানে ভবিষ্যতে API Call যুক্ত করতে হবে।
    }
}

// Drag and Drop Logic
let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}
