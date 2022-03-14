import * as vscode from 'vscode';
import { BaseToken } from './xpLexer';

enum TagType {
    XSLTstart,
    XMLstart,
    XSLTvar,
    Start,
    NonStart
}

interface XSLTToken extends BaseToken {
    tagType?: TagType;
}

export interface ElementData {
    variables: VariableData[];
    currentVariable?: VariableData;
    xpathVariableCurrentlyBeingDefined?: boolean;
    identifierToken: XSLTToken;
    symbolName: string;
    symbolID: string;
    childSymbols: vscode.DocumentSymbol[];
    namespacePrefixes: string[];
}
export interface XPathData {
    token: BaseToken;
    variables: VariableData[];
    preXPathVariable: boolean;
    xpathVariableCurrentlyBeingDefined: boolean;
    function?: BaseToken;
    functionArity?: number;
    isRangeVar?: boolean;
    awaitingArity: boolean;
    tokenIndex?: number;
}

export interface VariableData {
    token: BaseToken;
    name: string;
    uri?: string;
    index: number;
}

export class XsltTokenCompletions {
    private static getFnCompletions(pos: vscode.Position, dataItems: FunctionCompletionData[], token?: BaseToken) {
        let completionItems: vscode.CompletionItem[] = [];
        let range: vscode.Range;
        if (token) {
            const startPos = new vscode.Position(token.line, token.startCharacter);
            const endPos = new vscode.Position(token.line, token.startCharacter + token.length);
            range = new vscode.Range(startPos, endPos);
        } else {
            const startPos = new vscode.Position(pos.line, pos.character);
            range = new vscode.Range(startPos, startPos);
        }

        dataItems.forEach((item) => {
            const noArgs = item.signature.startsWith(item.name + '()');
            const suffixBrackets = noArgs ? '()${0}' : '(${0})';
            const newItem = new vscode.CompletionItem(item.name, vscode.CompletionItemKind.Function);
            newItem.documentation = new vscode.MarkdownString(item.description);
            newItem.detail = item.signature;
            newItem.insertText = new vscode.SnippetString(item.name + suffixBrackets);
            newItem.range = range;
            //newItem.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            completionItems.push(newItem);
        });
        return completionItems;
    }
}

export interface FunctionCompletionData {
    name: string;
    signature: string;
    description: string;
}
