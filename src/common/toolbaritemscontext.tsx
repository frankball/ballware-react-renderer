/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useMemo,
  PropsWithChildren,
} from 'react';

import { EditUtil, ValueType } from '@ballware/meta-interface';
import { ToolbarItemRef } from './toolbar';
import {
  LookupDescriptor,
  LookupCreator,
  LookupContext,
  PageContext,
} from '@ballware/react-contexts';

/**
 * Context providing environmental functionality for toolbar items
 */
export interface ToolbarItemsContextState {
  /**
   * Get lookup descriptor by lookup identifier
   * @param identifier Identifier for lookup
   * @returns Lookup descriptor or lookup creator function
   */
  getLookup?: (identifier: string) => LookupDescriptor | LookupCreator;

  /**
   * All parameter editors initialized
   * @param hidden True if parameter editor display is hidden because of media limitations
   */
  paramsInitialized?: (hidden: boolean) => void;

  /**
   * Parameter editor for identifier is inizialized (and displayed)
   * @param identifier Identifier of parameter editor
   * @param toolbarItem Reference to toolbar item component
   */
  paramEditorInitialized?: (
    identifier: string,
    toolbarItem: ToolbarItemRef
  ) => void;

  /**
   * Parameter editor value changed
   * @param identifier Identifier of parameter editor
   * @param value Current value of parameter editor
   */
  paramEditorValueChanged?: (identifier: string, value: ValueType) => void;

  /**
   * Parameter editor event triggered
   * @param identifier Identifier of parameter editor
   * @param event Specific identifier of event
   * @param param Optional event specific parameter
   */
  paramEditorEvent?: (
    identifier: string,
    event: string,
    param?: ValueType
  ) => void;
}

/**
 *
 */
export const ToolbarItemsContext = createContext<ToolbarItemsContextState>({});

/**
 * Properties for toolbar items provider
 */
export interface ToolbarItemsProviderProps {}

/**
 * Provides environmental functionality for toolbar items
 */
export const ToolbarItemsProvider = ({
  children,
}: PropsWithChildren<ToolbarItemsProviderProps>) => {
  const [value, setValue] = useState<ToolbarItemsContextState>({});

  const { lookups, lookupsComplete } = useContext(LookupContext);
  const {
    paramsInitialized,
    paramEditorInitialized,
    paramEditorValueChanged,
    paramEditorEvent,
  } = useContext(PageContext);

  const toolbarItems = useMemo(() => {
    return {} as Record<string, ToolbarItemRef>;
  }, []);

  const toolbarUtil = useMemo(() => {
    if (toolbarItems) {
      return {
        getEditorOption: (dataMember, option) =>
          toolbarItems[dataMember]
            ? toolbarItems[dataMember].getOption(option)
            : undefined,
        setEditorOption: (dataMember, option, value) =>
          toolbarItems[dataMember]
            ? toolbarItems[dataMember].setOption(option, value)
            : undefined,
      } as EditUtil;
    }

    return undefined;
  }, [toolbarItems]);

  useEffect(() => {
    if (lookups && lookupsComplete) {
      setValue(previousValue => {
        return {
          ...previousValue,
          getLookup: identifier => {
            return lookups[identifier];
          },
        } as ToolbarItemsContextState;
      });
    }
  }, [lookups, lookupsComplete]);

  useEffect(() => {
    if (
      toolbarUtil &&
      paramsInitialized &&
      paramEditorInitialized &&
      paramEditorValueChanged &&
      paramEditorEvent
    ) {
      setValue(previousValue => {
        return {
          ...previousValue,
          paramsInitialized: hidden => paramsInitialized(hidden),
          paramEditorInitialized: (name, toolbarItem) => {
            toolbarItems[name] = toolbarItem;

            paramEditorInitialized(name, toolbarUtil);
          },
          paramEditorValueChanged: (name, value) =>
            paramEditorValueChanged(name, value, toolbarUtil),
          paramEditorEvent: (name, event, param) =>
            paramEditorEvent(name, event, toolbarUtil, param),
        } as ToolbarItemsContextState;
      });
    }
  }, [
    toolbarUtil,
    toolbarItems,
    paramEditorInitialized,
    paramEditorValueChanged,
    paramEditorEvent,
    paramsInitialized,
  ]);

  return (
    <ToolbarItemsContext.Provider value={value}>
      {children}
    </ToolbarItemsContext.Provider>
  );
};
