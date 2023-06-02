const vscode = require('vscode');
const { exec } = require('child_process');
const path = require('path');


function activate(context) {
  console.log('The "git blame" extension is now active!');

  
  let disposable = vscode.commands.registerCommand("extension.showGitBlame", () => {
    // The code placed here will be executes
	//vscode.window -> shows that whether the window of vscode is running on not
	//active Text Editor -> shows whether the editor is active on vs code or is not working on the same 
		
    const editor = vscode.window.activeTextEditor;
    //if(editor == true) -> when editor does some work on the file
    if (editor) {
      const filePath = editor.document.uri.fsPath;
      const absolutefilePath = path.resolve(filePath);
      const directoryPath = path.dirname(absolutefilePath);
      console.log(directoryPath);
      const fileName = path.basename(absolutefilePath);
      console.log(fileName);
      //exec(command which needs to be executed in the terminal, callback function)
      const options = { cwd: directoryPath };
      exec(`git blame ${fileName}`, options , (error, stdout) => {

        if (error) {
          console.error(`Error executing "git blame": ${error}`);
          return;
        }

        //first then it splits the git blame command that is retrieved on the pc and then splits it at enter 
		    const blameData = stdout.split('\n');
        console.log(blameData);

        //then we execute this function to retrieve the editor's email id by checking each line that we got of gitBlameData
		    blameData.forEach((line, lineNumber) => {
            //find a match for author name
            const match = /^([^)]+)\)\s(.*)$/.exec(line);
            console.log(match[1]);
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
