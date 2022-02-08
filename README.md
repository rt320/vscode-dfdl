# vscode-dfdl README

The "vscode-dfdl"extension.provides auto completion for Data Format Description Language (DFDL) schemas.

## Set the editor to dfdl mode
![TurnOnDfdlMode](https://user-images.githubusercontent.com/98881959/152995118-e2da5835-027e-4ff7-90f9-baf36a7e04bb.gif)

## Features

Auto suggest is triggered using control space or typing the beginning characters of an item.
![CtrlSpaceTrigger](https://user-images.githubusercontent.com/98881959/152995218-65d5b5b6-b610-495d-af31-69dd81be58c1.gif)

Typing one or more unique characters will further limit the results.
![CharacterTrigger](https://user-images.githubusercontent.com/98881959/152995254-1de6d39e-a482-4cb5-b7f3-7444932d056f.gif)

Add the schema block
![SchemaBlock](https://user-images.githubusercontent.com/98881959/152995294-7d70b7c6-186b-41e1-8a48-81ebfc3e04bc.gif)

Completing a DFDL Format Block.
![DfdlFormat](https://user-images.githubusercontent.com/98881959/152995321-ef0b2d45-32e6-4e3a-b5aa-859aa937cc3a.gif)

The '>' or '/' characters are used to close and XML tag.
Typing the initial characters and one or more unique characters will further limit the results.
Use the Tab to select an item from the drop down and to exit double quotes
![TabToExitQuotesAndEndTag](https://user-images.githubusercontent.com/98881959/152995446-77a33620-7277-4d9a-8dd7-f88349299ec9.gif)

Creating self define dfdl:complextypes and dfdl:simpleTypes.
![SelfDefinedTypes](https://user-images.githubusercontent.com/98881959/152995652-e56bc55d-78ba-46f6-a26c-6d7bd4440e96.gif)

The tab key can be used to complete an auto-complete item within an XML tag.
After auto complete is triggered, typing the initial character or characters will limit the suggestion results.
Inside an XML tag a space or carriage return will trigger a list of context sensitive attribute suggestions.
![AttributeSuggestions](https://user-images.githubusercontent.com/98881959/152995682-466be4bb-7f3f-4dcc-84bc-09792bc26adc.gif)

Using self defined types.
![UsingSelfDefinedTypes](https://user-images.githubusercontent.com/98881959/152995737-2f31e4e8-525d-4cb5-a5d7-a0413a087a54.gif)

Using xs:choice and dfdl:Discriminator.
![ChoiceDiscriminator](https://user-images.githubusercontent.com/98881959/152995769-b6afda2b-dd77-4f7a-ad18-b3e1f28087f6.gif)

## Requirements

Node.js (https://nodejs.org/en/download/)
VS Code (https://code.visualstudio.com/download)

Open a terminal window in VS Code. Run:
  npm install typescript

## Suggestions

After TypeScript is installed. Run:
npm run watch

Watch will automatically compile code when it changes
After watch runs, fix any problems in the Problems tab

Run the extension in debug mode
![StartDebugMode](https://user-images.githubusercontent.com/98881959/152995881-982a321a-6926-460f-aa37-e4c3a5fa7dff.gif)

## Package the Extension

In a VS Code terminal window, run:
  npm install -g vsce

After the vsce install completes, run:
  vsce package

to the three warnings type 'y'.

The package vscode-dfdl-0.0.1.vsix should be in the project director.

## Install the Extension

Close VS Code if it is open. From an OS Command line, run:
  code --install-extension "path to vsix file"\vscode-dfdl-0.0.1.vsix

Re-open VS Code, open the pallet (ctrl+shift+P)
  select or type 'Change Language Mode'
  choose 'dfdl'

## Extension Settings

None

## Known Issues

The extension uses a clunky method to auto complete curly braces within quotes.  Hopefully this can be
better addressed in the future.  The auto complete method blocks auto completion suggestions while typing between the beginning qoute, opening curly brace and the closing curly brace, ending quote.

Syntax and semantic colorization isn't implemented.

## Release Notes

First beta release. Feedback is appreciated.

-----------------------------------------------------------------------------------------------------------
