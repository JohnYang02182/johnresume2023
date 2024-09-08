const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const credsJson = require('./google-generated-creds.json');
const { json } = require('stream/consumers');
// Your credentials
const credentials = {
  client_email: credsJson.client_email,
  private_key: credsJson.private_key,
  spread_sheet_id: credsJson.spread_sheet_id
};

// Google Sheets API version
const version = 'v4';

// The range of cells to fetch from the sheet
const range = 'myWebsite';

(async function extractSheets() {
  const client = new google.auth.JWT(
    credentials.client_email,
    undefined,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  );

  const sheets = google.sheets({ version, auth: client });

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: credentials.spread_sheet_id,
    range,
  });

  const rows = response.data.values;
  let key = [];
  let jsonArr = [];
  let jsonObject = [];
  if (rows) {
    // Convert to JSON
    rows.forEach((row) => {
      key.push(row[0]);
    });
    for(let i = 1; i < rows[0].length; i++){
      jsonArr = rows.map((row, index) => ({ 
          [key[index]]: row[i]
      }));
      jsonObject = jsonArr.reduce((a, b) => Object.assign(a, b), {});
      fs.writeFileSync(path.join(__dirname, './locales',`${jsonArr[0].key}.json`), JSON.stringify(jsonObject, null, 2));
    }

    // Write to file in parent directory
  } else {
    console.log('No data found.');
  }
})();
