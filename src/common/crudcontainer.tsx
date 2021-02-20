/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { PropsWithChildren, useContext } from 'react';
import { CrudContainerOptions, PageLayoutItem, QueryParams } from '@ballware/meta-interface';
import { PageContext, ProviderFactoryContext } from '@ballware/react-contexts';
import { CrudFunctions} from './crudfunctions'; 
import { RenderFactoryContext } from '../renderfactorycontext';

/**
 * Properties for crudcontainer component
 */
export interface CrudContainerProps {
    /**
     * Layout item metadata for crudcontainer item
     */
    layoutItem: PageLayoutItem;  

    /**
     * Head params provided by parent container
     */
    params?: QueryParams;  
}
  
/**
 * Provides a set of providers needed for crud operations for a specific entity
 */
export const CrudContainer = ({ layoutItem, params, children }: PropsWithChildren<CrudContainerProps>) => {
    const { LookupProvider, MetaProvider, AttachmentProvider, CrudProvider } = useContext(ProviderFactoryContext);
    const { customParam } = useContext(PageContext);
    const { PageLayoutItem } = useContext(RenderFactoryContext);

    if (customParam && PageLayoutItem && LookupProvider && MetaProvider && AttachmentProvider && CrudProvider) {
        return (<LookupProvider>
        <MetaProvider entity={(layoutItem.options?.itemoptions as CrudContainerOptions)?.entity} readOnly={false} headParams={params ?? {}} initialCustomParam={customParam ?? {}}>
            <AttachmentProvider>
                <CrudProvider query={(layoutItem.options?.itemoptions as CrudContainerOptions)?.query ?? 'primary'} initialFetchParams={params}>
                    <CrudFunctions>
                        <React.Fragment>{layoutItem.items?.map((item, index) => <PageLayoutItem key={index} colCount={item.colCount} layoutItem={item} params={params}/>)}</React.Fragment>
                        <React.Fragment>{children}</React.Fragment>
                    </CrudFunctions>
                </CrudProvider>
            </AttachmentProvider>
        </MetaProvider>
        </LookupProvider>);
    } else {
        return <React.Fragment>Waiting...</React.Fragment>;
    }
}