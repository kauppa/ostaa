import Model from "../models";

/**
 * Object representing the tax information of an entity.
 */
class UnitTaxModel extends Model {

    category: string | undefined;

    rate: number;

    total: number;

    inclusive: boolean;
}

export default UnitTaxModel;
