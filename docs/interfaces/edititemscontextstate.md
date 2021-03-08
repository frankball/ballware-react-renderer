[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / EditItemsContextState

# Interface: EditItemsContextState

Context providing environmental functionality for rendered edit layout

## Hierarchy

* **EditItemsContextState**

## Table of contents

### Properties

- [EditProvider](edititemscontextstate.md#editprovider)
- [detailEditorEntered](edititemscontextstate.md#detaileditorentered)
- [detailEditorEvent](edititemscontextstate.md#detaileditorevent)
- [detailEditorInitialized](edititemscontextstate.md#detaileditorinitialized)
- [detailEditorPreparing](edititemscontextstate.md#detaileditorpreparing)
- [detailEditorValidating](edititemscontextstate.md#detaileditorvalidating)
- [detailEditorValueChanged](edititemscontextstate.md#detaileditorvaluechanged)
- [detailGridCellPreparing](edititemscontextstate.md#detailgridcellpreparing)
- [detailGridRowValidating](edititemscontextstate.md#detailgridrowvalidating)
- [editorEntered](edititemscontextstate.md#editorentered)
- [editorEvent](edititemscontextstate.md#editorevent)
- [editorInitialized](edititemscontextstate.md#editorinitialized)
- [editorPreparing](edititemscontextstate.md#editorpreparing)
- [editorValidating](edititemscontextstate.md#editorvalidating)
- [editorValueChanged](edititemscontextstate.md#editorvaluechanged)
- [getDetailValue](edititemscontextstate.md#getdetailvalue)
- [getLookup](edititemscontextstate.md#getlookup)
- [getValue](edititemscontextstate.md#getvalue)
- [initNewDetailItem](edititemscontextstate.md#initnewdetailitem)
- [readOnly](edititemscontextstate.md#readonly)
- [renderEditLayoutItems](edititemscontextstate.md#rendereditlayoutitems)

## Properties

### EditProvider

• `Optional` **EditProvider**: *undefined* \| (`props`: *PropsWithChildren*<{ `editLayout`: *undefined* \| EditLayout ; `functionIdentifier?`: *undefined* \| *string* ; `item`: *undefined* \| *string* \| *number* \| *boolean* \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  } \| *CrudItem* \| *CrudItem*[]  }\>) => *Element*

Factory for generating new edit provider

Defined in: [src/common/edititemscontext.tsx:263](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L263)

___

### detailEditorEntered

• `Optional` **detailEditorEntered**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*) => *void*

Detail editor entered focus

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

Defined in: [src/common/edititemscontext.tsx:217](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L217)

___

### detailEditorEvent

• `Optional` **detailEditorEvent**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*, `event`: *string*) => *void*

Detail editor event triggered

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Editor event identifier

Defined in: [src/common/edititemscontext.tsx:230](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L230)

___

### detailEditorInitialized

• `Optional` **detailEditorInitialized**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*, `editor`: [*EditorRef*](editorref.md)) => *void*

Manipulate detail editor component after creation

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Reference to editor component

Defined in: [src/common/edititemscontext.tsx:171](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L171)

___

### detailEditorPreparing

• `Optional` **detailEditorPreparing**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*, `options`: EditLayoutItemOptions) => *void*

Manipulate detail editor options before rendering

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Detail editor options

Defined in: [src/common/edititemscontext.tsx:157](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L157)

___

### detailEditorValidating

• `Optional` **detailEditorValidating**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*, `identifier`: *string*, `value`: ValueType) => *boolean*

Execute custom validation rule for detail editor

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Identifier of custom validation rule

**`param`** Current editor value

**`returns`** true if value passes validation

Defined in: [src/common/edititemscontext.tsx:187](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L187)

___

### detailEditorValueChanged

• `Optional` **detailEditorValueChanged**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember`: *string*, `value`: ValueType, `notify`: *boolean*) => *void*

Value changed in detail editor

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`param`** Current value of editor

**`param`** True if value change is triggered by user, false if value change was triggered by custom script

Defined in: [src/common/edititemscontext.tsx:203](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L203)

___

### detailGridCellPreparing

• `Optional` **detailGridCellPreparing**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `options`: GridLayoutColumn) => *void*

Manipulate detail grid cell options before rendering

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Grid column options

Defined in: [src/common/edititemscontext.tsx:133](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L133)

___

### detailGridRowValidating

• `Optional` **detailGridRowValidating**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>) => *string*

Validate detail row before save operation

**`param`** Data member of detail collection

**`param`** Detail item in row

**`returns`** Validation message or translation id if validation fails, undefined if row passes validation

Defined in: [src/common/edititemscontext.tsx:145](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L145)

___

### editorEntered

• `Optional` **editorEntered**: *undefined* \| (`dataMember`: *string*) => *void*

Editor entered focus

**`param`** Data member of editor

Defined in: [src/common/edititemscontext.tsx:118](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L118)

___

### editorEvent

• `Optional` **editorEvent**: *undefined* \| (`dataMember`: *string*, `event`: *string*) => *void*

Editor triggered specific event

**`param`** Data member of editor

**`param`** Event identifier

Defined in: [src/common/edititemscontext.tsx:125](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L125)

___

### editorInitialized

• `Optional` **editorInitialized**: *undefined* \| (`dataMember`: *string*, `editor`: [*EditorRef*](editorref.md)) => *void*

Initialize editor component after first rendering

**`param`** Data member of editor

**`param`** Editor component reference

Defined in: [src/common/edititemscontext.tsx:87](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L87)

___

### editorPreparing

• `Optional` **editorPreparing**: *undefined* \| (`dataMember`: *string*, `item`: EditLayoutItemOptions) => *void*

Manipulate editor options before rendering

**`param`** Data member of editor

**`param`** Editor options

Defined in: [src/common/edititemscontext.tsx:80](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L80)

___

### editorValidating

• `Optional` **editorValidating**: *undefined* \| (`dataMember`: *string*, `identifier`: *string*, `value`: ValueType) => *boolean*

Validate custom validation rule for editor

**`param`** Data member of editor

**`param`** Identifier of custom validation rule

**`param`** Current value of editor

**`returns`** true if value passed validation

Defined in: [src/common/edititemscontext.tsx:96](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L96)

___

### editorValueChanged

• `Optional` **editorValueChanged**: *undefined* \| (`dataMember`: *string*, `value`: ValueType, `notify`: *boolean*) => *void*

Editor value has changed event

**`param`** Data member of editor

**`param`** Current value of editor

**`param`** True if value change was triggered by user, false if value change was triggered by application

Defined in: [src/common/edititemscontext.tsx:108](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L108)

___

### getDetailValue

• `Optional` **getDetailValue**: *undefined* \| <T\>(`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>, `detailMember?`: *string*) => T

Get value in detail row

**`param`** Data member of detail collection

**`param`** Detail item in row

**`param`** Data member of detail editor

**`returns`** Detail member value

Defined in: [src/common/edititemscontext.tsx:244](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L244)

___

### getLookup

• `Optional` **getLookup**: *undefined* \| (`identifier`: *string*) => LookupDescriptor \| LookupCreator

Get lookup descriptor by identifier

**`returns`** Lookup descriptor or lookup creator method

Defined in: [src/common/edititemscontext.tsx:67](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L67)

___

### getValue

• `Optional` **getValue**: *undefined* \| <T\>(`dataMember?`: *string*) => T

Get typed value from edited item by data member

**`param`** Member path in edited item

**`returns`** Property value as requested type

Defined in: [src/common/edititemscontext.tsx:61](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L61)

___

### initNewDetailItem

• `Optional` **initNewDetailItem**: *undefined* \| (`dataMember`: *string*, `detailItem`: *Record*<*string*, *unknown*\>) => *void*

Initialize new created detail item

**`param`** Data member of detail collection

**`param`** New created detail item

Defined in: [src/common/edititemscontext.tsx:255](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L255)

___

### readOnly

• `Optional` **readOnly**: *undefined* \| () => *boolean*

Check if edit form is read only

**`returns`** true if edit form is read only

Defined in: [src/common/edititemscontext.tsx:73](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L73)

___

### renderEditLayoutItems

• `Optional` **renderEditLayoutItems**: *undefined* \| (`items`: EditLayoutItem[]) => *undefined* \| *Element*[]

Render list of layout items

**`param`** Collection of layout item metadata

**`returns`** Collection of rendered items

Defined in: [src/common/edititemscontext.tsx:52](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/common/edititemscontext.tsx#L52)
