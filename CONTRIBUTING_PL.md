# Współpraca przy Case Converter Pro

**📖 Wersja Polska | 🌍 [English Version](CONTRIBUTING.md)**

## 🤝 Jak współpracować

Zachęcamy do współpracy przy rozwoju Case Converter Pro! Ten dokument zawiera wytyczne dotyczące współpracy przy projekcie.

### 🚀 Pierwsze kroki

1. **Zrób fork repozytorium** na GitHub
2. **Sklonuj swój fork** lokalnie:
   ```bash
   git clone https://github.com/twoja-nazwa/case-converter-pro.git
   cd case-converter-pro
   ```
3. **Zainstaluj zależności** (jeśli są):
   ```bash
   npm install
   ```

### 🛠️ Konfiguracja środowiska deweloperskiego

#### Wymagania
- **Firefox Developer Edition** (zalecane do testowania)
- **Node.js** (do lintowania i pakowania)
- **web-ext** CLI tool:
  ```bash
  npm install -g web-ext
  ```

#### Ładowanie rozszerzenia w trybie deweloperskim
1. Otwórz Firefox Developer Edition
2. Przejdź do `about:debugging#/runtime/this-firefox`
3. Kliknij **"Załaduj tymczasowy dodatek..."**
4. Wybierz plik `manifest.json` z głównego katalogu projektu

### 📝 Wytyczne deweloperskie

#### Styl kodu
- Używaj nowoczesnych funkcji JavaScript (ES6+)
- Przestrzegaj najlepszych praktyk Mozilla WebExtension
- Używaj znaczących nazw zmiennych i funkcji
- Dodawaj komentarze do złożonej logiki

#### Struktura plików
```
case-converter-pro/
├── manifest.json           # Konfiguracja rozszerzenia
├── background.js           # Script w tle (menu kontekstowe)
├── content.js             # Script treści (manipulacja tekstu)
├── icons/                 # Ikony rozszerzenia
├── _locales/             # Pliki internacjonalizacji
│   ├── en/               # Angielski (domyślny)
│   ├── pl/               # Polski
│   ├── de/               # Niemiecki
│   ├── fr/               # Francuski
│   ├── es/               # Hiszpański
│   ├── it/               # Włoski
│   └── pt/               # Portugalski
├── docs/                 # Dokumentacja
├── tests/                # Pliki testowe
└── web-ext-artifacts/    # Zbudowane pakiety (ignorowane przez git)
```

### 🌍 Dodawanie nowych języków

Aby dodać obsługę nowego języka:

1. **Utwórz katalog języka**:
   ```bash
   mkdir _locales/xx  # gdzie xx to kod języka
   ```

2. **Skopiuj angielskie komunikaty**:
   ```bash
   cp _locales/en/messages.json _locales/xx/messages.json
   ```

3. **Przetłumacz wszystkie komunikaty** w nowym pliku

4. **Przetestuj nowy język**:
   - Ustaw język Firefox na nowy język
   - Przeładuj rozszerzenie
   - Sprawdź czy wszystkie elementy interfejsu są przetłumaczone

### 🧪 Testowanie

#### Testowanie manualne
1. **Załaduj rozszerzenie** w Firefox Developer Edition
2. **Otwórz stronę testową**: `tests/test.html`
3. **Przetestuj wszystkie typy konwersji** z różnymi tekstami
4. **Przetestuj skróty klawiszowe** (zobacz `KEYBOARD_SHORTCUTS_TESTING.md`)
5. **Przetestuj w różnych językach**

#### Testowanie automatyczne
```bash
# Sprawdź rozszerzenie
web-ext lint

# Zbuduj pakiet
web-ext build

# Uruchom z automatycznym przeładowaniem
web-ext run --firefox-binary="/ścieżka/do/firefox-developer-edition"
```

### 🐛 Zgłaszanie błędów

Przy zgłaszaniu błędów, proszę podać:

1. **Wersję Firefox** i platformę (Windows/macOS/Linux)
2. **Wersję rozszerzenia**
3. **Kroki do odtworzenia** błędu
4. **Oczekiwane zachowanie** vs **faktyczne zachowanie**
5. **Błędy w konsoli** (jeśli są) z Developer Tools

### 💡 Propozycje funkcji

Przed zaproponowaniem nowych funkcji:

1. **Sprawdź istniejące issues** aby uniknąć duplikatów
2. **Opisz przypadek użycia** jasno
3. **Wyjaśnij jak pasuje** do celu rozszerzenia
4. **Rozważ wpływ** na internacjonalizację

### 📋 Proces Pull Request

1. **Utwórz branch funkcji**:
   ```bash
   git checkout -b feature/nazwa-twojej-funkcji
   ```

2. **Wprowadź zmiany** zgodnie z powyższymi wytycznymi

3. **Przetestuj dokładnie**:
   - Testowanie manualne w Firefox
   - Walidacja lint: `web-ext lint`
   - Test z wieloma językami

4. **Zaktualizuj dokumentację** jeśli potrzeba

5. **Commituj z jasnymi komunikatami**:
   ```bash
   git commit -m "Dodaj: Nowy skrót klawiszowy dla konwersji zdaniowej"
   ```

6. **Wypchnij i utwórz pull request**:
   ```bash
   git push origin feature/nazwa-twojej-funkcji
   ```

### 🔄 Proces wydania

Dla maintainerów:

1. **Zaktualizuj wersję** w `manifest.json` i `package.json`
2. **Zaktualizuj changelog** w plikach README
3. **Przetestuj dokładnie** we wszystkich obsługiwanych językach
4. **Zbuduj finalny pakiet**: `web-ext build`
5. **Utwórz release na GitHub** z załączonym pakietem
6. **Wyślij do Mozilla Add-ons Store** (jeśli dotyczy)

### 📖 Dokumentacja

- Utrzymuj pliki README aktualne w języku angielskim i polskim
- Aktualizuj przewodnik skrótów klawiszowych dla nowych skrótów
- Utrzymuj komentarze w kodzie dla złożonych funkcji
- Aktualizuj ten przewodnik współpracy gdy potrzeba

### 📞 Uzyskiwanie pomocy

- **GitHub Issues**: Dla błędów i propozycji funkcji
- **Discussions**: Dla ogólnych pytań o rozwój
- **Email**: Dla kwestii związanych z bezpieczeństwem

## 🙏 Dziękujemy

Dziękujemy za współpracę przy Case Converter Pro! Twój wkład pomaga uczynić to rozszerzenie lepszym dla użytkowników na całym świecie.

---

### Kodeks postępowania

Ten projekt jest zgodny z [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). Uczestnicząc, oczekuje się przestrzegania tego kodeksu.
