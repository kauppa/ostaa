import log from "tipu";

import { MeasurementModel, Model } from "../models";
import AttributeModel from "./AttributeModel";
import CategoryModel from "./CategoryModel";
import UnitTaxModel from "../tax/UnitTaxModel";

/**
 * Product response object returned by the service.
 */
class ProductResponse extends Model {

    id: string;

    title: string = "";

    subtitle: string = "";

    description: string = "";

    overview: string | undefined;

    categories: CategoryModel[];

    tags: string[];

    weight: MeasurementModel | undefined;

    language: string[];

    images: string[];

    price: number = 0;

    /**
     * ISO 4217 unit representation of the currency unit.
     */
    currency: string = "";

    attributes: AttributeModel[];

    parentId: string | undefined;

    alternatives: string[];

    tax: UnitTaxModel | undefined;
}

export default ProductResponse;
