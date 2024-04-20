document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uppercase').addEventListener('click', function() {
        convertAndCopyText('uppercase');
    });
    document.getElementById('lowercase').addEventListener('click', function() {
        convertAndCopyText('lowercase');
    });
    document.getElementById('sentence').addEventListener('click', function() {
        convertAndCopyText('sentence');
    });
    document.getElementById('title').addEventListener('click', function() {
        convertAndCopyText('title');
    });
    document.getElementById('clearButton').addEventListener('click', function() {
        document.getElementById('inputText').value = '';
    });
});

function convertAndCopyText(caseType) {
    var textarea = document.getElementById('inputText');
    var originalText = textarea.value;

    switch (caseType) {
        case 'uppercase':
            textarea.value = originalText.toUpperCase();
            break;
        case 'lowercase':
            textarea.value = originalText.toLowerCase();
            break;
        case 'sentence':
            textarea.value = originalText.charAt(0).toUpperCase() + originalText.slice(1).toLowerCase();
            break;
        case 'title':
            textarea.value = originalText.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
            break;
    }
    copyTextToClipboard(textarea.value);
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        displayCopyMessage();
    }, function(err) {
        alert('Failed to copy text: ', err);
    });
}

function displayCopyMessage() {
    var message = document.getElementById('copyMessage');
    message.style.display = 'block';
    setTimeout(function() {
        message.style.display = 'none';
    }, 2000);
}
