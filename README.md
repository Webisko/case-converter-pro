# Case Converter Pro v2.3 - Rozszerzenie Firefox

Profesjonalne rozszerzenie Firefox Developer Edition do konwersji wielkości liter i formatów programistycznych z obsługą polskich znaków i zaawansowanymi skrótami klawiszowymi.

> **🚀 Gotowe do publikacji w Firefox Add-ons Store!** 
> Rozszerzenie spełnia wszystkie wymagania Mozilla i jest przygotowane do dystrybucji w oficjalnym sklepie Firefox Add-ons.

## 🆕 Nowości w wersji 2.3

### ⌨️ Zaawansowane skróty klawiszowe
- **Podstawowe konwersje (Ctrl+Shift+...):**
  - `U` - WIELKIE LITERY
  - `L` - małe litery
  - `T` - Każde Słowo
  - `S` - Zdaniowa
  - `A` - nApRzEmIeNnE
  - `I` - oDWRóCONE

- **Formaty programistyczne (Ctrl+Alt+...):**
  - `C` - camelCase
  - `P` - PascalCase
  - `N` - snake_case
  - `K` - kebab-case
  - `O` - CONSTANT_CASE
  - `D` - dot.case

- **Funkcje specjalne:**
  - `Ctrl+Z` - Cofnij ostatnią zmianę
  - `Ctrl+Shift+F` - Cykliczne przełączanie formatów
  - `Ctrl+Shift+G` - Inteligentne sugerowanie formatu
  - `Ctrl+Shift+H` - Pokaż pomoc dla skrótów

### 🌍 Rozszerzone wsparcie językowe
- **7 języków interfejsu:** Polski (PL), English (EN), Deutsch (DE), Français (FR), Español (ES), Italiano (IT), Português (PT)
- **Automatyczne wykrywanie języka** na podstawie ustawień przeglądarki
- **Domyślny język:** English (fallback dla nieobsługiwanych języków)

### 🎨 Ulepszone powiadomienia
- **Płynne animacje** - slide-in z dolnego rogu ekranu
- **Nowoczesny design** - lepsze fonty i kolory
- **Pozycja bottom-right** - mniej inwazyjne dla użytkownika

## Wszystkie funkcje (poprzednie wersje)

### ↶ Cofnięcie zmian (Ctrl+Z)
- **Automatyczne zapisywanie** do 10 ostatnich konwersji
- **Skrót klawiszowy Ctrl+Z** dla szybkiego cofnięcia
- **Opcja menu kontekstowego** "Cofnij ostatnią zmianę"
- **Inteligentne rozpoznawanie** aktywnych pól edytowalnych

### 🌐 Wielojęzyczność
- **7 języków interfejsu:** Polski, English, Deutsch, Français, Español, Italiano, Português
- **Automatyczne wykrywanie języka** na podstawie ustawień przeglądarki
- **Zlokalizowane komunikaty** i powiadomienia
- **Domyślny język:** English (fallback dla nieobsługiwanych języków)

## Funkcjonalność

### 🔤 Zmiana wielkości liter
- **WIELKIE LITERY** - konwersja całego tekstu na wielkie litery
- **małe litery** - konwersja całego tekstu na małe litery
- **Każde Słowo Wielką Literą** - format tytułowy
- **Zdaniowa wielka litera** - tylko pierwsza litera wielka
- **nApRzEmIeNnE lItErY** - naprzemienne małe i wielkie litery
- **oDWRÓCONA wIELKOŚĆ** - odwrócenie aktualnych wielkości liter

### 💻 Dla programistów
- **camelCase** - dla zmiennych JavaScript/Java
- **PascalCase** - dla klas i konstruktorów
- **snake_case** - dla Python i baz danych
- **kebab-case** - dla CSS i URL-i
- **CONSTANT_CASE** - dla stałych
- **dot.case** - format z kropkami

### Dostęp przez menu kontekstowe
- **Zaznacz tekst** prawym przyciskiem myszy
- **Automatyczne zastąpienie** w edytowalnych polach
- **Kopiowanie do schowka** dla nieEdytowalnych obszarów
- **Obsługa polskich znaków** we wszystkich formatach

## Przykłady użycia

### Zmiana wielkości liter
| Tekst wejściowy | Wynik |
|----------------|-------|
| `Przykładowy Tekst` | **WIELKIE:** `PRZYKŁADOWY TEKST` |
| `Przykładowy Tekst` | **małe:** `przykładowy tekst` |
| `przykładowy tekst` | **Każde Słowo:** `Przykładowy Tekst` |
| `PRZYKŁADOWY TEKST` | **Zdaniowa:** `Przykładowy tekst` |
| `Przykładowy Tekst` | **nApRzEmIeNnE:** `pRzYkŁaDoWy tEkSt` |
| `Przykładowy Tekst` | **oDWRÓCONA:** `pRZYKŁADOWY tEKST` |

### Formaty programistyczne (z polskimi znakami)
| Tekst wejściowy | Wynik |
|----------------|-------|
| `Moja Funkcja JavaScript ąćęłńóśźż` | **camelCase:** `mojaFunkcjaJavaScriptAcelnoszz` |
| `moja funkcja javascript` | **PascalCase:** `MojaFunkcjaJavascript` |
| `Moja Funkcja JavaScript` | **snake_case:** `moja_funkcja_java_script` |
| `Moja Funkcja JavaScript` | **kebab-case:** `moja-funkcja-java-script` |
| `moja funkcja` | **CONSTANT_CASE:** `MOJA_FUNKCJA` |
| `moja funkcja` | **dot.case:** `moja.funkcja` |

## Instalacja

### Instalacja w trybie deweloperskim (Firefox Developer Edition)

1. Otwórz Firefox Developer Edition
2. Wpisz w pasku adresu: `about:debugging#/runtime/this-firefox`
3. Kliknij **"Załaduj tymczasowy dodatek..."**
4. Wybierz plik `manifest.json` z tego folderu
5. Rozszerzenie zostanie załadowane i będzie aktywne do czasu zamknięcia przeglądarki

### Instalacja stała (wymagane podpisanie)

Aby rozszerzenie działało na stałe, musi być podpisane przez Mozilla. Można to zrobić poprzez:
1. Publikację w Firefox Add-ons Store
2. Użycie self-distribution z podpisem deweloperskim

## Użytkowanie

1. **Zaznacz tekst** na dowolnej stronie internetowej
2. **Kliknij prawym przyciskiem myszy** na zaznaczonym tekście
3. Wybierz **"Case Converter Pro"** z menu kontekstowego
4. Wybierz kategorię i opcję konwersji:

### 🔤 Zmiana wielkości liter
- **WIELKIE LITERY, małe litery, Każde Słowo Wielką, Zdaniowa wielka**
- **nApRzEmIeNnE lItErY, oDWRÓCONA wIELKOŚĆ**

### 💻 Dla programistów
- **camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case**

### Zachowanie rozszerzenia:

- **W polach edytowalnych** (input, textarea, contenteditable): tekst zostanie automatycznie zastąpiony
- **W nieEdytowalnych obszarach**: skonwertowany tekst zostanie skopiowany do schowka
- **Powiadomienie**: pojawi się komunikat potwierdzający konwersję

### 🔄 Cofnięcie zmian (Ctrl+Z)
- **Skrót klawiszowy:** Naciśnij `Ctrl+Z` po konwersji
- **Menu kontekstowe:** Wybierz "↶ Cofnij ostatnią zmianę"
- **Automatyczne zapisywanie:** Do 10 ostatnich operacji
- **Inteligentne wykrywanie:** Działa tylko gdy poprzednia zmiana dotyczyła aktualnego pola

### 🌍 Zmiana języka interfejsu
Rozszerzenie automatycznie wykrywa język na podstawie ustawień przeglądarki Firefox:
- Wejdź do `about:preferences#general`
- W sekcji "Language" ustaw preferowany język
- Dostępne języki: Polski, English, Deutsch, Français, Español
- Restart przeglądarki może być wymagany

## Testowanie

Otwórz plik `test.html` w przeglądarce, aby przetestować wszystkie funkcje rozszerzenia z różnymi typami pól tekstowych i formatami.

## Struktura projektu

```
firefox-text-converter/
├── manifest.json       # Konfiguracja rozszerzenia
├── background.js       # Script w tle - obsługa menu kontekstowego
├── content.js          # Script treści - konwersja tekstu na stronie
├── _locales/          # Pliki lokalizacji (PL, EN, DE, FR, ES)
│   ├── pl/messages.json    # Polski
│   ├── en/messages.json    # English
│   ├── de/messages.json    # Deutsch
│   ├── fr/messages.json    # Français
│   └── es/messages.json    # Español
├── icons/              # Ikony rozszerzenia
├── README.md           # Ten plik
└── package.json        # Konfiguracja npm (opcjonalna)
```

## Rozwój

### Wymagania
- Firefox Developer Edition
- Podstawowa znajomość JavaScript

### Testowanie
1. Załaduj rozszerzenie w trybie deweloperskim
2. Odwiedź dowolną stronę internetową
3. Zaznacz tekst i przetestuj funkcjonalność menu kontekstowego

### Debugowanie
- Otwórz **Developer Tools** (F12)
- Przejdź do zakładki **Console** aby zobaczyć ewentualne błędy
- Użyj `about:debugging` do inspekcji rozszerzenia

## Licencja

MIT License - możesz swobodnie używać i modyfikować kod.

## Autor

Stworzone dla potrzeb konwersji tekstu na format URL-friendly z obsługą polskich znaków.
