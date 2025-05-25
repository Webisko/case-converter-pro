# Changelog

All notable changes to Case Converter Pro will be documented in this file.

📖 [Wersja Polska](CHANGELOG_PL.md) | 🌍 English Version

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2024-12-19

### 🎉 New Features
- **Advanced Keyboard Shortcuts**: Added comprehensive keyboard shortcuts for all conversion functions
  - Basic conversions: `Ctrl+Shift+U/L/T/S/A/I`
  - Programming formats: `Ctrl+Alt+C/P/N/K/O/D`
  - Special functions: `Ctrl+Z` (undo), `Ctrl+Shift+F` (cycle), `Ctrl+Shift+G` (smart suggestion), `Ctrl+Shift+H` (help)
- **Expanded Language Support**: Added Italian (IT) and Portuguese (PT) localizations
- **Enhanced Notifications**: Improved animated notifications with better feedback
- **Smart Format Detection**: Intelligent suggestions based on selected text
- **Format Cycling**: Quick cycling through different format options
- **Help System**: Built-in help dialog with keyboard shortcuts reference

### 🔧 Improvements
- **Performance Optimization**: Improved text processing speed
- **Better Error Handling**: Enhanced error messages and fallback behaviors
- **Accessibility**: Improved keyboard navigation and screen reader support
- **Code Quality**: Refactored codebase for better maintainability

### 🌍 Localization
- **7 Languages Supported**: English, Polish, German, French, Spanish, Italian, Portuguese
- **Complete Translations**: All UI elements translated in all supported languages
- **Improved i18n**: Better handling of locale-specific character conversion

### 🐛 Bug Fixes
- Fixed context menu positioning issues
- Resolved character encoding problems in certain edge cases
- Fixed undo functionality in complex text selections
- Improved clipboard handling for non-editable content

## [2.2.0] - 2024-11-15

### 🎉 New Features
- **Undo System**: Added ability to undo last 10 text conversions with `Ctrl+Z`
- **Enhanced Context Menu**: Reorganized menu with better categorization and separators
- **Notification System**: Added animated success notifications
- **Smart Text Replacement**: Improved detection of editable fields

### 🔧 Improvements
- **Multilingual Support**: Added German (DE), French (FR), and Spanish (ES) localizations
- **Polish Character Handling**: Improved ASCII conversion for Polish characters (ą,ć,ę,ł,ń,ó,ś,ź,ż)
- **Menu Organization**: Hierarchical context menu with logical grouping

### 🌍 Localization
- **5 Languages**: English, Polish, German, French, Spanish
- **Automatic Language Detection**: Interface adapts to Firefox language settings

## [2.1.0] - 2024-10-28

### 🎉 New Features
- **Programming Case Formats**: Added support for developer-focused text formats
  - `camelCase` - for JavaScript/Java variables
  - `PascalCase` - for classes and constructors  
  - `snake_case` - for Python and database naming
  - `kebab-case` - for CSS classes and URLs
  - `CONSTANT_CASE` - for constants and environment variables
  - `dot.case` - for dot notation and configuration keys

### 🔧 Improvements
- **Smart Word Detection**: Intelligent parsing of camelCase and other formats
- **Enhanced Context Menu**: Added submenus for better organization
- **Code Quality**: Improved error handling and edge case management

## [2.0.0] - 2024-10-15

### 🎉 Major Release - Change Case Functions
- **Complete Case Conversion Suite**: Added comprehensive text case conversion tools
  - `UPPERCASE` - convert all text to capital letters
  - `lowercase` - convert all text to small letters
  - `Title Case` - Capitalize Each Word  
  - `Sentence case` - Only capitalize first letter
  - `aLtErNaTiNg CaSe` - alternating letter case
  - `iNVERSE cASE` - flip current capitalization

### 🔧 Technical Improvements
- **Background-Content Communication**: Implemented robust messaging system
- **Context Menu API**: Full integration with Firefox context menus
- **Cross-Platform Compatibility**: Enhanced support across different operating systems

### 🌍 Localization
- **Bilingual Support**: English and Polish interface
- **Cultural Adaptation**: Polish character support maintained

## [1.0.0] - 2024-09-20

### 🎉 Initial Release - URL-Friendly Text Conversion
- **Polish Character Conversion**: Convert Polish characters to ASCII equivalents
  - `ą → a`, `ć → c`, `ę → e`, `ł → l`, `ń → n`, `ó → o`, `ś → s`, `ź → z`, `ż → z`
- **URL-Friendly Formats**: 
  - Dash format: `kebab-case-example`
  - Underscore format: `snake_case_example`
- **Context Menu Integration**: Right-click menu for selected text
- **Smart Replacement**: Automatic replacement in editable fields
- **Clipboard Support**: Copy to clipboard for non-editable content

### 🔧 Core Features
- **Firefox WebExtension**: Manifest V2 compliance
- **Minimal Permissions**: Only essential permissions requested
- **Clean Architecture**: Separation of background and content scripts

---

## 🔮 Planned Features (Future Releases)

### v2.4.0 (Planned)
- **Custom Shortcuts**: User-defined keyboard shortcuts
- **Batch Processing**: Multiple text selection conversion
- **Format Presets**: Save frequently used format combinations
- **Advanced Undo**: Enhanced undo with preview

### v2.5.0 (Planned)  
- **More Languages**: Additional language localizations
- **Custom Formats**: User-defined conversion patterns
- **Export/Import**: Settings backup and restore
- **Statistics**: Usage analytics and insights

---

## 📝 Notes

- All versions are available on [Mozilla Add-ons Store](https://addons.mozilla.org/firefox/addon/case-converter-pro/)
- Source code available on [GitHub](https://github.com/webisko/case-converter-pro)
- Feedback and bug reports welcome via GitHub Issues

## 🙏 Acknowledgments

- Thanks to the Firefox WebExtensions community
- Special thanks to all beta testers and contributors
- Inspired by similar tools and user feedback
