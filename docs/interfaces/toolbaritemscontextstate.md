[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / ToolbarItemsContextState

# Interface: ToolbarItemsContextState

Context providing environmental functionality for toolbar items

## Hierarchy

* **ToolbarItemsContextState**

## Table of contents

### Properties

- [getLookup](toolbaritemscontextstate.md#getlookup)
- [paramEditorEvent](toolbaritemscontextstate.md#parameditorevent)
- [paramEditorInitialized](toolbaritemscontextstate.md#parameditorinitialized)
- [paramEditorValueChanged](toolbaritemscontextstate.md#parameditorvaluechanged)
- [paramsInitialized](toolbaritemscontextstate.md#paramsinitialized)

## Properties

### getLookup

• `Optional` **getLookup**: *undefined* \| (`identifier`: *string*) => LookupDescriptor \| LookupCreator

Get lookup descriptor by lookup identifier

**`param`** Identifier for lookup

**`returns`** Lookup descriptor or lookup creator function

Defined in: [src/common/toolbaritemscontext.tsx:35](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/toolbaritemscontext.tsx#L35)

___

### paramEditorEvent

• `Optional` **paramEditorEvent**: *undefined* \| (`identifier`: *string*, `event`: *string*, `param?`: ValueType) => *void*

Parameter editor event triggered

**`param`** Identifier of parameter editor

**`param`** Specific identifier of event

**`param`** Optional event specific parameter

Defined in: [src/common/toolbaritemscontext.tsx:66](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/toolbaritemscontext.tsx#L66)

___

### paramEditorInitialized

• `Optional` **paramEditorInitialized**: *undefined* \| (`identifier`: *string*, `toolbarItem`: [*ToolbarItemRef*](toolbaritemref.md)) => *void*

Parameter editor for identifier is inizialized (and displayed)

**`param`** Identifier of parameter editor

**`param`** Reference to toolbar item component

Defined in: [src/common/toolbaritemscontext.tsx:48](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/toolbaritemscontext.tsx#L48)

___

### paramEditorValueChanged

• `Optional` **paramEditorValueChanged**: *undefined* \| (`identifier`: *string*, `value`: ValueType) => *void*

Parameter editor value changed

**`param`** Identifier of parameter editor

**`param`** Current value of parameter editor

Defined in: [src/common/toolbaritemscontext.tsx:58](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/toolbaritemscontext.tsx#L58)

___

### paramsInitialized

• `Optional` **paramsInitialized**: *undefined* \| (`hidden`: *boolean*) => *void*

All parameter editors initialized

**`param`** True if parameter editor display is hidden because of media limitations

Defined in: [src/common/toolbaritemscontext.tsx:41](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/toolbaritemscontext.tsx#L41)
