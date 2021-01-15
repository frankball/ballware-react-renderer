import { createContext } from 'react';

import {
  EditLayoutItem,
  EditLayoutItemOptions,
  PageLayoutItem,
  PageToolbarItem,
} from '@ballware/meta-interface';
import { RouteProps } from 'react-router-dom';

export interface ApplicationProps {
  drawerWidth?: string | number;
  children?: JSX.Element | JSX.Element[] | never[];
}

export interface ApplicationBarProps {
  title?: string;
  drawerWidth: string | number;
  onMenuToggle?: () => void;
  children?: JSX.Element | JSX.Element[];
}

export interface NavigationProps {
  onMenuToggle?: () => void;
  children?: JSX.Element | JSX.Element[];
}

export interface PrivateRouteProps extends RouteProps {
  allowed: () => boolean;
}

export interface ContextProps {
  children?: JSX.Element | JSX.Element[];
}

export interface RenderFactoryContextState {
  Context?: (props: { children: JSX.Element | JSX.Element[] }) => JSX.Element;
  Application?: (props: ApplicationProps) => JSX.Element;
  ApplicationBar?: (props: ApplicationBarProps) => JSX.Element;
  Navigation?: (props: NavigationProps) => JSX.Element;
  PrivateRoute?: (props: PrivateRouteProps) => JSX.Element;
  Routes?: (props: {}) => JSX.Element;
  Notification?: (props: {}) => JSX.Element;
  Page?: (props: {}) => JSX.Element;
  PageToolbar?: (props: {
    documentationIdentifier?: string;
    title?: string;
    items?: PageToolbarItem[];
  }) => JSX.Element;
  PageLayoutItem?: (props: {
    layoutItem: PageLayoutItem;
    colCount?: number;
    params?: Record<string, unknown>;
  }) => JSX.Element;
  EditLayoutItem?: (props: {
    layoutItem: EditLayoutItem;
    colCount?: number;
  }) => JSX.Element;
  Editor?: (props: {
    type: string;
    options: EditLayoutItemOptions;
  }) => JSX.Element;
  PageToolbarItem?: (props: { toolbarItem: PageToolbarItem }) => JSX.Element;
}

export const RenderFactoryContext = createContext<RenderFactoryContextState>(
  {}
);
