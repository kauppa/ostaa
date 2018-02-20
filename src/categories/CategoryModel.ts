import Model from "../models";

class CategoryModel extends Model {

    id: string | null;

    name: string | null;

    description: string | null;

    static instantiateFrom(object: {}): CategoryModel {
        return Object.assign(new CategoryModel(), object);
    }
}

export default CategoryModel;
