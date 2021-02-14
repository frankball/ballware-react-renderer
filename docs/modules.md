[@ballware/react-renderer](README.md) / Exports

# @ballware/react-renderer

## Table of contents

### Interfaces

- [ApplicationBarProps](interfaces/applicationbarprops.md)
- [ApplicationProps](interfaces/applicationprops.md)
- [CrudContainerProps](interfaces/crudcontainerprops.md)
- [CrudFunctionsProps](interfaces/crudfunctionsprops.md)
- [DeletePopupProps](interfaces/deletepopupprops.md)
- [DetailEditPopupProps](interfaces/detaileditpopupprops.md)
- [EditItemsContextState](interfaces/edititemscontextstate.md)
- [EditItemsProviderProps](interfaces/edititemsproviderprops.md)
- [EditItemsProviderRef](interfaces/edititemsproviderref.md)
- [EditLayoutItemProps](interfaces/editlayoutitemprops.md)
- [EditPopupProps](interfaces/editpopupprops.md)
- [EditorProps](interfaces/editorprops.md)
- [EditorRef](interfaces/editorref.md)
- [ForeignEditPopupProps](interfaces/foreigneditpopupprops.md)
- [IframePopupProps](interfaces/iframepopupprops.md)
- [NavigationProps](interfaces/navigationprops.md)
- [PageLayoutItemProps](interfaces/pagelayoutitemprops.md)
- [PageToolbarItemProps](interfaces/pagetoolbaritemprops.md)
- [PageToolbarProps](interfaces/pagetoolbarprops.md)
- [PrivateRouteProps](interfaces/privaterouteprops.md)
- [RenderFactoryContextState](interfaces/renderfactorycontextstate.md)
- [ToolbarItemRef](interfaces/toolbaritemref.md)
- [ToolbarItemsContextState](interfaces/toolbaritemscontextstate.md)
- [ToolbarItemsProviderProps](interfaces/toolbaritemsproviderprops.md)

### Variables

- [EditItemsContext](modules.md#edititemscontext)
- [EditItemsProvider](modules.md#edititemsprovider)
- [RenderFactoryContext](modules.md#renderfactorycontext)
- [ToolbarItemsContext](modules.md#toolbaritemscontext)

### Functions

- [CrudContainer](modules.md#crudcontainer)
- [CrudFunctions](modules.md#crudfunctions)
- [ToolbarItemsProvider](modules.md#toolbaritemsprovider)
- [getByPath](modules.md#getbypath)
- [setByPath](modules.md#setbypath)
- [useInterval](modules.md#useinterval)

## Variables

### EditItemsContext

• `Const` **EditItemsContext**: *Context*<[*EditItemsContextState*](interfaces/edititemscontextstate.md)\>

Defined in: [src/common/edititemscontext.tsx:185](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/edititemscontext.tsx#L185)

___

### EditItemsProvider

• `Const` **EditItemsProvider**: *ForwardRefExoticComponent*<[*EditItemsProviderProps*](interfaces/edititemsproviderprops.md) & *RefAttributes*<[*EditItemsProviderRef*](interfaces/edititemsproviderref.md)\>\>

Provides environmental functionality for edit layout items

Defined in: [src/common/edititemscontext.tsx:207](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/edititemscontext.tsx#L207)

___

### RenderFactoryContext

• `Const` **RenderFactoryContext**: *Context*<[*RenderFactoryContextState*](interfaces/renderfactorycontextstate.md)\>

Defined in: [src/renderfactorycontext.ts:334](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/renderfactorycontext.ts#L334)

___

### ToolbarItemsContext

• `Const` **ToolbarItemsContext**: *Context*<[*ToolbarItemsContextState*](interfaces/toolbaritemscontextstate.md)\>

Defined in: [src/common/toolbaritemscontext.tsx:57](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/toolbaritemscontext.tsx#L57)

## Functions

### CrudContainer

▸ `Const`**CrudContainer**(`__namedParameters`: *PropsWithChildren*<[*CrudContainerProps*](interfaces/crudcontainerprops.md)\>): *Element*

Provides a set of providers needed for crud operations for a specific entity

#### Parameters:

• **__namedParameters**: *PropsWithChildren*<[*CrudContainerProps*](interfaces/crudcontainerprops.md)\>

**Returns:** *Element*

Defined in: [src/common/crudcontainer.tsx:32](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/crudcontainer.tsx#L32)

___

### CrudFunctions

▸ `Const`**CrudFunctions**(`__namedParameters`: *PropsWithChildren*<[*CrudFunctionsProps*](interfaces/crudfunctionsprops.md)\>): *Element*

Component providing crud editing functionality with popups

#### Parameters:

• **__namedParameters**: *PropsWithChildren*<[*CrudFunctionsProps*](interfaces/crudfunctionsprops.md)\>

**Returns:** *Element*

Defined in: [src/common/crudfunctions.tsx:24](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/crudfunctions.tsx#L24)

___

### ToolbarItemsProvider

▸ `Const`**ToolbarItemsProvider**(`__namedParameters`: *PropsWithChildren*<[*ToolbarItemsProviderProps*](interfaces/toolbaritemsproviderprops.md)\>): *Element*

Provides environmental functionality for toolbar items

#### Parameters:

• **__namedParameters**: *PropsWithChildren*<[*ToolbarItemsProviderProps*](interfaces/toolbaritemsproviderprops.md)\>

**Returns:** *Element*

Defined in: [src/common/toolbaritemscontext.tsx:68](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/toolbaritemscontext.tsx#L68)

___

### getByPath

▸ `Const`**getByPath**(`item`: *Record*<*string*, *unknown*\>, `dataMember`: *string*): *unknown*

Find property value in a dot separated path of object tree

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | *Record*<*string*, *unknown*\> | Root item of object tree   |
`dataMember` | *string* | Dot separated path of data property in tree   |

**Returns:** *unknown*

Value of property if found in tree

Defined in: [src/common/databinding.ts:14](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/databinding.ts#L14)

___

### setByPath

▸ `Const`**setByPath**(`item`: *Record*<*string*, *unknown*\>, `dataMember`: *string*, `value`: *unknown*): *void*

Set property value in a dot separated path of object tree

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | *Record*<*string*, *unknown*\> | Root item of object tree   |
`dataMember` | *string* | Dot separated path of data property in tree   |
`value` | *unknown* | New value of property    |

**Returns:** *void*

Defined in: [src/common/databinding.ts:40](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/databinding.ts#L40)

___

### useInterval

▸ `Const`**useInterval**(`callback`: *any*, `delay`: *number*): *void*

Hook triggering callback in a time intervall

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | *any* | Callback to be triggered   |
`delay` | *number* | Delay in milliseconds    |

**Returns:** *void*

Defined in: [src/common/customhooks.ts:15](https://github.com/frankball/ballware-react-renderer/blob/0e29664/src/common/customhooks.ts#L15)
