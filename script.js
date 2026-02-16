function openHtmlAsBlob(htmlContent) {
    // Step 1: Create a Blob from the HTML string
    const blob = new Blob([htmlContent], {
        type: 'text/html'
    });

    // Step 2: Create a URL for the Blob
    const blobUrl = URL.createObjectURL(blob);

    // Step 3: Open the Blob URL in a new tab
    window.open(blobUrl, '_blank');
}

// Example HTML content
const htmlString = `
<!DOCTYPE html>
<html>
<link rel="icon" href="https://raw.githubusercontent.com/chromium/chromium/main/chrome/app/theme/default_200_percent/common/favicon_ntp.png"></link>
<head>
<title>New Tab</title>
<style>
    body {
        color: black;
        background-image: linear-gradient(to right, black, white);
        font-family: cursive, monospace;
        text-align: center;
        text-shadow: -1.5px -1.5px 3px white, 1.5px 1.5px 3px white, -1.5px 1.5px 3px white, 1.5px -1.5px 3px white;
    }

    p {
        font-size: 24px;
    }

    h1 {
        color: black;
        text-shadow: -3px -3px 3px white, 3px 3px 3px white, -3px 3px 3px white, 3px -3px 3px white;
        font-size: 60px;
    }

    h2 {
        color: black;
        font-size: 30px
    }
    h3 {
        font-size: 20px;
    }
    button {
            font-family: cursive, monospace;
            width: 200px;
            height: 200px;
            font-size: 25px;
            text-shadow: -1.5px -1.5px 3px white, 1.5px 1.5px 3px white, -1.5px 1.5px 3px white, 1.5px -1.5px 3px white;
            color: black;
            background-image: linear-gradient(to right, white, black);
    }
</style>
</head>

<body>
<h1>Welcome to Coding Essentials!</h1>
<h2>This tab has been opened in a blob: tab to ensure it will remain unblocked.</h2>
<button onclick="openBlob()">Open HTML Blob Tab</button>
</body>
<script src="blobs.js"></script>
</html>
`;

// Call the function to open the HTML
function blobOpen() {
    openHtmlAsBlob(htmlString);
}
