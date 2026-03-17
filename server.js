const express = require('express');
const path = require('path');
const app = express();

// 💀 The exact VIP route you requested
app.get('/download/apk/SecureVault', (req, res) => {
    const apkPath = path.join(__dirname, 'SecureVault.apk');
    
    // res.download forces the browser to download the file directly
    res.download(apkPath, 'SecureVault_Official.apk', (err) => {
        if (err) {
            console.error("Download failed:", err);
            res.status(500).send("Vault file securely locked or unavailable.");
        }
    });
});

// A simple root route just in case someone visits the main domain
app.get('/', (req, res) => {
    res.send("Access Denied. 💀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Vault Distributor running on port ${PORT}`);
});
