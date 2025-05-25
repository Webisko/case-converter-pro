# 🧪 Test Guide - Case Converter Pro v2.3 Keyboard Shortcuts

## ⌨️ Keyboard Shortcuts Testing Guide

### Prerequisites
1. Load the extension in Firefox Developer Edition
2. Navigate to any webpage with editable text (e.g., quick-test.html)
3. Make sure you have text selected before using shortcuts

### 📝 Basic Case Conversions (Ctrl+Shift+...)

Test each shortcut with text: **"Przykładowy Tekst do Testowania ąćęłńóśźż"**

| Shortcut | Expected Result | Test Status |
|----------|----------------|-------------|
| `Ctrl+Shift+U` | PRZYKŁADOWY TEKST DO TESTOWANIA ĄĆĘŁŃÓŚŹŻ | ⬜ |
| `Ctrl+Shift+L` | przykładowy tekst do testowania ąćęłńóśźż | ⬜ |
| `Ctrl+Shift+T` | Przykładowy Tekst Do Testowania Ąćęłńóśźż | ⬜ |
| `Ctrl+Shift+S` | Przykładowy tekst do testowania ąćęłńóśźż | ⬜ |
| `Ctrl+Shift+A` | pRzYkŁaDoWy TeKsT dO tEsToWaNiA ąĆęŁńÓśŹż | ⬜ |
| `Ctrl+Shift+I` | pRZYKŁADOWY tEKST DO tESTOWANIA ĄćĘłŃóŚźŻ | ⬜ |

### 💻 Programming Formats (Ctrl+Alt+...)

Test each shortcut with text: **"Moja Funkcja JavaScript Test"**

| Shortcut | Expected Result | Test Status |
|----------|----------------|-------------|
| `Ctrl+Alt+C` | mojaFunkcjaJavaScriptTest | ⬜ |
| `Ctrl+Alt+P` | MojaFunkcjaJavaScriptTest | ⬜ |
| `Ctrl+Alt+N` | moja_funkcja_java_script_test | ⬜ |
| `Ctrl+Alt+K` | moja-funkcja-java-script-test | ⬜ |
| `Ctrl+Alt+O` | MOJA_FUNKCJA_JAVA_SCRIPT_TEST | ⬜ |
| `Ctrl+Alt+D` | moja.funkcja.java.script.test | ⬜ |

### 🚀 Special Functions

Test with any selected text:

| Shortcut | Function | Expected Behavior | Test Status |
|----------|----------|-------------------|-------------|
| `Ctrl+Z` | Undo last change | Restore previous text | ⬜ |
| `Ctrl+Shift+F` | Cycle formats | Change to next format in cycle | ⬜ |
| `Ctrl+Shift+G` | Smart suggestion | Apply intelligent format suggestion | ⬜ |
| `Ctrl+Shift+H` | Show help | Display keyboard shortcuts modal | ⬜ |

### 🎯 Advanced Testing Scenarios

#### 1. **Format Cycling Test** (`Ctrl+Shift+F`)
1. Select text: "test example"
2. Press `Ctrl+Shift+F` multiple times
3. Expected cycle: upper → lower → title → sentence → camel → pascal → snake → kebab → (repeat)

#### 2. **Smart Suggestion Test** (`Ctrl+Shift+G`)
Test with different text types:

| Input Text | Expected Smart Suggestion | Test Status |
|------------|---------------------------|-------------|
| "HELLO WORLD" | hello world (opposite case) | ⬜ |
| "hello world" | Hello World (title case) | ⬜ |
| "testFunction" | test_function (snake_case) | ⬜ |
| "test_function" | testFunction (camelCase) | ⬜ |

#### 3. **Help Modal Test** (`Ctrl+Shift+H`)
1. Press `Ctrl+Shift+H`
2. Verify modal displays with all shortcuts
3. Test closing with:
   - Close button ✅
   - ESC key ✅
   - Click outside modal ✅

#### 4. **Undo System Test** (`Ctrl+Z`)
1. Select text and apply any conversion
2. Press `Ctrl+Z`
3. Verify text returns to original state
4. Test multiple undo operations (up to 10)

### 🔧 Edge Case Testing

#### 1. **No Selection Test**
- Try any shortcut without selecting text
- Expected: "❌ Najpierw zaznacz tekst" notification

#### 2. **Empty Selection Test**
- Select empty space and try shortcuts
- Expected: Appropriate error handling

#### 3. **Different Element Types**
Test shortcuts in:
- ✅ Input fields
- ✅ Textarea elements
- ✅ ContentEditable divs
- ✅ Regular text selections

#### 4. **Multi-language Interface Test**
Change browser language and verify:
- ✅ Menu items update correctly
- ✅ Notifications show in correct language
- ✅ Help modal displays correctly

### 📋 Testing Checklist

Before marking as complete, verify:
- [ ] All basic shortcuts work correctly
- [ ] All programming format shortcuts work
- [ ] Special functions operate as expected
- [ ] Undo system functions properly
- [ ] Help modal displays and closes correctly
- [ ] Notifications appear with smooth animations
- [ ] Multi-language support works
- [ ] Edge cases are handled gracefully
- [ ] No console errors during testing

### 🐛 Common Issues to Check

1. **Shortcuts not working?**
   - Check if text is selected
   - Verify browser focus is on the page
   - Check for conflicts with browser shortcuts

2. **Undo not working?**
   - Ensure conversions were made first
   - Check if element still exists in DOM
   - Verify undo stack has entries

3. **Help modal issues?**
   - Check if modal appears over page content
   - Verify all close methods work
   - Test keyboard navigation

### 📊 Test Results Summary

**Total Tests:** 23  
**Passed:** ___  
**Failed:** ___  
**Notes:** _______________

---

**Testing completed by:** _______________  
**Date:** _______________  
**Browser version:** _______________
