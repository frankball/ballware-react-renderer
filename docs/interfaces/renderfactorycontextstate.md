[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / RenderFactoryContextState

# Interface: RenderFactoryContextState

Context providing rendered items from render plugin

## Hierarchy

* **RenderFactoryContextState**

## Table of contents

### Properties

- [Application](renderfactorycontextstate.md#application)
- [ApplicationBar](renderfactorycontextstate.md#applicationbar)
- [Context](renderfactorycontextstate.md#context)
- [DeletePopup](renderfactorycontextstate.md#deletepopup)
- [DetailEditPopup](renderfactorycontextstate.md#detaileditpopup)
- [EditLayoutItem](renderfactorycontextstate.md#editlayoutitem)
- [EditPopup](renderfactorycontextstate.md#editpopup)
- [Editor](renderfactorycontextstate.md#editor)
- [ForeignEditPopup](renderfactorycontextstate.md#foreigneditpopup)
- [IframePopup](renderfactorycontextstate.md#iframepopup)
- [Navigation](renderfactorycontextstate.md#navigation)
- [Notification](renderfactorycontextstate.md#notification)
- [Page](renderfactorycontextstate.md#page)
- [PageLayoutItem](renderfactorycontextstate.md#pagelayoutitem)
- [PageToolbar](renderfactorycontextstate.md#pagetoolbar)
- [PageToolbarItem](renderfactorycontextstate.md#pagetoolbaritem)
- [PrivateRoute](renderfactorycontextstate.md#privateroute)
- [Routes](renderfactorycontextstate.md#routes)

## Properties

### Application

• `Optional` **Application**: *undefined* \| (`props`: *PropsWithChildren*<[*ApplicationProps*](applicationprops.md)\>) => *Element*

Provide application window component

Defined in: [src/renderfactorycontext.ts:251](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L251)

___

### ApplicationBar

• `Optional` **ApplicationBar**: *undefined* \| (`props`: *PropsWithChildren*<[*ApplicationBarProps*](applicationbarprops.md)\>) => *Element*

Provide main application bar component

Defined in: [src/renderfactorycontext.ts:256](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L256)

___

### Context

• `Optional` **Context**: *undefined* \| (`props`: { `children?`: ReactNode  }) => *Element*

Provide context component with shared functionality for render plugin

Defined in: [src/renderfactorycontext.ts:246](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L246)

___

### DeletePopup

• `Optional` **DeletePopup**: *undefined* \| (`props`: [*DeletePopupProps*](deletepopupprops.md)) => *Element*

Provide delete popup

Defined in: [src/renderfactorycontext.ts:323](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L323)

___

### DetailEditPopup

• `Optional` **DetailEditPopup**: *undefined* \| (`props`: [*DetailEditPopupProps*](detaileditpopupprops.md)) => *Element*

Provide detail edit popup

Defined in: [src/renderfactorycontext.ts:333](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L333)

___

### EditLayoutItem

• `Optional` **EditLayoutItem**: *undefined* \| (`props`: [*EditLayoutItemProps*](editlayoutitemprops.md)) => *Element*

Provide edit layout item

Defined in: [src/renderfactorycontext.ts:298](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L298)

___

### EditPopup

• `Optional` **EditPopup**: *undefined* \| (`props`: [*EditPopupProps*](editpopupprops.md)) => *Element*

Provide edit popup

Defined in: [src/renderfactorycontext.ts:313](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L313)

___

### Editor

• `Optional` **Editor**: *undefined* \| (`props`: [*EditorProps*](editorprops.md)) => *Element*

Provide editor component

Defined in: [src/renderfactorycontext.ts:303](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L303)

___

### ForeignEditPopup

• `Optional` **ForeignEditPopup**: *undefined* \| (`props`: [*ForeignEditPopupProps*](foreigneditpopupprops.md)) => *Element*

Provide foreign edit popup

Defined in: [src/renderfactorycontext.ts:328](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L328)

___

### IframePopup

• `Optional` **IframePopup**: *undefined* \| (`props`: [*IframePopupProps*](iframepopupprops.md)) => *Element*

Provide iframe popup

Defined in: [src/renderfactorycontext.ts:318](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L318)

___

### Navigation

• `Optional` **Navigation**: *undefined* \| (`props`: *PropsWithChildren*<[*NavigationProps*](navigationprops.md)\>) => *Element*

Provide navigation tree component

Defined in: [src/renderfactorycontext.ts:263](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L263)

___

### Notification

• `Optional` **Notification**: *undefined* \| (`props`: {}) => *Element*

Provide notification component for display user notifications

Defined in: [src/renderfactorycontext.ts:278](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L278)

___

### Page

• `Optional` **Page**: *undefined* \| (`props`: {}) => *Element*

Provide page component for displaying metadata page

Defined in: [src/renderfactorycontext.ts:283](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L283)

___

### PageLayoutItem

• `Optional` **PageLayoutItem**: *undefined* \| (`props`: [*PageLayoutItemProps*](pagelayoutitemprops.md)) => *Element*

Provide page layout item

Defined in: [src/renderfactorycontext.ts:293](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L293)

___

### PageToolbar

• `Optional` **PageToolbar**: *undefined* \| (`props`: [*PageToolbarProps*](pagetoolbarprops.md)) => *Element*

Provide page toolbar component

Defined in: [src/renderfactorycontext.ts:288](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L288)

___

### PageToolbarItem

• `Optional` **PageToolbarItem**: *undefined* \| (`props`: [*PageToolbarItemProps*](pagetoolbaritemprops.md)) => *Element*

Provide page toolbar item component

Defined in: [src/renderfactorycontext.ts:308](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L308)

___

### PrivateRoute

• `Optional` **PrivateRoute**: *undefined* \| (`props`: [*PrivateRouteProps*](privaterouteprops.md)) => *Element*

Provide route component for restricted access

Defined in: [src/renderfactorycontext.ts:268](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L268)

___

### Routes

• `Optional` **Routes**: *undefined* \| (`props`: {}) => *Element*

Provide routes for router

Defined in: [src/renderfactorycontext.ts:273](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L273)
