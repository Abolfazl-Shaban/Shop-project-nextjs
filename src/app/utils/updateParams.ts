import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const updateParams = (key: string, value: string | number | undefined,params : URLSearchParams,router : AppRouterInstance) => {
    if (value != 'page') {
      params.delete('page');
    }
    if (value) {
      params.set(key, value.toString());
    } else {
      params.delete(key);
    }

    router.replace(`/products?${params.toString()}`);
  };