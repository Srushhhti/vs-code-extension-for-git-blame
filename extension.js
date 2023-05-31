//we are using javascript for this that is why we have to use the require function
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
//import exec to execute shell command
const { exec } = require('child_process');
const { stdout } = require('process');


// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */

// This method is called when your extension is activated
function activate(context) {
	console.log('Your extension "vs-code-extension-for-git-blame" is now active!');

	// Now provide the implementation of the command with  registerCommand it uses vscode.commands.registerCommand(commandId, callback);
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vs-code-extension-for-git-blame.showGitBlame', function () {
		// The code placed here will be executes
		//vscode.window -> shows that whether the window of vscode is running on not
		//active Text Editor -> shows whether the editor is active on vs code or is not working on the same 
		const editor = vscode.window.activeTextEditor;
		//if(editor)=true when editor does soem work on the text 
		if(editor){
			//the filePath will have the information of teh file system oath of the doc on wuth editi=or is editing 
			const filePath = editor.document.uri.fsPath;
			//exec(command which have to be executed, callback func)
			exec(`git blame --line-porcelain ${filePath}`, (error,stdout) => {
				if(error){
					console.error("Error occured during the command!");
				}
				//first then it splits the git blame command that is retrieved on the pc and then splits it at enter 
				const gitBlameData = stdout.split('\n');

				//then we execute this function to retrieve the editor's email id by checking each line that we got of gitBlameData
				gitBlameData.forEach((line) => {
					// we find a match for the editor's email
				});

			});
		}
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from VS code extension for git blame!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
