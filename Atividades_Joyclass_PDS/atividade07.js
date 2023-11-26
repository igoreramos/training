
class Editor {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(event) {
    this.observers.forEach(observer => {
      observer.update(event);
    });
  }
}

class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber - 1, 0, text); // Insere na posição lineNumber - 1
    this.notify("insert");
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber - 1, 1); // Remove da posição lineNumber - 1
    this.notify("remove");
  }

  getText() {
    return this.lines.join('\n');
  }
}

class OpenObserver {
  update(event) {
    if (event === "open") {
      console.log("Editor aberto!");
    }
  }
}

class SaveObserver {
  constructor(editor) {
    this.editor = editor;
  }

  update(event) {
    if (event === "save") {
      console.log("Conteúdo salvo:");
      console.log(this.editor.getText());
    }
  }
}

function startEditor() {
  const textEditor = new TextEditor();
  const openObserver = new OpenObserver();
  const saveObserver = new SaveObserver(textEditor);

  textEditor.addObserver(openObserver);
  textEditor.addObserver(saveObserver);

  textEditor.notify("open");

  console.log("Digite as linhas de texto (digite 'EOF' para sair):");

  let lineNumber = 1;
  while (true) {
    const text = prompt(`Digite a linha ${lineNumber} ou 'EOF' para sair:`);
    if (text === "EOF") {
      break;
    }
    textEditor.insertLine(lineNumber, text);
    lineNumber++;
  }

  textEditor.notify("save");
}

startEditor();
