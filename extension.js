const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');

// Get the active editor's document URI
const documentUri = vscode.window.activeTextEditor.document.uri;

// Get the absolute file path
const absoluteFilePath = documentUri.fsPath;

// Get the root path of the Git repository
const gitRepositoryPath = 'C:\Users\Srushti Srivastava\OneDrive\Desktop\PROJECTS\My projects\new html website\checkextension';

// Calculate the relative path to the file from the Git repository root
const relativeFilePath = path.relative(gitRepositoryPath, absoluteFilePath);

function activate(context) {
  console.log('The "git blame" extension is now active!');

  
  let disposable = vscode.commands.registerCommand("extension.showGitBlame", () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const filePath = `${relativeFilePath}`;
      const fileName = path.basename(filePath);
      exec(`git blame ${fileName}`, (error, stdout) => {
        if (error) {
          console.error(`Error executing "git blame": ${error}`);
          return;
        }

        const blameData = stdout.split('\n');

        blameData.forEach((line, lineNumber) => {
          const match = /^author-mail <(.+)>$/.exec(line);
          if (match) {
            const email = match[1];
            const range = new vscode.Range(lineNumber, 0, lineNumber, 0);
            const decoration = vscode.window.createTextEditorDecorationType({
              color: 'rgba(128, 128, 128, 0.5)',
              textDecoration: `underline wavy ${email}`
            });
            editor.setDecorations(decoration, [range]);
          }
        });
      });
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {
  console.log('The "git blame" extension has been deactivated.');
}

module.exports = {
  activate,
  deactivate
};
