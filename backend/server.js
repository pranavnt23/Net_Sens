const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/sync', (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ message: 'No data received' });
  }

  try {
    const decoded = Buffer.from(data, 'base64').toString('utf8');
    const contactList = JSON.parse(decoded);

    const filePath = path.join(__dirname, 'uploads/contacts.json');
    fs.writeFileSync(filePath, JSON.stringify(contactList, null, 2));

    res.json({ message: 'Contacts synced successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to sync contacts' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
