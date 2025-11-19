import * as vscode from "vscode";
import { explainError } from "./aiHelper";

export function activate(context: vscode.ExtensionContext) {
  console.log("Smart Error Helper is now active!");

  // Listen for changes in diagnostics (errors/warnings)
  vscode.languages.onDidChangeDiagnostics(async (e) => {
    for (const uri of e.uris) {
      const diagnostics = vscode.languages.getDiagnostics(uri);
      for (const diag of diagnostics) {
        if (diag.severity === vscode.DiagnosticSeverity.Error) {
          const explanation = await explainError(diag.message);
          vscode.window.showInformationMessage(
            `Error: ${diag.message}\nExplanation: ${explanation}`
          );
        }
      }
    }
  });

  // Optional manual command
  const disposable = vscode.commands.registerCommand(
    "smartErrorHelper.showFix",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.document.getText(editor.selection);
        const explanation = await explainError(selection || "No selection");
        vscode.window.showInformationMessage(explanation);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
