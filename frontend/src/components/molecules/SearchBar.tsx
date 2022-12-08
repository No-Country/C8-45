import { useEffect, useRef, createElement, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import algoliasearch from 'algoliasearch/lite';

import type { AutocompleteComponents } from '@algolia/autocomplete-js';
import type { Hit } from '@algolia/client-search';
import type { Root } from 'react-dom/client';

import '@algolia/autocomplete-theme-classic';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
const appId = import.meta.env.VITE_ALGOLIA_APP_ID;
const apiKey = import.meta.env.VITE_ALGOLIA_SEARCH_KEY;
const searchClient = algoliasearch(appId, apiKey);
type ProductHit = Hit<{
  name: string;
  website: string;
  id: string;
}>;

const SearchBar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete<ProductHit>({
      container: containerRef.current,
      placeholder: 'Search',
      getSources({ query }) {
        return [
          {
            sourceId: 'products',
            getItems() {
              return getAlgoliaResults<ProductHit>({
                searchClient,
                queries: [
                  {
                    indexName: 'companiesSearch',
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return (
                  <ProductItem
                    hit={item}
                    components={components}
                    callback={navigate}
                  />
                );
              },
              noResults() {
                return 'No companies matching, make a new review for them  .';
              },
            },
          },
        ];
      },
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;
          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
    });

    return () => {
      search.destroy();
    };
  }, []);
  return <div ref={containerRef} />;
};
type ProductItemProps = {
  hit: ProductHit;
  components: AutocompleteComponents;
  callback: NavigateFunction;
};
function ProductItem({ hit, components, callback }: ProductItemProps) {
  return (
    <button
      onClick={() => {
        callback(`/business/${hit.objectID}`);
      }}
      className="flex flex-col font-poppins"
    >
      <span className="text-blue-600 text-xl ">
        <components.Highlight hit={hit} attribute="name" />
      </span>
      <span>
        <components.Highlight hit={hit} attribute="website" />
      </span>
    </button>
  );
}
export default SearchBar;
