vscode how to install  in VSCode
# vscode-dfdl README

The "vscode-dfdl"extension.provides auto completion for Data Format Description Language (DFDL) schemas.

## Features

Tags can be auto suggested using control space to produce a list of context sensitive items.  Inside a
tag a space or carriage return will trigger a list of context sensitive attribute suggestions.

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! 
We recommend short, focused animations that are easy to follow.

## Requirements

No additional requirements are needed.
## Extension Settings

None

## Known Issues

The extension uses a clunky method to auto complete curly braces within quotes.  Hopefully this can be
better addressed in the future.  The auto complete method blocks auto completion suggestions while typing between the beginning qoute, opening curly brace and the closing curly brace, ending quote.

Syntax and semantic colorization isn't implemented.

## Release Notes

First beta release. Feedback is appreciated. To install run the code command with the path to the
vsix file. Ex:
> code Downloads\vscode-dfdl-0.0.1.vsix

After installing the extension, open the pallet (ctrl+shift+P) select 'Change Language Mode' and
choose 'dfdl'.

-----------------------------------------------------------------------------------------------------------
