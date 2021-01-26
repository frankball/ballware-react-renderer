import React, { useContext } from 'react';
import { CrudContainerOptions, PageLayoutItem } from '@ballware/meta-interface';
import { PageContext, ProviderFactoryContext } from '@ballware/react-contexts';
import { CrudFunctions} from './crudfunctions'; 
import { RenderFactoryContext } from '../renderfactorycontext';

export interface LayoutCrudContainerProps {
    layoutItem: PageLayoutItem;  
    params?: Record<string, unknown>;  
    children?: JSX.Element | JSX.Element[];
  }
  
  export const LayoutCrudContainer = ({ layoutItem, params, children }: LayoutCrudContainerProps) => {
    const { LookupProvider, MetaProvider, CrudProvider } = useContext(ProviderFactoryContext);
    const { customParam } = useContext(PageContext);
    const { PageLayoutItem } = useContext(RenderFactoryContext);
  
    if (customParam && PageLayoutItem && LookupProvider && MetaProvider && CrudProvider) {
        return (<LookupProvider>
        <MetaProvider entity={(layoutItem.options?.itemoptions as CrudContainerOptions)?.entity} readOnly={false} headParams={params ?? {}} initialCustomParam={customParam ?? {}}>
            <CrudProvider query={(layoutItem.options?.itemoptions as CrudContainerOptions)?.query ?? 'primary'} initialFetchParams={params}>
            <CrudFunctions>
                <React.Fragment>{layoutItem.items?.map((item, index) => <PageLayoutItem key={index} colCount={item.colCount} layoutItem={item} params={params}/>)}</React.Fragment>
                <React.Fragment>{children}</React.Fragment>
            </CrudFunctions>
            </CrudProvider>
        </MetaProvider>
        </LookupProvider>);
    } else {
        return <React.Fragment></React.Fragment>;
    }
  }