// Content script - obsługuje konwersję tekstu na stronie

// === SYSTEM COFNIĘCIA ZMIAN (UNDO) ===
let undoStack = [];
const MAX_UNDO_STACK = 10; // Maksymalnie 10 operacji do cofnięcia

// Struktura obiektu undo
function createUndoState(element, originalText, newText, selectionStart, selectionEnd) {
  return {
    element: element,
    originalText: originalText,
    newText: newText,
    selectionStart: selectionStart,
    selectionEnd: selectionEnd,
    timestamp: Date.now()
  };
}

// Dodaj stan do stosu cofnięć
function pushUndoState(undoState) {
  undoStack.push(undoState);
  if (undoStack.length > MAX_UNDO_STACK) {
    undoStack.shift(); // Usuń najstarszy element
  }
  console.log(`Case Converter Pro: Added undo state, stack size: ${undoStack.length}`);
}

// Cofnij ostatnią zmianę
function undoLastChange() {
  if (undoStack.length === 0) {
    console.log("Case Converter Pro: No changes to undo");
    return false;
  }
  
  const lastState = undoStack.pop();
  const element = lastState.element;
  
  try {
    // Sprawdź czy element nadal istnieje w DOM
    if (!document.contains(element)) {
      console.log("Case Converter Pro: Element no longer exists in DOM");
      return false;
    }
    
    // Przywróć oryginalny tekst
    if (element.isContentEditable || element.tagName === 'DIV') {
      element.textContent = lastState.originalText;
    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.value = lastState.originalText;
      // Przywróć pozycję kursora
      element.setSelectionRange(lastState.selectionStart, lastState.selectionEnd);
    }
    
    console.log(`Case Converter Pro: Undid change: "${lastState.newText}" -> "${lastState.originalText}"`);
    return true;
  } catch (error) {
    console.error("Case Converter Pro: Error during undo:", error);
    return false;
  }
}

// Obsługa skrótu klawiszowego Ctrl+Z
document.addEventListener('keydown', function(event) {
  // Ctrl+Z (Windows/Linux) lub Cmd+Z (Mac)
  if ((event.ctrlKey || event.metaKey) && event.key === 'z' && !event.shiftKey) {
    // Sprawdź czy to nie jest pole z własną obsługą undo (np. textarea z historią)
    const activeElement = document.activeElement;
    const hasNativeUndo = activeElement && (
      activeElement.tagName === 'TEXTAREA' || 
      (activeElement.tagName === 'INPUT' && activeElement.type === 'text')
    );
    
    // Jeśli element ma natywną obsługę undo i ma jakąś historię, nie przejmuj kontroli
    if (hasNativeUndo && activeElement.value && undoStack.length > 0) {
      // Sprawdź czy ostatnia zmiana dotyczy tego elementu
      const lastState = undoStack[undoStack.length - 1];
      if (lastState.element === activeElement) {
        event.preventDefault();
        undoLastChange();
      }
    } else if (undoStack.length > 0) {
      event.preventDefault();
      undoLastChange();
    }
  }
});

// Funkcja do konwersji polskich znaków na ASCII
function convertPolishToAscii(text) {
  const polishChars = {
    'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
    'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z',
    // Dodatkowe znaki specjalne
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'ò': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
    'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'ý': 'y', 'ÿ': 'y',
    'ñ': 'n', 'ç': 'c'
  };
  
  return text.replace(/[^\w\s-]/g, (char) => {
    return polishChars[char] || char;
  });
}

// === FUNKCJE KONWERSJI WIELKOŚCI LITER ===

// Funkcja do konwersji na wielkie litery
function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Funkcja do konwersji na małe litery
function convertToLowerCase(text) {
  return text.toLowerCase();
}

// Funkcja do konwersji na tytuł (każde słowo wielką literą)
function convertToTitleCase(text) {
  return text.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Funkcja do konwersji na zdaniową (tylko pierwsza litera wielka)
function convertToSentenceCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Funkcja do konwersji naprzemiennej (nApRzEmIeNnE)
function convertToAlternatingCase(text) {
  return text.split('').map((char, index) => {
    return index % 2 === 0 ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

// Funkcja do odwrócenia wielkości liter
function convertToInverseCase(text) {
  return text.split('').map(char => {
    return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

// === FUNKCJE KONWERSJI PROGRAMISTYCZNYCH ===

// Funkcja pomocnicza do czyszczenia tekstu i dzielenia na słowa
function cleanAndSplitWords(text) {
  // Usuń polskie znaki i zamień na ASCII
  let cleaned = convertPolishToAscii(text);
  
  // Podziel tekst na słowa używając różnych separatorów
  return cleaned
    .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase -> camel Case
    .replace(/[_\-\.]/g, ' ') // zamień separatory na spacje
    .replace(/[^a-zA-Z0-9\s]/g, ' ') // usuń znaki specjalne
    .split(/\s+/) // podziel na słowa
    .filter(word => word.length > 0) // usuń puste słowa
    .map(word => word.toLowerCase()); // zamień na małe litery
}

// Funkcja do konwersji na camelCase
function convertToCamelCase(text) {
  const words = cleanAndSplitWords(text);
  if (words.length === 0) return '';
  
  return words[0] + words.slice(1).map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Funkcja do konwersji na PascalCase
function convertToPascalCase(text) {
  const words = cleanAndSplitWords(text);
  return words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
}

// Funkcja do konwersji na snake_case
function convertToSnakeCase(text) {
  const words = cleanAndSplitWords(text);
  return words.join('_');
}

// Funkcja do konwersji na kebab-case
function convertToKebabCase(text) {
  const words = cleanAndSplitWords(text);
  return words.join('-');
}

// Funkcja do konwersji na CONSTANT_CASE
function convertToConstantCase(text) {
  const words = cleanAndSplitWords(text);
  return words.map(word => word.toUpperCase()).join('_');
}

// Funkcja do konwersji na dot.case
function convertToDotCase(text) {
  const words = cleanAndSplitWords(text);
  return words.join('.');
}

// Główna funkcja do konwersji wielkości liter
function convertCase(text, caseType) {
  console.log(`Converting "${text}" to ${caseType} case`);
  
  switch (caseType) {
    case 'upper':
      return convertToUpperCase(text);
    case 'lower':
      return convertToLowerCase(text);
    case 'title':
      return convertToTitleCase(text);
    case 'sentence':
      return convertToSentenceCase(text);
    case 'alternating':
      return convertToAlternatingCase(text);
    case 'inverse':
      return convertToInverseCase(text);
    case 'camel':
      return convertToCamelCase(text);
    case 'pascal':
      return convertToPascalCase(text);
    case 'snake':
      return convertToSnakeCase(text);
    case 'kebab':
      return convertToKebabCase(text);
    case 'constant':
      return convertToConstantCase(text);
    case 'dot':
      return convertToDotCase(text);
    default:
      console.error('Unknown case type:', caseType);
      return text;
  }
}

// Zmienna globalna do przechowywania informacji o zaznaczeniu
let lastSelection = null;

// Funkcja do zapisania aktualnego zaznaczenia
function saveCurrentSelection() {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    lastSelection = {
      range: selection.getRangeAt(0).cloneRange(),
      text: selection.toString()
    };
    console.log("Selection saved:", lastSelection);
  }
}

// Nasłuchuj na zaznaczenia tekstu
document.addEventListener('mouseup', saveCurrentSelection);
document.addEventListener('keyup', saveCurrentSelection);

// Funkcja do zastąpienia zaznaczonego tekstu
function replaceSelectedText(newText) {
  console.log("replaceSelectedText called with:", newText);
  
  // Sprawdź aktualnie aktywny element
  const activeElement = document.activeElement;
  console.log("Active element:", {
    tagName: activeElement ? activeElement.tagName : 'none',
    isContentEditable: activeElement ? activeElement.isContentEditable : 'none',
    contentEditable: activeElement ? activeElement.contentEditable : 'none'
  });
  
  // Spróbuj najpierw z aktywnym elementem, jeśli jest edytowalny
  if (activeElement && (
    activeElement.tagName === 'INPUT' || 
    activeElement.tagName === 'TEXTAREA' ||
    activeElement.isContentEditable === true ||
    activeElement.contentEditable === "true"
  )) {
    console.log("Using active element for replacement");
    if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
      const start = activeElement.selectionStart;
      const end = activeElement.selectionEnd;
      const value = activeElement.value;
      console.log("Active element selection:", {start, end, value});
      
      if (start !== null && end !== null && start !== end) {        // Zapisz stan do cofnięcia
        pushUndoState(createUndoState(activeElement, value, newText, start, end));
        
        activeElement.value = value.substring(0, start) + newText + value.substring(end);
        activeElement.selectionStart = activeElement.selectionEnd = start + newText.length;
        activeElement.focus();
        showNotification(browser.i18n.getMessage("notificationSuccess"));
        return;
      }
    }
  }
  
  // Spróbuj użyć aktualnego zaznaczenia
  let selection = window.getSelection();
  let range = null;
  
  if (selection.rangeCount > 0 && selection.toString().length > 0) {
    range = selection.getRangeAt(0);
    console.log("Using current selection");
  } else if (lastSelection) {
    // Użyj zapisanego zaznaczenia
    try {
      range = lastSelection.range;
      selection.removeAllRanges();
      selection.addRange(range);
      console.log("Using saved selection");
    } catch (e) {
      console.error("Failed to restore selection:", e);
      copyToClipboard(newText);
      return;
    }
  } else {
    console.log("No selection available");
    copyToClipboard(newText);
    return;
  }
  
  console.log("Range:", range);
  console.log("Selected text:", selection.toString());
  
  // Sprawdź czy zaznaczenie jest w edytowalnym elemencie
  const container = range.commonAncestorContainer;
  let editableElement = container.nodeType === Node.TEXT_NODE 
    ? container.parentElement 
    : container;
  
  console.log("Initial editable element:", editableElement);
    // Znajdź najbliższy edytowalny element
  while (editableElement && editableElement !== document.body) {
    console.log("Checking element:", {
      tagName: editableElement.tagName,
      isContentEditable: editableElement.isContentEditable,
      contentEditable: editableElement.contentEditable,
      className: editableElement.className,
      id: editableElement.id
    });
    if (editableElement.isContentEditable || 
        editableElement.tagName === 'INPUT' || 
        editableElement.tagName === 'TEXTAREA') {
      break;
    }
    editableElement = editableElement.parentElement;
  }
  
  console.log("Final editable element:", {
    element: editableElement,
    tagName: editableElement ? editableElement.tagName : 'none',
    isContentEditable: editableElement ? editableElement.isContentEditable : 'none'
  });
    // Sprawdź czy znaleziono edytowalny element
  const isEditable = editableElement && (
    editableElement.isContentEditable === true ||
    editableElement.contentEditable === "true" ||
    editableElement.tagName === 'INPUT' || 
    editableElement.tagName === 'TEXTAREA'
  );
  
  console.log("Is element editable?", {
    isEditable: isEditable,
    isContentEditable: editableElement ? editableElement.isContentEditable : 'none',
    contentEditable: editableElement ? editableElement.contentEditable : 'none',
    tagName: editableElement ? editableElement.tagName : 'none'
  });
  
  if (isEditable) {
    
    console.log("Found editable element, proceeding with replacement");
    
    // Dla pól input i textarea
    if (editableElement.tagName === 'INPUT' || editableElement.tagName === 'TEXTAREA') {
      console.log("Replacing in INPUT/TEXTAREA");
      const start = editableElement.selectionStart;
      const end = editableElement.selectionEnd;
      const value = editableElement.value;
      console.log("Current value:", value, "start:", start, "end:", end);
      
      if (start !== null && end !== null) {        // Zapisz stan do cofnięcia
        pushUndoState(createUndoState(editableElement, value, newText, start, end));
        
        editableElement.value = value.substring(0, start) + newText + value.substring(end);
        editableElement.selectionStart = editableElement.selectionEnd = start + newText.length;
        editableElement.focus();
        showNotification(browser.i18n.getMessage("notificationSuccess"));
      } else {
        copyToClipboard(newText);
      }    } else {
      // Dla elementów contenteditable i innych
      console.log("Replacing in contenteditable element or other editable");
      try {
        // Metoda 1: Standardowa metoda range
        if (range && !range.collapsed) {
          console.log("Trying standard range replacement");
          
          // Zapisz stan do cofnięcia przed zmianą
          const originalText = selection.toString();
          const selectionStart = range.startOffset;
          const selectionEnd = range.endOffset;
          pushUndoState(createUndoState(editableElement, originalText, newText, selectionStart, selectionEnd));
          
          range.deleteContents();
          range.insertNode(document.createTextNode(newText));
          
          // Ustaw kursor na końcu wstawionego tekstu
          range.setStartAfter(range.endContainer);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
          showNotification(browser.i18n.getMessage("notificationSuccess"));
        } else {
          // Metoda 2: execCommand (deprecated ale może działać)
          console.log("Trying execCommand method");
          
          // Zapisz stan przed zmianą
          const originalText = selection.toString();
          pushUndoState(createUndoState(editableElement, originalText, newText, 0, originalText.length));
          
          document.execCommand('insertText', false, newText);
          showNotification(browser.i18n.getMessage("notificationSuccess"));
        }
      } catch (e) {
        console.error("Failed to replace in contenteditable:", e);
        // Metoda 3: Próba bezpośredniej zamiany innerHTML/textContent
        try {          console.log("Trying direct content replacement");
          if (editableElement.tagName === 'DIV' && editableElement.isContentEditable) {
            const currentText = editableElement.textContent || editableElement.innerText;
            const originalText = lastSelection ? lastSelection.text : selection.toString();
            if (currentText.includes(originalText)) {
              // Zapisz stan do cofnięcia
              pushUndoState(createUndoState(editableElement, currentText, newText, 0, currentText.length));
              
              editableElement.textContent = currentText.replace(originalText, newText);
              showNotification(browser.i18n.getMessage("notificationSuccess"));
            } else {
              copyToClipboard(newText);
            }
          } else {
            copyToClipboard(newText);
          }
        } catch (e2) {
          console.error("All replacement methods failed:", e2);
          copyToClipboard(newText);
        }
      }
    }
  } else {
    console.log("No editable element found, copying to clipboard");
    copyToClipboard(newText);
  }
}

// Funkcja pomocnicza do kopiowania do schowka
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log("Text copied to clipboard successfully");
    showNotification(browser.i18n.getMessage("notificationSuccess"));
  }).catch(error => {
    console.error("Failed to copy to clipboard:", error);
    // Fallback - pokaż alert z tekstem
    alert(`Skonwertowany tekst: ${text}`);
  });
}

// Funkcja do pokazania powiadomienia
function showNotification(message) {
  // Utwórz element powiadomienia
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    max-width: 300px;
    word-wrap: break-word;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 4px solid #45a049;
  `;
  
  document.body.appendChild(notification);
  
  // Animacja wejścia - slide in from bottom
  requestAnimationFrame(() => {
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
  });
  
  // Animacja wyjścia i usunięcie po 3 sekundach
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.transform = 'translateY(100px)';
      notification.style.opacity = '0';
      
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 3000);
}

// Nasłuchuj wiadomości z background script
browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Content script otrzymał wiadomość:", message);
  
  let convertedText = '';
  
  if (message.action === "convertCase") {
    // Konwersja wielkości liter
    convertedText = convertCase(message.text, message.caseType);
    console.log("Oryginalny tekst:", message.text);
    console.log(`Skonwertowany tekst (${message.caseType} case):`, convertedText);
    
    replaceSelectedText(convertedText);
    sendResponse({success: true, convertedText: convertedText, caseType: message.caseType});
  }
  else if (message.action === "undoLastChange") {
    // Cofnij ostatnią zmianę
    const success = undoLastChange();
    if (success) {
      showNotification(browser.i18n.getMessage("notificationUndoSuccess"));
      sendResponse({success: true, message: "Change undone"});
    } else {
      showNotification(browser.i18n.getMessage("notificationUndoEmpty"));
      sendResponse({success: false, message: "No changes to undo"});
    }
  }
  else {
    console.error("Unknown action:", message.action);
    sendResponse({success: false, error: "Unknown action"});
  }
});

// === ROZSZERZONE SKRÓTY KLAWISZOWE ===

// Mapa skrótów klawiszowych dla szybkich konwersji
const keyboardShortcuts = {
  // Podstawowe konwersje wielkości liter (Ctrl+Shift+...)
  'U': 'upper',          // Ctrl+Shift+U - WIELKIE LITERY
  'L': 'lower',          // Ctrl+Shift+L - małe litery
  'T': 'title',          // Ctrl+Shift+T - Każde Słowo
  'S': 'sentence',       // Ctrl+Shift+S - Zdaniowa
  'A': 'alternating',    // Ctrl+Shift+A - nApRzEmIeNnE
  'I': 'inverse',        // Ctrl+Shift+I - oDWRóCONE
  
  // Formaty programistyczne (Ctrl+Alt+...)
  'C': 'camel',          // Ctrl+Alt+C - camelCase
  'P': 'pascal',         // Ctrl+Alt+P - PascalCase
  'N': 'snake',          // Ctrl+Alt+N - snake_case (N jak uNderscore)
  'K': 'kebab',          // Ctrl+Alt+K - kebab-case
  'O': 'constant',       // Ctrl+Alt+O - CONSTANT_CASE (O jak cOnstant)
  'D': 'dot'             // Ctrl+Alt+D - dot.case
};

// Funkcja do cyklicznego przechodzenia przez formaty
let currentFormatIndex = 0;
const formatCycle = ['upper', 'lower', 'title', 'sentence', 'camel', 'pascal', 'snake', 'kebab'];

function cycleFormat() {
  const format = formatCycle[currentFormatIndex];
  currentFormatIndex = (currentFormatIndex + 1) % formatCycle.length;
  return format;
}

// Funkcja do wykrywania aktualnego formatu tekstu
function detectTextFormat(text) {
  if (!text || text.length === 0) return 'unknown';
  
  // Sprawdź różne formaty
  if (text === text.toUpperCase() && text.includes('_')) return 'constant';
  if (text === text.toUpperCase()) return 'upper';
  if (text === text.toLowerCase()) return 'lower';
  if (text.includes('_') && text === text.toLowerCase()) return 'snake';
  if (text.includes('-') && text === text.toLowerCase()) return 'kebab';
  if (text.includes('.') && text === text.toLowerCase()) return 'dot';
  if (/^[a-z][a-zA-Z0-9]*$/.test(text) && /[A-Z]/.test(text)) return 'camel';
  if (/^[A-Z][a-zA-Z0-9]*$/.test(text) && /[a-z]/.test(text)) return 'pascal';
  if (text.split(' ').every(word => word[0] === word[0].toUpperCase())) return 'title';
  if (text[0] === text[0].toUpperCase() && text.slice(1) === text.slice(1).toLowerCase()) return 'sentence';
  
  return 'mixed';
}

// Funkcja do inteligentnego sugerowania formatu
function suggestBestFormat(text) {
  const currentFormat = detectTextFormat(text);
  
  // Jeśli tekst wygląda jak kod, sugeruj formaty programistyczne
  if (/[A-Z][a-z]/.test(text) || text.includes('_') || text.includes('-')) {
    return currentFormat === 'camel' ? 'snake' : 'camel';
  }
  
  // Dla zwykłego tekstu sugeruj przeciwny format
  switch (currentFormat) {
    case 'upper': return 'lower';
    case 'lower': return 'title';
    case 'title': return 'sentence';
    case 'sentence': return 'upper';
    default: return 'title';
  }
}

// Rozszerzona obsługa skrótów klawiszowych
document.addEventListener('keydown', function(event) {
  // Obsługa Ctrl+Z - już istnieje powyżej
  
  // === NOWE SKRÓTY KLAWISZOWE ===
  
  // Ctrl+Shift+F - Cycle through formats (szybkie przełączanie formatów)
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'f') {
    event.preventDefault();
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const nextFormat = cycleFormat();
      const convertedText = convertCase(selection.toString(), nextFormat);
      replaceSelectedText(convertedText);
      
      // Pokaż powiadomienie z nazwą formatu
      const formatNames = {
        'upper': 'WIELKIE LITERY',
        'lower': 'małe litery', 
        'title': 'Każde Słowo',
        'sentence': 'Zdaniowa',
        'camel': 'camelCase',
        'pascal': 'PascalCase',
        'snake': 'snake_case',
        'kebab': 'kebab-case'
      };
      showNotification(`🔄 ${formatNames[nextFormat] || nextFormat}`);
    }
    return;
  }
  
  // Ctrl+Shift+G - Smart format suggestion (inteligentne sugerowanie)
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'g') {
    event.preventDefault();
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
      const selectedText = selection.toString();
      const suggestedFormat = suggestBestFormat(selectedText);
      const convertedText = convertCase(selectedText, suggestedFormat);
      replaceSelectedText(convertedText);
      
      const formatNames = {
        'upper': 'WIELKIE LITERY',
        'lower': 'małe litery',
        'title': 'Każde Słowo', 
        'sentence': 'Zdaniowa',
        'camel': 'camelCase',
        'pascal': 'PascalCase',
        'snake': 'snake_case',
        'kebab': 'kebab-case'
      };
      showNotification(`🤖 ${formatNames[suggestedFormat] || suggestedFormat}`);
    }
    return;
  }
  
  // Ctrl+Shift+H - Show help (pokaż pomoc dla skrótów)
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'h') {
    event.preventDefault();
    showKeyboardShortcutsHelp();
    return;
  }
  
  // Podstawowe konwersje (Ctrl+Shift+...)
  if (event.ctrlKey && event.shiftKey && !event.altKey) {
    const key = event.key.toUpperCase();
    if (keyboardShortcuts[key] && ['upper', 'lower', 'title', 'sentence', 'alternating', 'inverse'].includes(keyboardShortcuts[key])) {
      event.preventDefault();
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        const convertedText = convertCase(selection.toString(), keyboardShortcuts[key]);
        replaceSelectedText(convertedText);
      } else {
        showNotification('❌ Najpierw zaznacz tekst');
      }
      return;
    }
  }
  
  // Formaty programistyczne (Ctrl+Alt+...)
  if (event.ctrlKey && event.altKey && !event.shiftKey) {
    const key = event.key.toUpperCase();
    if (keyboardShortcuts[key] && ['camel', 'pascal', 'snake', 'kebab', 'constant', 'dot'].includes(keyboardShortcuts[key])) {
      event.preventDefault();
      const selection = window.getSelection();
      if (selection.toString().length > 0) {
        const convertedText = convertCase(selection.toString(), keyboardShortcuts[key]);
        replaceSelectedText(convertedText);
      } else {
        showNotification('❌ Najpierw zaznacz tekst');
      }
      return;
    }
  }
});

// Funkcja do pokazania pomocy z skrótami klawiszowymi
function showKeyboardShortcutsHelp() {
  const helpText = `
🎯 Case Converter Pro - Skróty Klawiszowe

📝 PODSTAWOWE KONWERSJE (Ctrl+Shift+...):
• U - WIELKIE LITERY
• L - małe litery
• T - Każde Słowo
• S - Zdaniowa
• A - nApRzEmIeNnE
• I - oDWRóCONE

💻 FORMATY PROGRAMISTYCZNE (Ctrl+Alt+...):
• C - camelCase
• P - PascalCase
• N - snake_case
• K - kebab-case
• O - CONSTANT_CASE
• D - dot.case

🚀 FUNKCJE SPECJALNE:
• Ctrl+Z - Cofnij ostatnią zmianę
• Ctrl+Shift+F - Przełączaj formaty
• Ctrl+Shift+G - Inteligentne sugerowanie
• Ctrl+Shift+H - Ta pomoc

💡 Najpierw zaznacz tekst, potem użyj skrótu!
  `;
  
  // Utwórz modal z pomocą
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 10001;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const helpBox = document.createElement('div');
  helpBox.style.cssText = `
    background: white;
    padding: 30px;
    border-radius: 12px;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
    line-height: 1.5;
  `;
    // Utwórz zawartość pomocy w bezpieczny sposób
  const contentDiv = document.createElement('div');
  contentDiv.style.cssText = 'white-space: pre-line; font-size: 14px;';
  contentDiv.textContent = helpText;
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Zamknij (ESC)';
  closeButton.style.cssText = `
    background: #4CAF50; 
    color: white; 
    border: none; 
    padding: 10px 20px; 
    border-radius: 6px; 
    cursor: pointer; 
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;
  `;
  
  helpBox.appendChild(contentDiv);
  helpBox.appendChild(closeButton);  
  const closeModal = () => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
  };
  
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  
  document.addEventListener('keydown', function escHandler(e) {
    if (e.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escHandler);
    }
  });
  
  modal.appendChild(helpBox);
  document.body.appendChild(modal);
}
