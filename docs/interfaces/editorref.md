[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / EditorRef

# Interface: EditorRef

Reference for edit layout item

## Hierarchy

* **EditorRef**

## Table of contents

### Properties

- [getOption](editorref.md#getoption)
- [setOption](editorref.md#setoption)
- [validate](editorref.md#validate)

## Properties

### getOption

• **getOption**: (`option`: *string*) => *unknown*

Get option value from editor component

**`param`** Identifier of option

**`returns`** Current value of option

Defined in: [src/common/editor.ts:24](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/editor.ts#L24)

___

### setOption

• **setOption**: (`option`: *string*, `value`: *unknown*) => *void*

Set option value in editor component

**`param`** Identifier of option

**`param`** New value of option

Defined in: [src/common/editor.ts:17](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/editor.ts#L17)

___

### validate

• **validate**: () => *boolean*

Trigger validation of editor

**`returns`** true if validation of current value passes

Defined in: [src/common/editor.ts:30](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/editor.ts#L30)
