import log from "tipu";

import { MeasurementModel, Model } from "../models";
import AttributeModel from "./AttributeModel";
import ProductResponse from "./ProductResponse";
import UnitTaxModel from "../tax/UnitTaxModel";

/**
 * Product request object for creating/updating a product.
 */
class ProductVariantResponse extends Model {

    id: string;

    parent: ProductResponse;

    images: string[];

    weight: MeasurementModel | undefined;

    price: number;

    attributes: AttributeModel[];

    inventory: number;

    tax: UnitTaxModel;

    currency: string;
}

export default ProductVariantResponse;
