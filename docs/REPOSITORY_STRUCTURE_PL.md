# 📁 Struktura Repozytorium GitHub

📖 [English Version](REPOSITORY_STRUCTURE.md) | 🌍 Wersja Polska

## 🎯 Przygotowanie repozytorium dla GitHub

Ten dokument przedstawia zalecaną strukturę do publikacji rozszerzenia Case Converter Pro na GitHub.

## 📂 Zalecana struktura repozytorium

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

## 📋 Pliki do uwzględnienia

### ✅ Podstawowe pliki rozszerzenia
- `manifest.json` - Konfiguracja rozszerzenia
- `background.js` - Skrypt tła
- `content.js` - Skrypt treści
- `_locales/` - Wszystkie 7 folderów językowych
- `icons/` - Wszystkie rozmiary ikon (16, 32, 48, 96, 128px)

### ✅ Dokumentacja (wersje angielskie)
- `README.md` - Główna dokumentacja projektu
- `CONTRIBUTING.md` - Wytyczne dla współtwórców
- `docs/INSTALLATION.md` - Instrukcje instalacji
- `docs/DEBUG.md` - Przewodnik debugowania
- `docs/PUBLICATION_GUIDE.md` - Przewodnik publikacji w Mozilla store
- `docs/KEYBOARD_SHORTCUTS.md` - Dokumentacja skrótów klawiszowych

### ✅ Dokumentacja (wersje polskie - dla referencji)
- `README_PL.md`
- `CONTRIBUTING_PL.md`
- `docs/INSTALLATION_PL.md`
- `docs/DEBUG_PL.md`
- `docs/PUBLICATION_GUIDE_PL.md`

### ✅ Pliki deweloperskie
- `tests/` - Wszystkie pliki testowe
- `.github/workflows/ci-cd.yml` - GitHub Actions CI/CD
- `.github/ISSUE_TEMPLATE/bug_report.md` - Szablon zgłoszenia błędu
- `.gitignore` - Konfiguracja Git ignore
- `LICENSE` - Plik licencji MIT
- `CHANGELOG.md` - Historia wersji

## 🚫 Pliki do wykluczenia

### ❌ Artefakty build/development
- `web-ext-artifacts/` - Wyniki buildów
- `node_modules/` - Zależności NPM
- `package.json` - Tylko jeśli niepotrzebny do developmentu
- `package-lock.json` - Plik blokady NPM

### ❌ Pliki lokalnego developmentu
- `test-functions.js` - Jeśli używasz innego frameworka testowego
- `*.log` - Pliki logów
- `*.tmp` - Pliki tymczasowe
- Pliki konfiguracyjne specyficzne dla developmentu

### ❌ Pliki specyficzne dla publikacji (przenieś do docs/)
- `MOZILLA_SUBMISSION_PACKAGE_v2.3.md` - Przenieś do docs/
- Wewnętrzne dokumenty planowania

## 🌐 Ustawienia repozytorium

### Konfiguracja repozytorium
- **Nazwa**: `case-converter-pro`
- **Opis**: "Professional Firefox extension for text case conversion with 7-language support and advanced keyboard shortcuts"
- **Strona**: Link do strony Mozilla Add-ons (po publikacji)
- **Tematy**: `firefox-extension`, `text-conversion`, `case-converter`, `webextension`, `developer-tools`, `multilingual`

### Ochrona branchy
- Chroń branch `main`
- Wymagaj recenzji pull requestów
- Wymagaj pomyślnych testów statusu

### Funkcje GitHub do włączenia
- ✅ Issues
- ✅ Projects (dla roadmapy)
- ✅ Wiki (dla rozszerzonej dokumentacji)
- ✅ Sponsorship (jeśli chcesz)
- ✅ Discussions (dla opinii użytkowników)

## 📝 Strategia wydań

### Tagowanie wersji
- Używaj wersjonowania semantycznego (np. `v2.3.0`)
- Twórz release'y dla każdego przesłania do Mozilla store
- Dołączaj szczegółowe notatki o wydaniu

### Zasoby wydania
- Dołączaj spakowany plik `.zip`
- Dołączaj archiwa kodu źródłowego
- Załączaj instrukcje instalacji

## 🔄 Continuous Integration

Repozytorium zawiera workflow GitHub Actions dla:
- **Linting**: Kontrola jakości kodu ESLint
- **Testing**: Automatyczne wykonywanie testów
- **Security**: Skanowanie luk w zależnościach
- **Build**: Tworzenie i walidacja pakietów
- **Deployment**: Automatyczne tworzenie release'ów

## 📧 Zaangażowanie społeczności

### Szablony Issues
- Raporty błędów z krokami reprodukcji
- Prośby o funkcje z przypadkami użycia
- Pytania i prośby o wsparcie

### Wytyczne dla współtwórców
- Kodeks postępowania
- Instrukcje konfiguracji developmentu
- Wytyczne pull requestów
- Standardy kodowania

---

**Gotowe dla GitHub! 🚀** Ta struktura zapewnia profesjonalną prezentację i łatwą współpracę.
