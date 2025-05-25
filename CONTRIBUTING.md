# Contributing to Case Converter Pro

**📖 [Wersja Polska](CONTRIBUTING_PL.md) | 🌍 English Version**

## 🤝 How to Contribute

We welcome contributions to Case Converter Pro! This document provides guidelines for contributing to the project.

### 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/case-converter-pro.git
   cd case-converter-pro
   ```
3. **Install dependencies** (if any):
   ```bash
   npm install
   ```

### 🛠️ Development Setup

#### Prerequisites
- **Firefox Developer Edition** (recommended for testing)
- **Node.js** (for linting and packaging)
- **web-ext** CLI tool:
  ```bash
  npm install -g web-ext
  ```

#### Loading the Extension for Development
1. Open Firefox Developer Edition
2. Go to `about:debugging#/runtime/this-firefox`
3. Click **"Load Temporary Add-on..."**
4. Select the `manifest.json` file from the project root

### 📝 Development Guidelines

#### Code Style
- Use modern JavaScript (ES6+) features
- Follow Mozilla WebExtension best practices
- Use meaningful variable and function names
- Add comments for complex logic

#### File Structure
```
case-converter-pro/
├── manifest.json           # Extension configuration
├── background.js           # Background script (context menu)
├── content.js             # Content script (text manipulation)
├── icons/                 # Extension icons
├── _locales/             # Internationalization files
│   ├── en/               # English (default)
│   ├── pl/               # Polish
│   ├── de/               # German
│   ├── fr/               # French
│   ├── es/               # Spanish
│   ├── it/               # Italian
│   └── pt/               # Portuguese
├── docs/                 # Documentation
├── tests/                # Test files
└── web-ext-artifacts/    # Built packages (git-ignored)
```

### 🌍 Adding New Languages

To add support for a new language:

1. **Create language directory**:
   ```bash
   mkdir _locales/xx  # where xx is the language code
   ```

2. **Copy English messages**:
   ```bash
   cp _locales/en/messages.json _locales/xx/messages.json
   ```

3. **Translate all messages** in the new file

4. **Test the new language**:
   - Set Firefox language to the new language
   - Reload the extension
   - Verify all interface elements are translated

### 🧪 Testing

#### Manual Testing
1. **Load extension** in Firefox Developer Edition
2. **Open test page**: `tests/test.html`
3. **Test all conversion types** with various text inputs
4. **Test keyboard shortcuts** (see `KEYBOARD_SHORTCUTS_TESTING.md`)
5. **Test in different languages**

#### Automated Testing
```bash
# Lint the extension
web-ext lint

# Build the package
web-ext build

# Run with automatic reload
web-ext run --firefox-binary="/path/to/firefox-developer-edition"
```

### 🐛 Reporting Issues

When reporting issues, please include:

1. **Firefox version** and platform (Windows/macOS/Linux)
2. **Extension version**
3. **Steps to reproduce** the issue
4. **Expected behavior** vs **actual behavior**
5. **Console errors** (if any) from Developer Tools

### 💡 Feature Requests

Before suggesting new features:

1. **Check existing issues** to avoid duplicates
2. **Describe the use case** clearly
3. **Explain how it fits** with the extension's purpose
4. **Consider internationalization** impact

### 📋 Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test thoroughly**:
   - Manual testing in Firefox
   - Lint validation: `web-ext lint`
   - Test with multiple languages

4. **Update documentation** if needed

5. **Commit with clear messages**:
   ```bash
   git commit -m "Add: New keyboard shortcut for sentence case conversion"
   ```

6. **Push and create pull request**:
   ```bash
   git push origin feature/your-feature-name
   ```

### 🔄 Release Process

For maintainers:

1. **Update version** in `manifest.json` and `package.json`
2. **Update changelog** in README files
3. **Test thoroughly** across all supported languages
4. **Build final package**: `web-ext build`
5. **Create GitHub release** with package attachment
6. **Submit to Mozilla Add-ons Store** (if applicable)

### 📖 Documentation

- Keep README files updated in both English and Polish
- Update keyboard shortcuts guide for new shortcuts
- Maintain code comments for complex functions
- Update this contributing guide as needed

### 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions about development
- **Email**: For security-related issues

## 🙏 Thank You

Thank you for contributing to Case Converter Pro! Your contributions help make this extension better for users worldwide.

---

### Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.
