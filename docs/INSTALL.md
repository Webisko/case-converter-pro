# Firefox Extension Installation Guide

**📖 [Wersja Polska](INSTALL_PL.md) | 🌍 English Version**

## Step by Step - Installation in Firefox Developer Edition

### 1. Preparation
- Make sure you have **Firefox Developer Edition** installed
- Download or clone this project to a local folder

### 2. Extension Installation
1. Open **Firefox Developer Edition**
2. Type in address bar: `about:debugging`
3. Click **"This Firefox"** in the left menu
4. Click **"Load Temporary Add-on..."** button
5. Navigate to the extension folder and select **`manifest.json`** file
6. Click **"Open"**

### 3. Installation Confirmation
- Extension will appear in the list of installed add-ons
- Name: **"Case Converter Pro"**
- Status: **"Temporary"** (will be removed after browser is closed)

### 4. Testing
1. Go to any website
2. Select text containing special characters, e.g: **"Example text with ąćęłńóśźż"**
3. Right-click on selected text
4. **"Case Converter Pro"** should appear in context menu with conversion options

### 5. Usage Example
- **Input text**: "My Example Article"
- **camelCase**: "myExampleArticle"
- **kebab-case**: "my-example-article"
- **snake_case**: "my_example_article"

## Troubleshooting

### Extension doesn't appear in menu
- Check if extension is active in `about:debugging`
- Make sure you select text before right-clicking
- Try refreshing the page (F5)

### Console errors
- Open Developer Tools (F12)
- Check "Console" tab for errors
- If there are errors, verify all files are in correct locations

### Text is not replaced
- In editable fields: text will be replaced automatically
- In non-editable areas: text will be copied to clipboard
- Check notifications in bottom-right corner of page

## Development Notes

### Development mode vs. production
- **Temporary add-on**: removes after browser is closed
- **Permanent installation**: requires Mozilla signing

### Code modifications
After any code changes:
1. Go to `about:debugging`
2. Click **"Reload"** next to the extension
3. Refresh test pages

### Debugging
- Use `console.log()` in content.js and background.js
- Check errors in Developer Tools
- Test on different page types and elements

## Need Help?

If you have problems with installation or extension functionality, check:
1. Are you using Firefox Developer Edition (not regular Firefox)
2. Are all files in correct locations
3. Are there any JavaScript errors in console
