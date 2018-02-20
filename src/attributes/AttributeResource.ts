import log from "tipu";

import Resource from "../resources";
import AttributeModel from "./AttributeModel";

class AttributeResource extends Resource {
    /**
     * Fetches all of the available attributes.
     *
     * @returns A promise with a list of `AttributeModel` entities.
     */
    fetchAll(): Promise<AttributeModel[]> {
        return this.client.getAll(`/attributes`);
    }
}

export default AttributeResource;
