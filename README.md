# vs-code-extension-for-git-blame README

This is the README for your extension "vs-code-extension-for-git-blame". After writing up a brief description, we recommend including the following sections.

# Description 

This is a vscode extension showing the `git blame` feature on vscode. It is written in javascript. 

## Command used in the code

For the author's name we used this const as MATCH:-

/^([^)]+)\)\s(.*)$/: This is a regular expression pattern enclosed within forward slashes (/). 

Different symbols meanings ->

^:- start of a line

([^)]+):- captures one or more characters that are not a closing parenthesis 

\) :- matches a closing parenthesis `)`

(.*):- captures zero or more of any character except a newline

\s:- matches any whitespace character

$: end of a line

We then use .exec(line) to get the match as an array having match[0] or match[1]:-

match[0] : entire matched substring, it will be the complete line that matches the pattern

match[1] : content captured by the first capturing group ([^)]+), the email address enclosed in angle brackets 

-> otherwise a null array

## Requirements

The folder must be assigned to a valid parent git repository. 

If not try `git init`. 

The folder where the git repository is cloned in which we want to execute `git blame` should have a valid file path -> having no gaps, no special character.

Clone this repository and start debugging session on vscode.

Open the folder you want to conduct your git blame action on
press 'Shift+cmd/ctrl+P' and type "Show Git Blame".

It shows the git blame output on the code itself and also in the debug console of the vs-code-extension-for-git-blame folder, till the debugging session is deactivated. 

## Known Issues

Can only work once. 

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
