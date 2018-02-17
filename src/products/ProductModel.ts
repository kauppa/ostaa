import Model from "../models/Model";

/**
 * Product object representing editable product information in Kauppa.
 */
class ProductModel extends Model {

    id: string;

    title: string;

    subtitle: string | null;

    description: string | null;

    overview: string | null;

    tags: string[];

    color: string | null;

    inventory: number;

    taxInclusive: boolean | null;

    retailPrice: number | null;

}

export default ProductModel;
