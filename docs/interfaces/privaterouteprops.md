[@ballware/react-renderer](../README.md) / [Exports](../modules.md) / PrivateRouteProps

# Interface: PrivateRouteProps

Properties for auth protected routes

## Hierarchy

* *RouteProps*

  ↳ **PrivateRouteProps**

## Table of contents

### Properties

- [allowed](privaterouteprops.md#allowed)
- [children](privaterouteprops.md#children)
- [component](privaterouteprops.md#component)
- [exact](privaterouteprops.md#exact)
- [location](privaterouteprops.md#location)
- [path](privaterouteprops.md#path)
- [render](privaterouteprops.md#render)
- [sensitive](privaterouteprops.md#sensitive)
- [strict](privaterouteprops.md#strict)

## Properties

### allowed

• **allowed**: () => *boolean*

Check if route is allowed to be accessed by authenticated user

**`returns`** true if access is allowed

Defined in: [src/renderfactorycontext.ts:70](https://github.com/frankball/ballware-react-renderer/blob/625dfe5/src/renderfactorycontext.ts#L70)

___

### children

• `Optional` **children**: *undefined* \| *null* \| *string* \| *number* \| *boolean* \| {} \| *ReactElement*<*any*, *string* \| (`props`: *any*) => *null* \| *ReactElement*<*any*, *string* \| (props: any) =\> ReactElement<any, string \| ... \| (new (props: any) =\> Component<any, any, any\>)\> \| null \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| (`props`: *any*) => *Component*<*any*, *any*, *any*\>\> \| *ReactNodeArray* \| *ReactPortal* \| (`props`: *RouteChildrenProps*<*any*, *unknown*\>) => ReactNode

Defined in: node_modules/@types/react-router/index.d.ts:90

___

### component

• `Optional` **component**: *undefined* \| *ComponentClass*<*RouteComponentProps*<*any*, StaticContext, *unknown*\>, *any*\> \| *FunctionComponent*<*RouteComponentProps*<*any*, StaticContext, *unknown*\>\> \| *ComponentClass*<*any*, *any*\> \| *FunctionComponent*<*any*\>

Defined in: node_modules/@types/react-router/index.d.ts:88

___

### exact

• `Optional` **exact**: *undefined* \| *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:92

___

### location

• `Optional` **location**: *undefined* \| *Location*<*unknown*\>

Defined in: node_modules/@types/react-router/index.d.ts:87

___

### path

• `Optional` **path**: *undefined* \| *string* \| *string*[]

Defined in: node_modules/@types/react-router/index.d.ts:91

___

### render

• `Optional` **render**: *undefined* \| (`props`: *RouteComponentProps*<*any*, StaticContext, *unknown*\>) => ReactNode

Defined in: node_modules/@types/react-router/index.d.ts:89

___

### sensitive

• `Optional` **sensitive**: *undefined* \| *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:93

___

### strict

• `Optional` **strict**: *undefined* \| *boolean*

Defined in: node_modules/@types/react-router/index.d.ts:94
