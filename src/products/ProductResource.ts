import log from "tipu";

import Resource from "../resources";
import ProductModel from './ProductModel';

/**
 *  Produce resources for persisting and querying products.
 */
class ProductResource extends Resource {

    /**
     * Fetches all of the available products.
     *
     * @param first When paging results, this allows the amount of items in the
     *              first page to be specified. Defaults to 20.
     * @returns A promise with a list of `ProductModel` entities.
     */
    fetchAll(first = 20): Promise<ProductModel[]> {
        return this.client.getAll(`/products`);
    }

    /**
     * Fetches a single product based on the ID provided.
     *
     * @param id Identity of the product to retrieve.
     * @returns A promise with a single `ProductModel` object.
     */
    fetch(id: string): Promise<ProductModel> {
        return this.client.get(`/products/${id}`);
    }

    /**
     * Persists a single product to the store service.
     *
     * @param product `ProductDataModel` to persist to the service.
     * @returns A promise with a single `ProductModel` object, updated.
     */
    persist(product: ProductModel): Promise<ProductModel> {
        return this.client.post<ProductModel>(`/products`, product);
    }

    /**
     * Update a single product to the store service.
     *
     * @param product Updated `ProductDataModel` to pass to the service.
     * @returns A promise with a single `ProductModel` object.
     */
    update(id: string, product: ProductModel): Promise<ProductModel> {
        return this.client.put(`/products/${id}`, product);
    }

    /**
     * Deletes a single product from the store service.
     *
     * @returns A promise with `ProductModel` from the service. If successful, the 
     * `ProductModel` will be complete and correct. If unsuccessful the response will be empty.
     */
    delete(id: string): Promise<ProductModel> {
        return this.client.delete(`/products/${id}`);
    }
}

export default ProductResource;