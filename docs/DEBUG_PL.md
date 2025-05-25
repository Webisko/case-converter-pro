# Instrukcje debugowania rozszerzenia Case Converter Pro

**📖 Wersja Polska | 🌍 [English Version](DEBUG.md)**

## Problem: Rozszerzenie nie działa

### Kroki rozwiązywania problemów:

#### 1. Sprawdź czy rozszerzenie jest załadowane
1. Otwórz `about:debugging` w Firefox
2. Kliknij "Ten Firefox"
3. Sprawdź czy "Case Converter Pro" jest na liście
4. Jeśli nie ma - załaduj ponownie przez "Załaduj tymczasowy dodatek..."

#### 2. Przeładuj rozszerzenie po zmianach
1. W `about:debugging` znajdź "Case Converter Pro"
2. Kliknij przycisk **"Przeładuj"**
3. To ważne po każdej zmianie w kodzie!

#### 3. Sprawdź logi w konsoli
1. Otwórz stronę testową `test.html` (w tym folderze)
2. Naciśnij **F12** (Developer Tools)
3. Przejdź do zakładki **"Console"**
4. Zaznacz tekst i użyj rozszerzenia
5. Sprawdź czy pojawiają się logi:
   - "Case Converter Pro: Extension installed/reloaded"
   - "Context menu clicked: convertToCamelCase"
   - "Content script otrzymał wiadomość:"

#### 4. Sprawdź menu kontekstowe
1. Zaznacz tekst na stronie
2. Kliknij prawym przyciskiem myszy
3. Sprawdź czy w menu jest **"Case Converter Pro"**
4. Sprawdź czy po najeżdżeniu pokazują się submenu

#### 5. Testuj na różnych elementach
- **Zwykły tekst**: powinien kopiować do schowka
- **Pole input**: powinien zastąpić tekst
- **Textarea**: powinien zastąpić zaznaczony fragment
- **Contenteditable div**: powinien zastąpić tekst

### Najczęstsze problemy:

#### Problem: Menu kontekstowe nie pojawia się
**Rozwiązanie**:
- Przeładuj rozszerzenie w `about:debugging`
- Sprawdź czy tekst jest zaznaczony przed kliknięciem prawym przyciskiem
- Spróbuj na stronie testowej `test.html`

#### Problem: Menu się pojawia, ale nic się nie dzieje po kliknięciu
**Rozwiązanie**:
- Sprawdź konsole w Developer Tools (F12)
- Sprawdź czy content script się załadował
- Przeładuj stronę i rozszerzenie

#### Problem: Tekst nie zostaje zastąpiony
**Rozwiązanie**:
- W polach edytowalnych: upewnij się że tekst jest zaznaczony
- W nieEdytowalnych obszarach: sprawdź schowek (Ctrl+V)
- Sprawdź powiadomienia w prawym dolnym rogu

### Kluczowe zmiany w kodzie:

1. **Zamieniono `chrome` na `browser`** - Firefox używa `browser` API
2. **Poprawiono logikę zamiany tekstu** - lepsze wykrywanie edytowalnych elementów
3. **Dodano logi debugowania** - łatwiejsze śledzenie problemów
4. **Poprawiono uprawnienia** - dodano `clipboardWrite`

### Testowanie krok po kroku:

1. **Załaduj rozszerzenie** w `about:debugging`
2. **Otwórz `test.html`** w przeglądarce
3. **Otwórz Developer Tools** (F12) → Console
4. **Zaznacz tekst**: "Przykładowy Tekst z ąćęłńóśźż"
5. **Kliknij prawym przyciskiem** → Case Converter Pro → wybierz opcję
6. **Sprawdź logi** w konsoli
7. **Sprawdź rezultat** (zamiana tekstu lub schowek)

### Oczekiwane logi w konsoli:
```
Case Converter Pro: Extension installed/reloaded
Context menu clicked: convertToCamelCase Selected text: Przykładowy Tekst z ąćęłńóśźż
Sending message to content script: {action: "convertText", text: "Przykładowy Tekst z ąćęłńóśźż", format: "camelCase"}
Content script otrzymał wiadomość: {action: "convertText", text: "Przykładowy Tekst z ąćęłńóśźż", format: "camelCase"}
Oryginalny tekst: Przykładowy Tekst z ąćęłńóśźż
Skonwertowany tekst: przykładowyTekstZAcelnoszhz
```

Jeśli nie widzisz tych logów, to znaczy że jest problem z komunikacją między background script a content script.
