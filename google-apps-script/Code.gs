/**
 * Google Apps Script for Vinay Kumar Portfolio Contact Form
 * 
 * Stores submissions in Google Sheets with automatic timestamping and duplicate prevention.
 * 
 * Setup Instructions:
 * 1. Create a new Google Sheet named "Portfolio Contacts".
 * 2. In row 1, set headers: Timestamp | Name | Email | Subject | Message
 * 3. Go to Extensions > Apps Script.
 * 4. Paste this code into Code.gs.
 * 5. Click Deploy > New deployment.
 * 6. Select type: Web App.
 * 7. Execute as: "Me" (your Google account).
 * 8. Who has access: "Anyone".
 * 9. Click Deploy and copy the Web App URL.
 * 10. Add NEXT_PUBLIC_GOOGLE_SCRIPT_URL=<YOUR_WEB_APP_URL> to your .env.local file.
 */

const SHEET_NAME = 'Sheet1'; // Or your sheet tab name

function doPost(e) {
  const lock = LockService.getScriptLock();
  // Wait up to 30 seconds for concurrent requests
  try {
    lock.waitLock(30000);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', error: 'Server busy. Please try again.' })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheetByName(SHEET_NAME) || doc.getActiveSheet();

    // Extract parameters from multipart/form-data or url-encoded post
    const params = e.parameter || {};
    const name = (params.name || '').trim();
    const email = (params.email || '').trim();
    const subject = (params.subject || '').trim();
    const message = (params.message || '').trim();

    // Server-side validation
    if (!name || !email || !message) {
      return ContentService.createTextOutput(
        JSON.stringify({ result: 'error', error: 'Missing required fields' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return ContentService.createTextOutput(
        JSON.stringify({ result: 'error', error: 'Invalid email address' })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Sanitize lengths to prevent sheet bloat / spam
    const sanitizedName = name.substring(0, 100);
    const sanitizedEmail = email.substring(0, 150);
    const sanitizedSubject = (subject || 'No Subject').substring(0, 200);
    const sanitizedMessage = message.substring(0, 4000);

    const timestamp = new Date();

    // Append row
    sheet.appendRow([
      timestamp,
      sanitizedName,
      sanitizedEmail,
      sanitizedSubject,
      sanitizedMessage,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'active', message: 'Vinay Kumar Portfolio Contact API' })
  ).setMimeType(ContentService.MimeType.JSON);
}
