/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useState, createContext, useEffect, useContext, useMemo, useCallback, useImperativeHandle, forwardRef, PropsWithChildren } from 'react';

import { CrudItem, EditLayout, EditLayoutItem, EditLayoutItemOptions, EditUtil, GridLayoutColumn, ValueType } from '@ballware/meta-interface';
import { ProviderFactoryContext, MetaContext, EditContext, EditModes, LookupDescriptor, LookupCreator, LookupContext } from '@ballware/react-contexts';

import { EditorRef } from './editor';
import { RenderFactoryContext } from '../renderfactorycontext';
import { getByPath, setByPath } from './databinding';

/**
 * Context providing environmental functionality for rendered edit layout
 */
export interface EditItemsContextState {
    /**
     * Render list of layout items
     * @param items Collection of layout item metadata
     * @returns Collection of rendered items
     */
    renderEditLayoutItems?: (items: Array<EditLayoutItem>) => JSX.Element[] | undefined,

    /**
     * Get typed value from edited item by data member
     * @param dataMember Member path in edited item
     * @returns Property value as requested type
     */
    getValue?: <T>(dataMember?: string) => T;

    /**
     * Get lookup descriptor by identifier
     * @returns Lookup descriptor or lookup creator method
     */
    getLookup?: (identifier: string) => LookupDescriptor | LookupCreator;

    /**
     * Check if edit form is read only 
     * @returns true if edit form is read only
     */
    readOnly?: () => boolean;

    /**
     * Manipulate editor options before rendering
     * @param dataMember Data member of editor
     * @param item Editor options
     */
    editorPreparing?: (dataMember: string, item: EditLayoutItemOptions) => void;

    /**
     * Initialize editor component after first rendering
     * @param dataMember Data member of editor
     * @param editor Editor component reference
     */
    editorInitialized?: (dataMember: string, editor: EditorRef) => void;

    /**
     * Validate custom validation rule for editor
     * @param dataMember Data member of editor
     * @param identifier Identifier of custom validation rule
     * @param value Current value of editor
     * @returns true if value passed validation
     */
    editorValidating?: (dataMember: string, identifier: string, value: ValueType) => boolean;

    /**
     * Editor value has changed event
     * @param dataMember Data member of editor     
     * @param value Current value of editor
     * @param notify True if value change was triggered by user, false if value change was triggered by application
     */
    editorValueChanged?: (dataMember: string, value: ValueType, notify: boolean) => void;

    /**
     * Editor entered focus
     * @param dataMember Data member of editor
     */
    editorEntered?: (dataMember: string) => void;

    /**
     * Editor triggered specific event
     * @param dataMember Data member of editor
     * @param event Event identifier
     */
    editorEvent?: (dataMember: string, event: string) => void;

    /**
     * Manipulate detail grid cell options before rendering
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param options Grid column options
     */
    detailGridCellPreparing?: (dataMember: string, detailItem: Record<string, unknown>, options: GridLayoutColumn) => void;

    /**
     * Validate detail row before save operation
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @returns Validation message or translation id if validation fails, undefined if row passes validation
     */
    detailGridRowValidating?: (dataMember: string, detailItem: Record<string, unknown>) => string;

    /**
     * Manipulate detail editor options before rendering
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @param options Detail editor options
     */
    detailEditorPreparing?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string, options: EditLayoutItemOptions) => void;

    /**
     * Manipulate detail editor component after creation
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @param editor Reference to editor component
     */
    detailEditorInitialized?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string, editor: EditorRef) => void;

    /**
     * Execute custom validation rule for detail editor
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @param identifier Identifier of custom validation rule
     * @param value Current editor value
     * @returns true if value passes validation
     */
    detailEditorValidating?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string, identifier: string, value: ValueType) => boolean;

    /**
     * Value changed in detail editor
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @param value Current value of editor
     * @param notify True if value change is triggered by user, false if value change was triggered by custom script
     */
    detailEditorValueChanged?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string, value: ValueType, notify: boolean) => void;

    /**
     * Detail editor entered focus
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     */
    detailEditorEntered?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string) => void;

    /**
     * Detail editor event triggered
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @param event Editor event identifier
     */
    detailEditorEvent?: (dataMember: string, detailItem: Record<string, unknown>, detailMember: string, event: string) => void;

    /**
     * Get value in detail row
     * @param dataMember Data member of detail collection
     * @param detailItem Detail item in row
     * @param detailMember Data member of detail editor
     * @returns Detail member value
     */
    getDetailValue?: <T>(dataMember: string, detailItem: Record<string, unknown>, detailMember?: string) => T;

    /**
     * Initialize new created detail item
     * @param dataMember Data member of detail collection
     * @param detailItem New created detail item
     */
    initNewDetailItem?: (dataMember: string, detailItem: Record<string, unknown>) => void;

    /**
     * Factory for generating new edit provider
     */
    EditProvider?: (props: PropsWithChildren<{ editLayout: EditLayout | undefined, item: CrudItem | Array<CrudItem> | ValueType, functionIdentifier?: string | undefined }>) => JSX.Element;
}

export const EditItemsContext = createContext<EditItemsContextState>({});

/**
 * Properties for edit items provider
 */
export interface EditItemsProviderProps {
}

/**
 * Reference for edit items provider
 */
export interface EditItemsProviderRef {
    /**
     * Validate editors in edit items provider
     * @returns true if validation passes
     */
    validate(): boolean;
}

/**
 * Provides environmental functionality for edit layout items
 */
export const EditItemsProvider = forwardRef<EditItemsProviderRef, EditItemsProviderProps>(({ children }: PropsWithChildren<EditItemsProviderProps>, ref) => {

    const [value, setValue] = useState<EditItemsContextState>({});
    
    const { EditLayoutItem } = useContext(RenderFactoryContext);
    const { EditProvider } = useContext(ProviderFactoryContext);
    const { lookups, lookupsComplete } = useContext(LookupContext);
    const { editorPreparing, editorInitialized, editorValidating, editorValueChanged, editorEntered, editorEvent, detailGridCellPreparing, detailGridRowValidating, initNewDetailItem } = useContext(MetaContext);
    const { item, mode } = useContext(EditContext);

    useImperativeHandle(ref, () => ({
        validate: () => {
            return Object.keys(editors).map(member => editors[member].validate()).every(Boolean);
        },
    }));

    const editors = useMemo(() => {
        return {} as Record<string, EditorRef>;
    }, []);

    const editUtil = useMemo(() => {
        if (editors) {
            return {
                getEditorOption: (dataMember, option) => editors[dataMember] ? editors[dataMember].getOption(option) : undefined,
                setEditorOption: (dataMember, option, value) => editors[dataMember] ? editors[dataMember].setOption(option, value) : undefined
            } as EditUtil;
        }

        return undefined;
    }, [editors]);

    const editUtilForDetail = useCallback((detailMember: string) => {
        if (editors) {
            return {
                getEditorOption: (dataMember, option) => editors[`${detailMember}.${dataMember}`] ? editors[`${detailMember}.${dataMember}`].getOption(option) : undefined,
                setEditorOption: (dataMember, option, value) => editors[`${detailMember}.${dataMember}`] ? editors[`${detailMember}.${dataMember}`].setOption(option, value) : undefined
            } as EditUtil;
        } else {
            return {} as EditUtil;
        }
    }, [editors]);

    useEffect(() => {
        if (EditLayoutItem) {
            setValue(previousValue => {
                return {
                    ...previousValue,
                    renderEditLayoutItems: (items) => {
                        return items?.map(item => <EditLayoutItem layoutItem={item} />);
                    }
                } as EditItemsContextState;
            });
        }
    }, [EditLayoutItem]);

    useEffect(() => {
        if (lookups && lookupsComplete) {
            setValue(previousValue => {
                return {
                    ...previousValue,
                    getLookup: (identifier) => {
                        return lookups[identifier];
                    }
                } as EditItemsContextState;
            });
        }
    }, [lookups, lookupsComplete]);

    useEffect(() => {
        if (EditProvider && item && mode && editors && editUtil && editUtilForDetail && editorPreparing && editorInitialized && editorValidating && editorValueChanged && editorEntered && editorEvent && detailGridCellPreparing && detailGridRowValidating && initNewDetailItem) {
            setValue(previousValue => {
                return {
                    ...previousValue,
                    getValue: (dataMember) => dataMember ? getByPath(item as Record<string, unknown>, dataMember) : item,                    
                    readOnly: () => mode === EditModes.VIEW,
                    editorPreparing: (dataMember, layoutItem) => editorPreparing(mode, item as Record<string, unknown>, layoutItem, dataMember),
                    editorInitialized: (dataMember, editor) => { 
                        editors[dataMember] = editor; 
                        editorInitialized(mode, item as Record<string, unknown>, editUtil, dataMember); 
                    },
                    editorEntered: (dataMember) => editorEntered(mode, item as Record<string, unknown>, editUtil, dataMember),
                    editorValueChanged: (dataMember, value, notify) => { 
                        setByPath(item as Record<string, unknown>, dataMember, value);

                        if (notify)
                            editorValueChanged(mode, item as Record<string, unknown>, editUtil, dataMember, value); 
                    }, 
                    editorValidating: (dataMember, identifier, value) => editorValidating(mode, item as Record<string, unknown>, editUtil, dataMember, value, identifier),
                    editorEvent: (dataMember, event) => editorEvent(mode, item as Record<string, unknown>, editUtil, dataMember, event),
                    detailGridCellPreparing: (dataMember, detailItem, options) => detailGridCellPreparing(mode, item as Record<string, unknown>, detailItem, dataMember, options), 
                    detailGridRowValidating: (dataMember, detailItem) => detailGridRowValidating(mode, item as Record<string, unknown>, detailItem, dataMember), 
                    initNewDetailItem: (dataMember, detailItem) => initNewDetailItem(dataMember, item as Record<string, unknown>, detailItem),

                    detailEditorPreparing: (dataMember, detailItem, detailMember, options) => editorPreparing(mode, detailItem, options, `${dataMember}.${detailMember}`),
                    detailEditorInitialized: (dataMember, detailItem, detailMember, editor) => {
                        editors[`${dataMember}.${detailMember}`] = editor;
                        editorInitialized(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailMember}`);
                    },
                    detailEditorValueChanged: (dataMember, detailItem, detailMember, value, notify) => {

                        setByPath(detailItem, detailMember, value);

                        if (notify) {
                            editorValueChanged(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailMember}`, value);
                        }
                    },
                    detailEditorValidating: (dataMember, detailItem, detailMember, identifier, value) => editorValidating(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailMember}`, value, identifier),
                    detailEditorEntered: (dataMember, detailItem, detailMember) => editorEntered(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailMember}`),
                    detailEditorEvent: (dataMember, detailItem, detailMember, event) => editorEvent(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailMember}`, event),

                    EditProvider: (props) => <EditProvider mode={mode} {...props}/>
                } as EditItemsContextState;
            });
        }
    }, [EditProvider, item, mode, editUtil, editorPreparing, editorInitialized, editorValidating, editorValueChanged, editorEntered, editorEvent, detailGridCellPreparing, detailGridRowValidating, initNewDetailItem]);

    return <EditItemsContext.Provider value={value}>{children}</EditItemsContext.Provider>;
});