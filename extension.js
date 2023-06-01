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
    // The code placed here will be executes
	//vscode.window -> shows that whether the window of vscode is running on not
	//active Text Editor -> shows whether the editor is active on vs code or is not working on the same 
		
    const editor = vscode.window.activeTextEditor;
    //if(editor == true) -> when editor does some work on the file
    if (editor) {
      const filePath = `${relativeFilePath}`;
      const fileName = path.basename(filePath);
      //exec(command which needs to be executed in the terminal, callback function)
      exec(`git blame ${fileName}`, (error, stdout) => {
        if (error) {
          console.error(`Error executing "git blame": ${error}`);
          return;
        }

        //first then it splits the git blame command that is retrieved on the pc and then splits it at enter 
		const blameData = stdout.split('\n');

        //then we execute this function to retrieve the editor's email id by checking each line that we got of gitBlameData
		blameData.forEach((line, lineNumber) => {
            //find a match for author name
            const match = /^([^)]+)\)\s(.*)$/.exec(line);
            if (match) {
                //match info to the const 
                const author = match[1];
                const range = new vscode.Range(lineNumber, 0, lineNumber, 0);
                const decoration = vscode.window.createTextEditorDecorationType({
                    color: 'rgba(128, 128, 128, 0.5)',
                    after: {
                        contentText: `(${author})`
                    }
                });
                editor.setDecorations(decoration, [range]);
          }
        });
      });
    }
  });

  context.subscriptions.push(disposable);
}
//when extension is deactivated 
function deactivate() {
  console.log('The "git blame" extension has been deactivated.');
}

module.exports = {
  activate,
  deactivate
};
