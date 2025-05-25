# Instrukcja instalacji rozszerzenia Firefox

**📖 Wersja Polska | 🌍 [English Version](INSTALL.md)**

## Krok po kroku - instalacja w Firefox Developer Edition

### 1. Przygotowanie
- Upewnij się, że masz zainstalowany **Firefox Developer Edition**
- Pobierz lub sklonuj ten projekt do lokalnego folderu

### 2. Instalacja rozszerzenia
1. Otwórz **Firefox Developer Edition**
2. W pasku adresu wpisz: `about:debugging`
3. Kliknij **"Ten Firefox"** (This Firefox) w lewym menu
4. Kliknij przycisk **"Załaduj tymczasowy dodatek..."** (Load Temporary Add-on...)
5. Przejdź do folderu z rozszerzeniem i wybierz plik **`manifest.json`**
6. Kliknij **"Otwórz"**

### 3. Potwierdzenie instalacji
- Rozszerzenie pojawi się na liście zainstalowanych dodatków
- Nazwa: **"Case Converter Pro"**
- Status: **"Tymczasowy"** (usunie się po zamknięciu przeglądarki)

### 4. Testowanie
1. Przejdź na dowolną stronę internetową
2. Zaznacz tekst zawierający polskie znaki, np: **"Przykładowy tekst z ąćęłńóśźż"**
3. Kliknij prawym przyciskiem myszy na zaznaczonym tekście
4. W menu kontekstowym powinien pojawić się **"Case Converter Pro"** z opcjami konwersji

### 5. Przykład użycia
- **Tekst wejściowy**: "Mój Przykładowy Artykuł"
- **camelCase**: "mójPrzykładowyArtykuł"
- **kebab-case**: "mój-przykładowy-artykuł"
- **snake_case**: "mój_przykładowy_artykuł"

## Rozwiązywanie problemów

### Rozszerzenie nie pojawia się w menu
- Sprawdź czy rozszerzenie jest aktywne w `about:debugging`
- Upewnij się, że zaznaczasz tekst przed kliknięciem prawym przyciskiem
- Spróbuj odświeżyć stronę (F5)

### Błędy w konsoli
- Otwórz Developer Tools (F12)
- Sprawdź zakładkę "Console" w poszukiwaniu błędów
- Jeśli są błędy, sprawdź czy wszystkie pliki są w odpowiednich lokalizacjach

### Tekst nie zostaje zastąpiony
- W edytowalnych polach: tekst zostanie zastąpiony automatycznie
- W nieEdytowalnych obszarach: tekst zostanie skopiowany do schowka
- Sprawdź powiadomienia w prawym dolnym rogu strony

## Uwagi dotyczące rozwoju

### Tryb deweloperski vs. produkcyjny
- **Tymczasowy dodatek**: usuwa się po zamknięciu przeglądarki
- **Stała instalacja**: wymaga podpisania przez Mozilla

### Modyfikacje kodu
Po każdej zmianie w kodzie:
1. Idź do `about:debugging`
2. Kliknij **"Przeładuj"** (Reload) przy rozszerzeniu
3. Odśwież strony testowe

### Debugging
- Użyj `console.log()` w content.js i background.js
- Sprawdzaj błędy w Developer Tools
- Testuj na różnych typach stron i elementów

## Potrzebna pomoc?

Jeśli masz problemy z instalacją lub działaniem rozszerzenia, sprawdź:
1. Czy używasz Firefox Developer Edition (nie zwykły Firefox)
2. Czy wszystkie pliki są w odpowiednich lokalizacjach
3. Czy w konsoli nie ma błędów JavaScript
