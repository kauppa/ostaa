import log from "tipu";

import Resource from "../resources";
import CategoryModel from "./CategoryModel";

class CategoryResource extends Resource {
    /**
     * Fetches all of the available categories.
     *
     * @returns A promise with a list of `CategoryModel` entities.
     */
    fetchAll(): Promise<CategoryModel[]> {
        return this.client.getAll(`/categories`);
    }
}

export default CategoryResource;
