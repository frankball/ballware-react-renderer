import React, { useState, createContext, useEffect, useContext, useMemo, useCallback, useImperativeHandle, forwardRef } from 'react';

import { CrudItem, EditLayout, EditLayoutItem, EditLayoutItemOptions, EditUtil, ValueType } from '@ballware/meta-interface';
import { ProviderFactoryContext, MetaContext, EditContext, EditModes, LookupDescriptor, LookupCreator, LookupContext } from '@ballware/react-contexts';

import { EditorRef } from './editor';
import { RenderFactoryContext } from '../renderfactorycontext';
import { getByPath, setByPath } from './databinding';

export interface EditItemsContextState {
    renderEditLayoutItems?: (items: Array<EditLayoutItem>) => JSX.Element[] | undefined,
    getValue?: <T>(dataMember?: string) => T;
    getLookup?: (identifier: string) => LookupDescriptor | LookupCreator;
    readOnly?: () => boolean;
    editorPreparing?: (dataMember: string, item: EditLayoutItemOptions) => void;
    editorInitialized?: (dataMember: string, editor: EditorRef) => void;
    editorValidating?: (dataMember: string, identifier: string, value: ValueType) => boolean;
    editorValueChanged?: (dataMember: string, value: ValueType, notify: boolean) => void;
    editorEntered?: (dataMember: string) => void;
    editorEvent?: (dataMember: string, event: string) => void;

    detailGridCellPreparing?: (dataMember: string, detailItem: Record<string, unknown>, options: unknown) => void;
    detailGridRowValidating?: (dataMember: string, detailItem: Record<string, unknown>) => string;

    getDetailValue?: <T>(dataMember: string, rowKey: number, detailField?: string) => T;

    detailGridEditorPreparing?: (dataMember: string, rowKey: number, detailField: string, detailItem: Record<string, unknown>, options: unknown) => void;
    detailGridEditorInitialized?: (dataMember: string, rowKey: number, detailField: string, editor: EditorRef) => void;
    detailGridEditorValidating?: (dataMember: string, rowKey: number, detailField: string, identifier: string, value: ValueType) => boolean;
    detailGridEditorValueChanged?: (dataMember: string, rowKey: number, detailField: string, value: ValueType, notify: boolean) => void;
    detailGridEditorEntered?: (dataMember: string, rowKey: number, detailField: string) => void;
    detailGridEditorEvent?: (dataMember: string, rowKey: number, detailField: string, event: string) => void;
    
    initNewDetailItem?: (dataMember: string, detailItem: Record<string, unknown>) => void;
    EditProvider?: (props: { editLayout: EditLayout | undefined, item: CrudItem | Array<CrudItem> | ValueType, functionIdentifier?: string | undefined, children: JSX.Element | Array<JSX.Element> }) => JSX.Element;
}

export interface EditItemsContextProps {
    children: JSX.Element | JSX.Element[]
}

export const EditItemsContext = createContext<EditItemsContextState>({});

export interface EditItemsProviderRef {
    validate(): boolean;
}

export const EditItemsProvider = forwardRef<EditItemsProviderRef, EditItemsContextProps>(({ children }: EditItemsContextProps, ref) => {

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

    const getDetailItemRow = useCallback((detailMember: string, rowKey: number) => {
        if (item) {
            return ((item as Record<string, unknown>)[detailMember] as Array<Record<string, unknown>>)[rowKey]
        }

        return undefined;
    }, [item]);

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
                    editorPreparing: (dataMember, layoutItem) => editorPreparing(mode, item as Record<string, unknown>, { options: layoutItem }, dataMember),
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

                    detailGridEditorPreparing: (dataMember, _rowKey, detailField, detailItem) => editorPreparing(mode, detailItem, undefined, `${dataMember}.${detailField}`),
                    detailGridEditorInitialized: (dataMember, rowKey, detailField, editor) => {
                        editors[`${dataMember}.${detailField}`] = editor;
                        editorInitialized(mode, getDetailItemRow(dataMember, rowKey) ?? {}, editUtilForDetail(dataMember), `${dataMember}.${detailField}`);
                    },
                    detailGridEditorValueChanged: (dataMember, rowKey, detailField, value, notify) => {
                        const detailItem = getDetailItemRow(dataMember, rowKey) ?? {};

                        setByPath(detailItem, detailField, value);

                        if (notify) {
                            editorValueChanged(mode, detailItem, editUtilForDetail(dataMember), `${dataMember}.${detailField}`, value);
                        }
                    },
                    detailGridEditorValidating: (dataMember, rowKey, detailField, identifier, value) => editorValidating(mode, getDetailItemRow(dataMember, rowKey) ?? {}, editUtilForDetail(dataMember), `${dataMember}.${detailField}`, value, identifier),
                    detailGridEditorEntered: (dataMember, rowKey, detailField) => editorEntered(mode, getDetailItemRow(dataMember, rowKey) ?? {}, editUtilForDetail(dataMember), `${dataMember}.${detailField}`),
                    detailGridEditorEvent: (dataMember, rowKey, detailField, event) => editorEvent(mode, getDetailItemRow(dataMember, rowKey) ?? {}, editUtilForDetail(dataMember), `${dataMember}.${detailField}`, event),

                    EditProvider: (props) => <EditProvider mode={mode} {...props}/>
                } as EditItemsContextState;
            });
        }
    }, [EditProvider, item, mode, editUtil, editorPreparing, editorInitialized, editorValidating, editorValueChanged, editorEntered, editorEvent, detailGridCellPreparing, detailGridRowValidating, initNewDetailItem]);

    return <EditItemsContext.Provider value={value}>{children}</EditItemsContext.Provider>;
});