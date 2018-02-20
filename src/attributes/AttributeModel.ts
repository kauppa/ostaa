import Model from "../models";

/**
 * Custom attribute object for products/collections in Kauppa.
 */
class AttributeModel extends Model {

    id: string | null;

    name: string | null;

    type: string | null;

    variants: string[] | null;

    value: string;

    unit: string | null;
}

export default AttributeModel;
