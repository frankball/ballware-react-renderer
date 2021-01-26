import React, { useEffect, useContext, useCallback } from 'react';

import { CrudItem } from '@ballware/meta-interface';
import { ProviderFactoryContext, LookupContext, CrudContext, MetaContext, EditModes } from '@ballware/react-contexts';
import { RenderFactoryContext } from '../renderfactorycontext';

export interface ItemFunction {
  id: string;
  text: string;
  icon: string;
  multi: boolean;
  visible: (item: CrudItem) => boolean;
  execute: (item: CrudItem, target: Element) => void;
  executeMulti: (items: Array<CrudItem>, target: Element) => void;
}

export interface CrudFunctionsProps {
  match?: {
    isExact: boolean; params: { action?: string; id?: string };
  };
  children: JSX.Element | Array<JSX.Element>;
}

export const CrudFunctions = (props: CrudFunctionsProps) => {

  const { children } = props;

  const { lookups, lookupsComplete } = useContext(LookupContext);

  const { EditPopup, DeletePopup, IframePopup, ForeignEditPopup } = useContext(RenderFactoryContext);

  const { LookupProvider, MetaProvider, CrudProvider, EditProvider } = useContext(ProviderFactoryContext);
  const { displayName, getEditLayout, documents } = useContext(MetaContext);
  const { load, fetchParams, close, adding, viewing, editing, deleteing, customEditing, customEditFunction, customEditParam, editLayout, item } = useContext(CrudContext);


  useEffect(() => {
    if (load && fetchParams) {
      load(fetchParams);
    }
  }, [load, fetchParams]);

  const getEditLayoutForIdentifier = useCallback((layoutIdentifier: string) => {
    if (getEditLayout) {
      return getEditLayout(layoutIdentifier ?? 'primary');    
    }

    return undefined;
  }, [getEditLayout]);

  return (<React.Fragment>
    {(EditProvider && EditPopup && adding && item && editLayout) && <EditProvider mode={EditModes.CREATE} editLayout={getEditLayoutForIdentifier(editLayout)} item={item}><EditPopup title={`${displayName} anlegen`} /></EditProvider>}
    {(EditProvider && EditPopup && viewing && item && editLayout) && <EditProvider mode={EditModes.VIEW} editLayout={getEditLayoutForIdentifier(editLayout)} item={item}><EditPopup title={`${displayName} anzeigen`} /></EditProvider>}
    {(EditProvider && EditPopup && editing && item && editLayout) && <EditProvider mode={EditModes.EDIT} editLayout={getEditLayoutForIdentifier(editLayout)} item={item}><EditPopup title={`${displayName} bearbeiten`} /></EditProvider>}
    {(EditProvider && EditPopup && customEditing && !customEditFunction?.externalEditor && !customEditFunction?.entity && customEditFunction?.editLayout && getEditLayout) 
      && <EditProvider mode={EditModes.EDIT} editLayout={getEditLayoutForIdentifier(customEditFunction?.editLayout)} item={customEditParam as Record<string, unknown>} functionIdentifier={customEditFunction?.id}><EditPopup title={`${customEditFunction?.text}`} /></EditProvider>}
    {(IframePopup && customEditing && customEditFunction?.externalEditor) && <IframePopup title={`${customEditFunction?.text}`} url={customEditParam as string} />}
    {(ForeignEditPopup && LookupProvider && MetaProvider && CrudProvider && customEditing && !customEditFunction?.externalEditor && customEditFunction?.entity && close && load) &&
      <LookupProvider>
        <MetaProvider entity={customEditFunction.entity} readOnly={false} headParams={{}} initialCustomParam={{}}>
          <CrudProvider query={undefined} initialFetchParams={{}}>
            <ForeignEditPopup functionIdentifier={customEditFunction.id} selection={customEditParam as CrudItem[]} editingFinished={(reload) => {
              close();

              if (reload) {
                load(fetchParams);
              }
            }} /> 
          </CrudProvider>
        </MetaProvider>
      </LookupProvider>}
    {(DeletePopup && deleteing && item) && <DeletePopup title={displayName + " entfernen"} message={displayName + " wirklich entfernen?"} id={item.Id} />}
    {(displayName && getEditLayout && lookups && documents && lookupsComplete) && children}
  </React.Fragment>);
}