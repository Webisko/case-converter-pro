# Case Converter Pro v2.3 - Firefox Extension

Professional Firefox Developer Edition extension for text case conversion and programming formats with Polish character support and advanced keyboard shortcuts.

> **🚀 Ready for Firefox Add-ons Store publication!** 
> Extension meets all Mozilla requirements and is prepared for distribution in the official Firefox Add-ons store.

---

**📖 [Wersja Polska](README_PL.md) | 🌍 English Version**

## 🆕 What's New in Version 2.3

### ⌨️ Advanced Keyboard Shortcuts
- **Basic conversions (Ctrl+Shift+...):**
  - `U` - UPPERCASE
  - `L` - lowercase
  - `T` - Title Case
  - `S` - Sentence case
  - `A` - aLtErNaTiNg CaSe
  - `I` - iNVERTED cASE

- **Programming formats (Ctrl+Alt+...):**
  - `C` - camelCase
  - `P` - PascalCase
  - `N` - snake_case
  - `K` - kebab-case
  - `O` - CONSTANT_CASE
  - `D` - dot.case

- **Special functions:**
  - `Ctrl+Z` - Undo last change
  - `Ctrl+Shift+F` - Cycle through formats
  - `Ctrl+Shift+G` - Smart format suggestion
  - `Ctrl+Shift+H` - Show shortcuts help

### 🌍 Extended Language Support
- **7 interface languages:** Polish (PL), English (EN), German (DE), French (FR), Spanish (ES), Italian (IT), Portuguese (PT)
- **Automatic language detection** based on browser settings
- **Default language:** English (fallback for unsupported languages)

### 🎨 Enhanced Notifications
- **Smooth animations** - slide-in from bottom-right corner
- **Modern design** - improved fonts and colors
- **Bottom-right position** - less intrusive for users

## All Features (Previous Versions)

### ↶ Undo Changes (Ctrl+Z)
- **Automatic saving** of up to 10 recent conversions
- **Ctrl+Z keyboard shortcut** for quick undo
- **Context menu option** "Undo last change"
- **Smart detection** of active editable fields

### 🌐 Multilingual Support
- **7 interface languages:** Polish, English, German, French, Spanish, Italian, Portuguese
- **Automatic language detection** based on browser settings
- **Localized messages** and notifications
- **Default language:** English (fallback for unsupported languages)

## Features

### 🔤 Case Conversion
- **UPPERCASE** - convert entire text to uppercase
- **lowercase** - convert entire text to lowercase
- **Title Case** - capitalize first letter of each word
- **Sentence case** - only first letter capitalized
- **aLtErNaTiNg CaSe** - alternating lowercase and uppercase letters
- **iNVERTED cASE** - invert current letter cases

### 💻 For Developers
- **camelCase** - for JavaScript/Java variables
- **PascalCase** - for classes and constructors
- **snake_case** - for Python and databases
- **kebab-case** - for CSS and URLs
- **CONSTANT_CASE** - for constants
- **dot.case** - dot-separated format

### Access via Context Menu
- **Select text** and right-click
- **Automatic replacement** in editable fields
- **Copy to clipboard** for non-editable areas
- **Polish character support** in all formats

## Usage Examples

### Case Conversion
| Input Text | Result |
|------------|--------|
| `Example Text` | **UPPERCASE:** `EXAMPLE TEXT` |
| `Example Text` | **lowercase:** `example text` |
| `example text` | **Title Case:** `Example Text` |
| `EXAMPLE TEXT` | **Sentence case:** `Example text` |
| `Example Text` | **aLtErNaTiNg:** `eXaMpLe tExT` |
| `Example Text` | **iNVERTED:** `eXAMPLE tEXT` |

### Programming Formats (with Polish characters)
| Input Text | Result |
|------------|--------|
| `My JavaScript Function ąćęłńóśźż` | **camelCase:** `myJavaScriptFunctionAcelnoszz` |
| `my javascript function` | **PascalCase:** `MyJavascriptFunction` |
| `My JavaScript Function` | **snake_case:** `my_java_script_function` |
| `My JavaScript Function` | **kebab-case:** `my-java-script-function` |
| `my function` | **CONSTANT_CASE:** `MY_FUNCTION` |
| `my function` | **dot.case:** `my.function` |

## Installation

### Development Installation (Firefox Developer Edition)

1. Open Firefox Developer Edition
2. Type in address bar: `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on..."**
4. Select the `manifest.json` file from this folder
5. Extension will be loaded and active until browser is closed

### Permanent Installation (requires signing)

For permanent extension functionality, it must be signed by Mozilla through:
1. Publication in Firefox Add-ons Store
2. Self-distribution with developer signature

## Usage

1. **Select text** on any webpage
2. **Right-click** on selected text
3. Choose **"Case Converter Pro"** from context menu
4. Select category and conversion option:

### 🔤 Case Conversion
- **UPPERCASE, lowercase, Title Case, Sentence case**
- **aLtErNaTiNg CaSe, iNVERTED cASE**

### 💻 For Developers
- **camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case**

### Extension Behavior:

- **In editable fields** (input, textarea, contenteditable): text will be automatically replaced
- **In non-editable areas**: converted text will be copied to clipboard
- **Notification**: confirmation message will appear

### 🔄 Undo Changes (Ctrl+Z)
- **Keyboard shortcut:** Press `Ctrl+Z` after conversion
- **Context menu:** Select "↶ Undo last change"
- **Automatic saving:** Up to 10 recent operations
- **Smart detection:** Only works when previous change was in current field

### 🌍 Change Interface Language
Extension automatically detects language based on Firefox browser settings:
- Go to `about:preferences#general`
- In "Language" section set preferred language
- Available languages: Polish, English, German, French, Spanish, Italian, Portuguese
- Browser restart may be required

## Testing

Open the `test.html` file in your browser to test all extension features with different text field types and formats.

## Project Structure

```
firefox-text-converter/
├── manifest.json       # Extension configuration
├── background.js       # Background script - context menu handling
├── content.js          # Content script - text conversion on page
├── _locales/          # Localization files (PL, EN, DE, FR, ES, IT, PT)
│   ├── pl/messages.json    # Polish
│   ├── en/messages.json    # English
│   ├── de/messages.json    # German
│   ├── fr/messages.json    # French
│   ├── es/messages.json    # Spanish
│   ├── it/messages.json    # Italian
│   └── pt/messages.json    # Portuguese
├── icons/              # Extension icons
├── README.md           # This file
└── package.json        # npm configuration (optional)
```

## Development

### Requirements
- Firefox Developer Edition
- Basic JavaScript knowledge

### Testing
1. Load extension in development mode
2. Visit any website
3. Select text and test context menu functionality

### Debugging
- Open **Developer Tools** (F12)
- Go to **Console** tab to see potential errors
- Use `about:debugging` to inspect extension

## License

MIT License - you can freely use and modify the code.

## Author

Created for text conversion to URL-friendly format with Polish character support.
