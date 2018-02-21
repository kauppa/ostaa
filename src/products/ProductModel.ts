import log from "tipu";

import { DimensionsModel, MeasurementModel, Model } from "../models";
import AttributeModel from "../attributes/AttributeModel";
import CategoryModel from "../categories/CategoryModel";

/**
 * Product object representing editable product information in Kauppa.
 */
class ProductModel extends Model {

    id: string;

    createdOn: string;

    updatedAt: string;

    title: string = "";

    subtitle: string = "";

    description: string = "";

    overview: string | undefined;

    categories: CategoryModel[] | undefined = [];

    tags: string[] | undefined = [];

    dimensions: DimensionsModel | undefined = new DimensionsModel();

    color: string | undefined;

    weight: MeasurementModel | undefined = new MeasurementModel();

    inventory: number = 0;

    price: number = 0;

    /**
     * ISO 4217 unit representation of the currency unit.
     */
    currency: string = "";

    taxInclusive: boolean | undefined;

    actualPrice: number | undefined;

    custom: AttributeModel[] = [];
}

export default ProductModel;
