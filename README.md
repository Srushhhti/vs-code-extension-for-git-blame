# vs-code-extension-for-git-blame README

This is the README for your extension "vs-code-extension-for-git-blame". This will help you to check git blame in your any valid directory, on any file on that directory. Enjoy!

This is a vscode extension showing the `git blame` feature on vscode. It is written in javascript. 

# Command used in the code

For the author's name we used this const as MATCH:-

`/^([^)]+)\)\s(.*)$/` : This is a regular expression pattern enclosed within forward slashes. 

Different symbols meanings ->

`^`:- start of a line

`([^)]+)`:- captures one or more characters that are not a closing parenthesis 

`\)` :- matches a closing parenthesis `)`

`(.*)`:- captures zero or more of any character except a newline

`\s`:- matches any whitespace character

`$`: end of a line

We then use .exec(line) to get the match as an array having match[0] or match[1]:-

match[0] : entire matched substring, it will be the complete line that matches the pattern

match[1] : content captured by the first capturing group `([^)]+)`, the email address enclosed in angle brackets 

-> otherwise a null array

## Requirements

The folder must be assigned to a valid parent git repository. 

If not try `git init`. 

The folder where the git repository is cloned in which we want to execute `git blame` should have a valid file path -> having no gaps, no special character.

Clone this repository and start debugging session on vscode.

Open the folder you want to conduct your git blame action on
press 'Shift+cmd/ctrl+P' and type "Show Git Blame".

It shows the git blame output on the code itself and also in the debug console of the vs-code-extension-for-git-blame folder, till the debugging session is deactivated. 

## Installation instructions 

Clone this repository and start debugging session on vscode.

Open the folder you want to conduct your git blame action on
press 'Shift+cmd/ctrl+P' and type "Show Git Blame".

## Usage

It shows the git blame feature in the code itself and on the debug console of your cloned folder.

## Troubleshooting

If any issue occurs, just stop the debugging session and start a new one. The extension can output git blame as amny times as you want in one debugging session. The file path should be a valid file path and the only 1 file should exist in that file path.

**Enjoy!**