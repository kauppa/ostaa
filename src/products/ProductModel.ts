import log from "tipu";

import { DimensionsModel, MeasurementModel, Model, PriceModel } from "../models";
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

    overview: string | null = null;

    categories: CategoryModel[] | null = [];

    tags: string[] | null = [];

    dimensions: DimensionsModel | null = new DimensionsModel();

    color: string | null = null;

    weight: MeasurementModel | null = new MeasurementModel();

    inventory: number = 0;

    price: PriceModel = new PriceModel();

    taxInclusive: boolean | null = null;

    actualPrice: number | null = null;

    custom: AttributeModel[] = [];
}

export default ProductModel;
