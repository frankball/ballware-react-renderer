[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / DetailEditPopupProps

# Interface: DetailEditPopupProps

Properties for grid detail edit popup

## Hierarchy

* **DetailEditPopupProps**

## Table of contents

### Properties

- [applyChanges](detaileditpopupprops.md#applychanges)
- [column](detaileditpopupprops.md#column)
- [readonly](detaileditpopupprops.md#readonly)

## Properties

### applyChanges

• **applyChanges**: (`e`: { `value`: *undefined* \| *string* \| *number* \| *boolean* \| *Record*<*string*, *unknown*\> \| Date \| (*string* \| *number* \| *Record*<*string*, *unknown*\>)[] \| { `lat`: *number* ; `lng`: *number*  } \| *CrudItem*  }) => *void*

Apply changes callback after editing finished

Defined in: [src/renderfactorycontext.ts:236](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L236)

___

### column

• **column**: GridLayoutColumn

Edited column in grid

Defined in: [src/renderfactorycontext.ts:231](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L231)

___

### readonly

• **readonly**: *boolean*

Detail edit content is readonly (view mode)

Defined in: [src/renderfactorycontext.ts:226](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L226)
