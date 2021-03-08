/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext, PropsWithChildren } from 'react';

import {
  CrudItem,
  EditLayoutItem,
  EditLayoutItemOptions,
  GridLayoutColumn,
  PageLayoutItem,
  PageToolbarItem,
  QueryParams,
  ValueType,
} from '@ballware/meta-interface';
import { RouteProps } from 'react-router-dom';

/**
 * Properties for application component
 */
export interface ApplicationProps {
  /**
   * Width of navigation drawer
   */
  drawerWidth?: string | number;
}

/**
 * Properties for application bar component
 */
export interface ApplicationBarProps {
  /**
   * Title text for application bar
   */
  title?: string;

  /**
   * Width of navigation drawer
   */
  drawerWidth: string | number;

  /**
   * Burger menu button toggled
   */
  onMenuToggle?: () => void;
}

/**
 * Properties for navigation menu
 */
export interface NavigationProps {
  /**
   * Navigation menu display/hide toggled
   */
  onMenuToggle?: () => void;
}

/**
 * Properties for auth protected routes
 */
export interface PrivateRouteProps extends RouteProps {
  /**
   * Check if route is allowed to be accessed by authenticated user
   * @return true if access is allowed
   */
  allowed: () => boolean;
}

/**
 * Properties of edit popup
 */
export interface EditPopupProps {
  /**
   * Title text for popup
   */
  title: string;
}

/**
 * Properties for iframe popup
 */
export interface IframePopupProps {
  /**
   * Title text for iframe popup
   */
  title: string;

  /**
   * Url for iframe
   */
  url: string;
}

/**
 * Properties for delete popup
 */
export interface DeletePopupProps {
  /**
   * Title text for delete popup
   */
  title: string;

  /**
   * Content message in popup
   */
  message: string;

  /**
   * Identifier of item to be dropped
   */
  id: string;
}

/**
 * Properties for foreign edit popup
 */
export interface ForeignEditPopupProps {
  /**
   * Edit function identifier
   */
  functionIdentifier: string;

  /**
   * Selected items for foreign edit
   */
  selection: Array<CrudItem>;

  /**
   * Editing finished callback
   * @param reload Reload items in parent component
   */
  editingFinished: (reload: boolean) => void;
}

/**
 * Properties for page toolbar component
 */
export interface PageToolbarProps {
  /**
   * Identifier for showing documentation
   */
  documentationIdentifier?: string;

  /**
   * Title of page
   */
  title?: string;

  /**
   * Toolbar items metadata
   */
  items?: PageToolbarItem[];
}

/**
 * Properties for page toolbar item component
 */
export interface PageToolbarItemProps {
  /**
   * Toolbar item metadata
   */
  item: PageToolbarItem;
}

/**
 * Properties for page layout item
 */
export interface PageLayoutItemProps {
  /**
   * Layout item metadata
   */
  layoutItem: PageLayoutItem;

  /**
   * Number of layout columns used for layout item
   */
  colCount?: number;

  /**
   * Params provided by page
   */
  params?: QueryParams;
}

/**
 * Properties for edit layout item
 */
export interface EditLayoutItemProps {
  /**
   * Layout item metadata
   */
  layoutItem: EditLayoutItem;

  /**
   * Number of layout columns used for layout item
   */
  colCount?: number;
}

/**
 * Properties for editor component
 */
export interface EditorProps {
  /**
   * Type identifier for editor
   */
  type: string;

  /**
   * Options for editor
   */
  options: EditLayoutItemOptions;
}

/**
 * Properties for grid detail edit popup
 */
export interface DetailEditPopupProps {
  /**
   * Detail edit content is readonly (view mode)
   */
  readonly: boolean;

  /**
   * Edited column in grid
   */
  column: GridLayoutColumn;

  /**
   * Apply changes callback after editing finished
   */
  applyChanges: (e: { value: CrudItem | ValueType }) => void;
}

/**
 * Context providing rendered items from render plugin
 */
export interface RenderFactoryContextState {
  /**
   * Provide context component with shared functionality for render plugin
   */
  Context?: (props: PropsWithChildren<{}>) => JSX.Element;

  /**
   * Provide application window component
   */
  Application?: (props: PropsWithChildren<ApplicationProps>) => JSX.Element;

  /**
   * Provide main application bar component
   */
  ApplicationBar?: (
    props: PropsWithChildren<ApplicationBarProps>
  ) => JSX.Element;

  /**
   * Provide navigation tree component
   */
  Navigation?: (props: PropsWithChildren<NavigationProps>) => JSX.Element;

  /**
   * Provide route component for restricted access
   */
  PrivateRoute?: (props: PrivateRouteProps) => JSX.Element;

  /**
   * Provide routes for router
   */
  Routes?: (props: {}) => JSX.Element;

  /**
   * Provide notification component for display user notifications
   */
  Notification?: (props: {}) => JSX.Element;

  /**
   * Provide page component for displaying metadata page
   */
  Page?: (props: {}) => JSX.Element;

  /**
   * Provide page toolbar component
   */
  PageToolbar?: (props: PageToolbarProps) => JSX.Element;

  /**
   * Provide page layout item
   */
  PageLayoutItem?: (props: PageLayoutItemProps) => JSX.Element;

  /**
   * Provide edit layout item
   */
  EditLayoutItem?: (props: EditLayoutItemProps) => JSX.Element;

  /**
   * Provide editor component
   */
  Editor?: (props: EditorProps) => JSX.Element;

  /**
   * Provide page toolbar item component
   */
  PageToolbarItem?: (props: PageToolbarItemProps) => JSX.Element;

  /**
   * Provide edit popup
   */
  EditPopup?: (props: EditPopupProps) => JSX.Element;

  /**
   * Provide iframe popup
   */
  IframePopup?: (props: IframePopupProps) => JSX.Element;

  /**
   * Provide delete popup
   */
  DeletePopup?: (props: DeletePopupProps) => JSX.Element;

  /**
   * Provide foreign edit popup
   */
  ForeignEditPopup?: (props: ForeignEditPopupProps) => JSX.Element;

  /**
   * Provide detail edit popup
   */
  DetailEditPopup?: (props: DetailEditPopupProps) => JSX.Element;
}

export const RenderFactoryContext = createContext<RenderFactoryContextState>(
  {}
);
