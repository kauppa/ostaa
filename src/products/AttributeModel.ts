import Model from "../models";

/**
 * Custom attribute object for products/collections in Kauppa.
 */
class AttributeModel extends Model {

    id: string | undefined;

    name: string | undefined;

    type: string | undefined;

    variants: string[] | undefined;

    value: string;

    unit: string | undefined;
}

export default AttributeModel;
