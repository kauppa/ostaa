import Model from "./Model";

/**
 * Price object for `Product` objects.
 */
class PriceModel extends Model {
    /**
     * Price value (float).
     */
    value: number;

    /**
     * ISO 4217 unit representation of the currency unit.
     */
    unit: string;
}

export default PriceModel;
