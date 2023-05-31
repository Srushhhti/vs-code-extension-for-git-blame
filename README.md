# vs-code-extension-for-git-blame README

This is the README for your extension "vs-code-extension-for-git-blame". After writing up a brief description, we recommend including the following sections.

# description 

This is a vscode extension showing the `git blame` feature on vscode. It is written in javascript. 

## Command used in the code

for the editor email we used this const as MATCH:-
/^author-mail <(.+)>$/: This is a regular expression pattern enclosed within forward slashes (/). Different symbols meanings ->

^:- start of a line
author-mail <:- literal string that must be present in the line
(.+):- capturing group that matches and captures any characters (except line breaks) one or more times. + quantifier ensures that there is at least one character between the angle brackets
>: must be present in the line
$: end of a line

We then use .exec(line) to get the match as an array having match[0] or match[1]:-
match[0] : entire matched substring, it will be the complete line that matches the pattern
match[1] : content captured by the first capturing group ( .+ ), the email address enclosed in angle brackets
otherwise a null array.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Working with Markdown

You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
