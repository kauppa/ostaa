import log from "tipu";

import Resource from "../resources";
import ProductVariantResponse from "./ProductVariantResponse";

/**
 * Product variant resources for persisting and querying product variants.
 */
class ProductVariantResource extends Resource {

    /**
     * Fetches all of the available product variants.
     *
     * @param parentId ID of the parent product to fetch the variants.
     * @param first When paging results, this allows the amount of items in the
     *              first page to be specified. Defaults to 20.
     * @returns A promise with a list of `ProductVariantResponse` entities.
     */
    fetchAll(parentId: string, first = 20): Promise<ProductVariantResponse[]> {
        return this.client.getAll(`/products/${parentId}/variants`);
    }

    /**
     * Fetches a single product variant based on the ID provided.
     *
     * @param id Identity of the product variant to retrieve.
     * @returns A promise with a single `ProductVariantResponse` object.
     */
    fetch(id: string): Promise<ProductVariantResponse> {
        return this.client.get(`/variants/${id}`);
    }
}

export default ProductVariantResource;
