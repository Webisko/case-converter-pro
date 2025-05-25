// Background script - obsługuje menu kontekstowe
browser.runtime.onInstalled.addListener(() => {
  console.log("Case Converter Pro: Extension installed/reloaded");
  
  // Tworzymy główne menu kontekstowe
  browser.contextMenus.create({
    id: "caseConverterPro",
    title: browser.i18n.getMessage("mainMenuTitle"),
    contexts: ["selection"]
  });
  
  // === SEKCJA ZMIANA WIELKOŚCI LITER ===
  browser.contextMenus.create({
    id: "caseSection",
    parentId: "caseConverterPro",
    title: browser.i18n.getMessage("caseSectionTitle"),
    contexts: ["selection"]
  });
  
  // Podstawowe konwersje
  browser.contextMenus.create({
    id: "upperCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("upperCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "lowerCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("lowerCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "titleCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("titleCase"),
    contexts: ["selection"]
  });
    browser.contextMenus.create({
    id: "sentenceCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("sentenceCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "alternatingCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("alternatingCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "inverseCase",
    parentId: "caseSection",
    title: browser.i18n.getMessage("inverseCase"),
    contexts: ["selection"]
  });
    // Separator w sekcji case
  browser.contextMenus.create({
    id: "caseSeparator",
    parentId: "caseConverterPro",
    type: "separator",
    contexts: ["selection"]
  });
  
  // === SEKCJA PROGRAMISTYCZNA ===
  browser.contextMenus.create({
    id: "programmingSection",
    parentId: "caseConverterPro",
    title: browser.i18n.getMessage("programmingSectionTitle"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "camelCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("camelCase"),    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "pascalCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("pascalCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "snakeCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("snakeCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "kebabCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("kebabCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "constantCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("constantCase"),
    contexts: ["selection"]
  });
  
  browser.contextMenus.create({
    id: "dotCase",
    parentId: "programmingSection",
    title: browser.i18n.getMessage("dotCase"),
    contexts: ["selection"]
  });
  
  // Separator przed opcją cofnięcia
  browser.contextMenus.create({
    id: "undoSeparator",
    parentId: "caseConverterPro",
    type: "separator",
    contexts: ["selection"]
  });
  
  // === OPCJA COFNIĘCIA ===
  browser.contextMenus.create({
    id: "undoLastChange",
    parentId: "caseConverterPro",
    title: browser.i18n.getMessage("undoSectionTitle"),
    contexts: ["selection"]
  });
  
  console.log("Case Converter Pro: Context menus created");
});

// Obsługa kliknięć w menu kontekstowe
browser.contextMenus.onClicked.addListener((info, tab) => {
  console.log("Context menu clicked:", info.menuItemId, "Selected text:", info.selectionText);
  
  const selectedText = info.selectionText;
  let messageData = null;
  
  // Obsługa konwersji wielkości liter - podstawowe
  if (info.menuItemId === "upperCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "upper"
    };
  }
  else if (info.menuItemId === "lowerCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "lower"
    };
  }
  else if (info.menuItemId === "titleCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "title"
    };
  }
  else if (info.menuItemId === "sentenceCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "sentence"
    };
  }
  else if (info.menuItemId === "alternatingCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "alternating"
    };
  }
  else if (info.menuItemId === "inverseCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "inverse"
    };
  }
  // Obsługa konwersji programistycznych
  else if (info.menuItemId === "camelCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "camel"
    };
  }
  else if (info.menuItemId === "pascalCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "pascal"
    };
  }
  else if (info.menuItemId === "snakeCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "snake"
    };
  }
  else if (info.menuItemId === "kebabCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "kebab"
    };
  }
  else if (info.menuItemId === "constantCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "constant"
    };
  }  else if (info.menuItemId === "dotCase") {
    messageData = {
      action: "convertCase",
      text: selectedText,
      caseType: "dot"
    };
  }
  // Obsługa cofnięcia ostatniej zmiany
  else if (info.menuItemId === "undoLastChange") {
    messageData = {
      action: "undoLastChange"
    };
  }
  
  // Wysyłaj wiadomość do content script jeśli messageData został ustawiony
  if (messageData) {
    console.log("Sending message to content script:", messageData);
    
    browser.tabs.sendMessage(tab.id, messageData).then(response => {
      console.log("Response from content script:", response);
    }).catch(error => {
      console.error("Error sending message to content script:", error);
    });
  }
});
