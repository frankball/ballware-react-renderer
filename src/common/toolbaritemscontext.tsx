import React, { useState, createContext, useEffect, useContext, useMemo } from 'react';

import { EditUtil, ValueType } from '@ballware/meta-interface';
import { ToolbarItemRef } from './toolbar';
import { LookupDescriptor, LookupCreator, LookupContext, PageContext } from '@ballware/react-contexts';

export interface ToolbarItemsContextState {
    getLookup?: (identifier: string) => LookupDescriptor | LookupCreator;

    paramsInitialized?: (hidden: boolean) => void;
    paramEditorInitialized?: (name: string, toolbarItem: ToolbarItemRef) => void;
    paramEditorValueChanged?: (name: string, value: ValueType) => void;
    paramEditorEvent?: (name: string, event: string, param?: ValueType) => void;
}

export interface ToolbarItemsContextProps {
    children: JSX.Element | JSX.Element[] | undefined
}

export const ToolbarItemsContext = createContext<ToolbarItemsContextState>({});

export const ToolbarItemsProvider = ({ children }: ToolbarItemsContextProps) => {

    const [value, setValue] = useState<ToolbarItemsContextState>({});

    const { lookups, lookupsComplete } = useContext(LookupContext);
    const { paramsInitialized, paramEditorInitialized, paramEditorValueChanged, paramEditorEvent } = useContext(PageContext);
            
    const toolbarItems = useMemo(() => {
        return {} as Record<string, ToolbarItemRef>;
    }, []);

    const toolbarUtil = useMemo(() => {
        if (toolbarItems) {
            return {
                getEditorOption: (dataMember, option) => toolbarItems[dataMember] ? toolbarItems[dataMember].getOption(option) : undefined,
                setEditorOption: (dataMember, option, value) => toolbarItems[dataMember] ? toolbarItems[dataMember].setOption(option, value) : undefined
            } as EditUtil;
        }

        return undefined;
    }, [toolbarItems]);

    useEffect(() => {
        if (lookups && lookupsComplete) {
            setValue(previousValue => {
                return {
                    ...previousValue,
                    getLookup: (identifier) => {
                        return lookups[identifier];
                    }
                } as ToolbarItemsContextState;
            });
        }
    }, [lookups, lookupsComplete]);

    useEffect(() => {
        if (toolbarUtil && paramsInitialized && paramEditorInitialized && paramEditorValueChanged && paramEditorEvent) {
            setValue(previousValue => {
                return {
                    ...previousValue,
                    paramsInitialized: (hidden) => paramsInitialized(hidden),
                    paramEditorInitialized: (name, toolbarItem) => {
                        toolbarItems[name] = toolbarItem;

                        paramEditorInitialized(name, toolbarUtil); 
                    }, 
                    paramEditorValueChanged: (name, value) => paramEditorValueChanged(name, value, toolbarUtil),
                    paramEditorEvent: (name, event, param) => paramEditorEvent(name, event, toolbarUtil, param)                  
                } as ToolbarItemsContextState;
            });
        }
    }, [toolbarUtil, paramEditorInitialized, paramEditorValueChanged, paramEditorEvent, paramsInitialized]);

    return <ToolbarItemsContext.Provider value={value}>{children}</ToolbarItemsContext.Provider>;
}