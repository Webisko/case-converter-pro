# Case Converter Pro Debugging Instructions

**📖 [Wersja Polska](DEBUG_PL.md) | 🌍 English Version**

## Problem: Extension not working

### Troubleshooting steps:

#### 1. Check if extension is loaded
1. Open `about:debugging` in Firefox
2. Click "This Firefox"
3. Check if "Case Converter Pro" is in the list
4. If not - reload via "Load Temporary Add-on..."

#### 2. Reload extension after changes
1. In `about:debugging` find "Case Converter Pro"
2. Click **"Reload"** button
3. This is important after every code change!

#### 3. Check console logs
1. Open test page `test.html` (in this folder)
2. Press **F12** (Developer Tools)
3. Go to **"Console"** tab
4. Select text and use extension
5. Check if logs appear:
   - "Case Converter Pro: Extension installed/reloaded"
   - "Context menu clicked: convertToCamelCase"
   - "Content script received message:"

#### 4. Check context menu
1. Select text on page
2. Right-click
3. Check if **"Case Converter Pro"** is in menu
4. Check if submenus appear on hover

#### 5. Test on different elements
- **Plain text**: should copy to clipboard
- **Input field**: should replace text
- **Textarea**: should replace selected fragment
- **Contenteditable div**: should replace text

### Common problems:

#### Problem: Context menu doesn't appear
**Solution**:
- Reload extension in `about:debugging`
- Check if text is selected before right-clicking
- Try on test page `test.html`

#### Problem: Menu appears but nothing happens after clicking
**Solution**:
- Check console in Developer Tools (F12)
- Check if content script loaded
- Reload page and extension

#### Problem: Text is not replaced
**Solution**:
- In editable fields: make sure text is selected
- In non-editable areas: check clipboard (Ctrl+V)
- Check notifications in bottom-right corner

### Key code changes:

1. **Replaced `chrome` with `browser`** - Firefox uses `browser` API
2. **Improved text replacement logic** - better editable element detection
3. **Added debug logs** - easier problem tracking
4. **Fixed permissions** - added `clipboardWrite`

### Step-by-step testing:

1. **Load extension** in `about:debugging`
2. **Open `test.html`** in browser
3. **Open Developer Tools** (F12) → Console
4. **Select text**: "Example Text with ąćęłńóśźż"
5. **Right-click** → Case Converter Pro → choose option
6. **Check logs** in console
7. **Check result** (text replacement or clipboard)

### Expected console logs:
```
Case Converter Pro: Extension installed/reloaded
Context menu clicked: convertToCamelCase Selected text: Example Text with ąćęłńóśźż
Sending message to content script: {action: "convertText", text: "Example Text with ąćęłńóśźż", format: "camelCase"}
Content script received message: {action: "convertText", text: "Example Text with ąćęłńóśźż", format: "camelCase"}
Original text: Example Text with ąćęłńóśźż
Converted text: exampleTextWithAcelnoszhz
```

If you don't see these logs, there's a problem with communication between background script and content script.
