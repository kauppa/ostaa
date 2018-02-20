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
}

export default ProductResource;
