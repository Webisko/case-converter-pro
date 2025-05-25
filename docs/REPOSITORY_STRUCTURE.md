# 📁 GitHub Repository Structure

📖 [Wersja Polska](REPOSITORY_STRUCTURE_PL.md) | 🌍 English Version

## 🎯 Repository Preparation for GitHub

This document outlines the recommended structure for publishing the Case Converter Pro extension on GitHub.

## 📂 Recommended Repository Structure

```
case-converter-pro/
├── 📁 .github/
│   ├── 📁 workflows/
│   │   └── ci-cd.yml
│   └── 📁 ISSUE_TEMPLATE/
│       └── bug_report.md
├── 📁 _locales/
│   ├── 📁 en/
│   ├── 📁 pl/
│   ├── 📁 de/
│   ├── 📁 fr/
│   ├── 📁 es/
│   ├── 📁 it/
│   └── 📁 pt/
├── 📁 icons/
├── 📁 docs/
│   ├── INSTALLATION.md
│   ├── DEBUG.md
│   ├── PUBLICATION_GUIDE.md
│   ├── KEYBOARD_SHORTCUTS.md
│   └── 📁 images/
├── 📁 tests/
│   ├── test.html
│   ├── quick-test.html
│   └── test-functions.js
├── background.js
├── content.js
├── manifest.json
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
└── CHANGELOG.md
```

## 📋 Files to Include

### ✅ Core Extension Files
- `manifest.json` - Extension configuration
- `background.js` - Background script
- `content.js` - Content script
- `_locales/` - All 7 language folders
- `icons/` - All icon sizes (16, 32, 48, 96, 128px)

### ✅ Documentation (English versions)
- `README.md` - Main project documentation
- `CONTRIBUTING.md` - Contribution guidelines
- `docs/INSTALLATION.md` - Installation instructions
- `docs/DEBUG.md` - Debugging guide
- `docs/PUBLICATION_GUIDE.md` - Mozilla store publication guide
- `docs/KEYBOARD_SHORTCUTS.md` - Keyboard shortcuts reference

### ✅ Documentation (Polish versions - for reference)
- `README_PL.md`
- `CONTRIBUTING_PL.md`
- `docs/INSTALLATION_PL.md`
- `docs/DEBUG_PL.md`
- `docs/PUBLICATION_GUIDE_PL.md`

### ✅ Development Files
- `tests/` - All test files
- `.github/workflows/ci-cd.yml` - GitHub Actions CI/CD
- `.github/ISSUE_TEMPLATE/bug_report.md` - Bug report template
- `.gitignore` - Git ignore configuration
- `LICENSE` - MIT License file
- `CHANGELOG.md` - Version history

## 🚫 Files to Exclude

### ❌ Build/Development Artifacts
- `web-ext-artifacts/` - Build outputs
- `node_modules/` - NPM dependencies
- `package.json` - Only if not needed for development
- `package-lock.json` - NPM lock file

### ❌ Local Development Files
- `test-functions.js` - If using different testing framework
- `*.log` - Log files
- `*.tmp` - Temporary files
- Development-specific configuration files

### ❌ Publication Specific Files (move to docs/)
- `MOZILLA_SUBMISSION_PACKAGE_v2.3.md` - Move to docs/
- Internal planning documents

## 🌐 Repository Settings

### Repository Configuration
- **Name**: `case-converter-pro`
- **Description**: "Professional Firefox extension for text case conversion with 7-language support and advanced keyboard shortcuts"
- **Website**: Link to Mozilla Add-ons page (after publication)
- **Topics**: `firefox-extension`, `text-conversion`, `case-converter`, `webextension`, `developer-tools`, `multilingual`

### Branch Protection
- Protect `main` branch
- Require pull request reviews
- Require status checks to pass

### GitHub Features to Enable
- ✅ Issues
- ✅ Projects (for roadmap)
- ✅ Wiki (for extended documentation)
- ✅ Sponsorship (if desired)
- ✅ Discussions (for user feedback)

## 📝 Release Strategy

### Version Tagging
- Use semantic versioning (e.g., `v2.3.0`)
- Create releases for each Mozilla store submission
- Include detailed release notes

### Release Assets
- Include packaged `.zip` file
- Include source code archives
- Attach installation instructions

## 🔄 Continuous Integration

The repository includes GitHub Actions workflow for:
- **Linting**: ESLint code quality checks
- **Testing**: Automated test execution
- **Security**: Dependency vulnerability scanning
- **Build**: Package creation and validation
- **Deployment**: Automated release creation

## 📧 Community Engagement

### Issue Templates
- Bug reports with reproduction steps
- Feature requests with use cases
- Questions and support requests

### Contribution Guidelines
- Code of conduct
- Development setup instructions
- Pull request guidelines
- Coding standards

---

**Ready for GitHub! 🚀** This structure ensures professional presentation and easy collaboration.
