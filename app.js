const express = require('express');
const app = express();

app.use(express.static('public'));  // Serve HTML from the "public" folder

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
