# Historia Zmian

Wszystkie istotne zmiany w Case Converter Pro są dokumentowane w tym pliku.

📖 [English Version](CHANGELOG.md) | 🌍 Wersja Polska

Format bazuje na [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
a projekt stosuje się do [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.3.0] - 2024-12-19

### 🎉 Nowe Funkcje
- **Zaawansowane Skróty Klawiszowe**: Dodano kompleksowe skróty klawiszowe dla wszystkich funkcji konwersji
  - Podstawowe konwersje: `Ctrl+Shift+U/L/T/S/A/I`
  - Formaty programistyczne: `Ctrl+Alt+C/P/N/K/O/D`
  - Funkcje specjalne: `Ctrl+Z` (cofnij), `Ctrl+Shift+F` (przełączaj), `Ctrl+Shift+G` (inteligentne sugestie), `Ctrl+Shift+H` (pomoc)
- **Rozszerzone Wsparcie Językowe**: Dodano lokalizacje włoską (IT) i portugalską (PT)
- **Ulepszone Powiadomienia**: Poprawiono animowane powiadomienia z lepszym feedbackiem
- **Inteligentne Wykrywanie Formatów**: Inteligentne sugestie bazujące na zaznaczonym tekście
- **Przełączanie Formatów**: Szybkie przełączanie między różnymi opcjami formatowania
- **System Pomocy**: Wbudowane okno pomocy z dokumentacją skrótów klawiszowych

### 🔧 Ulepszenia
- **Optymalizacja Wydajności**: Poprawiono szybkość przetwarzania tekstu
- **Lepsze Obsługiwanie Błędów**: Ulepszone komunikaty błędów i zachowania fallback
- **Dostępność**: Poprawiono nawigację klawiaturą i wsparcie czytników ekranu
- **Jakość Kodu**: Refaktoryzacja kodu dla lepszej utrzymywalności

### 🌍 Lokalizacja
- **7 Obsługiwanych Języków**: Angielski, Polski, Niemiecki, Francuski, Hiszpański, Włoski, Portugalski
- **Kompletne Tłumaczenia**: Wszystkie elementy UI przetłumaczone we wszystkich obsługiwanych językach
- **Ulepszone i18n**: Lepsze obsługiwanie konwersji znaków specyficznych dla locale

### 🐛 Poprawki Błędów
- Naprawiono problemy z pozycjonowaniem menu kontekstowego
- Rozwiązano problemy z kodowaniem znaków w niektórych przypadkach brzegowych
- Naprawiono funkcjonalność cofania w złożonych zaznaczeniach tekstu
- Poprawiono obsługę schowka dla nieeditowalnej zawartości

## [2.2.0] - 2024-11-15

### 🎉 Nowe Funkcje
- **System Cofania**: Dodano możliwość cofnięcia ostatnich 10 konwersji tekstu za pomocą `Ctrl+Z`
- **Ulepszone Menu Kontekstowe**: Reorganizacja menu z lepszą kategoryzacją i separatorami
- **System Powiadomień**: Dodano animowane powiadomienia o sukcesie
- **Inteligentne Zastępowanie Tekstu**: Poprawiono wykrywanie pól edytowalnych

### 🔧 Ulepszenia
- **Wsparcie Wielojęzyczne**: Dodano lokalizacje niemiecką (DE), francuską (FR) i hiszpańską (ES)
- **Obsługa Polskich Znaków**: Poprawiono konwersję ASCII dla polskich znaków (ą,ć,ę,ł,ń,ó,ś,ź,ż)
- **Organizacja Menu**: Hierarchiczne menu kontekstowe z logicznym grupowaniem

### 🌍 Lokalizacja
- **5 Języków**: Angielski, Polski, Niemiecki, Francuski, Hiszpański
- **Automatyczne Wykrywanie Języka**: Interfejs dostosowuje się do ustawień języka Firefox

## [2.1.0] - 2024-10-28

### 🎉 Nowe Funkcje
- **Formaty Programistyczne**: Dodano wsparcie dla formatów tekstu zorientowanych na developerów
  - `camelCase` - dla zmiennych JavaScript/Java
  - `PascalCase` - dla klas i konstruktorów
  - `snake_case` - dla nazewnictwa Python i baz danych
  - `kebab-case` - dla klas CSS i URLi
  - `CONSTANT_CASE` - dla stałych i zmiennych środowiskowych
  - `dot.case` - dla notacji kropkowej i kluczy konfiguracyjnych

### 🔧 Ulepszenia
- **Inteligentne Wykrywanie Słów**: Inteligentne parsowanie camelCase i innych formatów
- **Ulepszone Menu Kontekstowe**: Dodano podmenu dla lepszej organizacji
- **Jakość Kodu**: Poprawiono obsługę błędów i zarządzanie przypadkami brzegowymi

## [2.0.0] - 2024-10-15

### 🎉 Główne Wydanie - Funkcje Change Case
- **Kompletny Zestaw Konwersji Wielkości Liter**: Dodano kompleksowe narzędzia do konwersji wielkości liter
  - `WIELKIE LITERY` - konwertuj cały tekst na duże litery
  - `małe litery` - konwertuj cały tekst na małe litery
  - `Każde Słowo Wielką Literą` - Każde Słowo Wielką Literą
  - `Zdaniowa wielka litera` - Tylko pierwsza litera wielka
  - `nApRzEmIeNnE lItErY` - naprzemienne wielkości liter
  - `oDWRÓCONA wIELKOŚĆ` - odwróć obecną kapitalizację

### 🔧 Ulepszenia Techniczne
- **Komunikacja Background-Content**: Zaimplementowano solidny system komunikatów
- **API Menu Kontekstowego**: Pełna integracja z menu kontekstowymi Firefox
- **Kompatybilność Cross-Platform**: Ulepszone wsparcie na różnych systemach operacyjnych

### 🌍 Lokalizacja
- **Wsparcie Dwujęzyczne**: Interfejs angielski i polski
- **Adaptacja Kulturowa**: Zachowano wsparcie dla polskich znaków

## [1.0.0] - 2024-09-20

### 🎉 Pierwsze Wydanie - Konwersja Tekstu URL-Friendly
- **Konwersja Polskich Znaków**: Konwertuj polskie znaki na odpowiedniki ASCII
  - `ą → a`, `ć → c`, `ę → e`, `ł → l`, `ń → n`, `ó → o`, `ś → s`, `ź → z`, `ż → z`
- **Formaty URL-Friendly**:
  - Format z myślnikami: `kebab-case-przyklad`
  - Format z podkreśleniami: `snake_case_przyklad`
- **Integracja Menu Kontekstowego**: Menu prawego przycisku dla zaznaczonego tekstu
- **Inteligentne Zastępowanie**: Automatyczne zastępowanie w polach edytowalnych
- **Wsparcie Schowka**: Kopiowanie do schowka dla nieeditowalnej zawartości

### 🔧 Podstawowe Funkcje
- **Firefox WebExtension**: Zgodność z Manifest V2
- **Minimalne Uprawnienia**: Tylko niezbędne uprawnienia
- **Czysta Architektura**: Separacja skryptów background i content

---

## 🔮 Planowane Funkcje (Przyszłe Wydania)

### v2.4.0 (Planowane)
- **Niestandardowe Skróty**: Skróty klawiszowe definiowane przez użytkownika
- **Przetwarzanie Wsadowe**: Konwersja wielu zaznaczonych tekstów
- **Presety Formatów**: Zapisywanie często używanych kombinacji formatów
- **Zaawansowane Cofanie**: Ulepszone cofanie z podglądem

### v2.5.0 (Planowane)
- **Więcej Języków**: Dodatkowe lokalizacje językowe
- **Niestandardowe Formaty**: Wzorce konwersji definiowane przez użytkownika
- **Eksport/Import**: Backup i przywracanie ustawień
- **Statystyki**: Analityka użycia i wglądy

---

## 📝 Notatki

- Wszystkie wersje dostępne w [Mozilla Add-ons Store](https://addons.mozilla.org/firefox/addon/case-converter-pro/)
- Kod źródłowy dostępny na [GitHub](https://github.com/webisko/case-converter-pro)
- Feedback i raporty błędów mile widziane przez GitHub Issues

## 🙏 Podziękowania

- Dziękujemy społeczności Firefox WebExtensions
- Specjalne podziękowania dla wszystkich beta testerów i współtwórców
- Inspirowane podobnymi narzędziami i opiniami użytkowników
