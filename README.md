# smart-error-assist README

Smart Error Assist is a VS Code extension that detects coding errors in real-time, explains them in plain English, and suggests possible fixes using AI.
No more Googling cryptic error messages. 
Write code → Get error → Understand it instantly.

## Features

Every time your file updates and VS Code reports an error, Smart Error Assist catches it automatically.

AI-Generated Explanations: Instead of you manually searching StackOverflow, the extension: Reads the error,breaks it down in normal human language and tells you why it happened

Suggested Fixes: You get practical, copy-ready suggestions for how to fix the error.

## Requirements

Node.js (v18 or higher)
An OpenAI API Key
You can set it using: setx OPENAI_API_KEY "your_key_here"
Internet connection (for AI explanations)

## Known Issues

1. When many errors trigger at once, explanations may take a second to generate.
2. Requires an active OpenAI key to work properly.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of:
Real-time error detection
AI-powered explanations
Suggested fixes

## Following extension guidelines
This extension follows VS Code’s recommended guidelines:
https://code.visualstudio.com/api/references/extension-guidelines

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
