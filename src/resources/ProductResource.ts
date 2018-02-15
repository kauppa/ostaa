import * as log from '../util/logging';

import Resource from './Resource';
import ProductModel from '../models/ProductModel';

/** 
 *  Produce resources for persisting and querying products.
 */
class ProductResource extends Resource {

    /**
     * Fetches all of the available products. 
     * 
     * @param first When paging results, this allows the amount of items in the
     *              first page to be specified. Defaults to 20.
     * @returns List of ProductModel entities.
     */
    fetchAll(first = 20): [ProductModel] {
        return [ProductModel];
    }
}

export default ProductResource;