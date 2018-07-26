import log from "tipu";

import { StatusModel } from "../models";
import Resource from "../resources";
import CustomerRequest from "./CustomerRequest";
import CustomerResponse from "./CustomerResponse";

/**
 * Customer resources for persisting and querying customers.
 */
class CustomerResource extends Resource {

    /**
     * Fetches a single customer based on the ID provided.
     *
     * @param id Identity of the customer to retrieve.
     * @returns A promise with a single `CustomerResponse` object.
     */
    fetch(id: string): Promise<CustomerResponse> {
        return this.client.get(`/customers/${id}`);
    }

    /**
     * Persists a single customer to the store service.
     *
     * @param data `CustomerRequest` to persist to the service.
     * @returns A promise with a single `CustomerResponse` object, updated.
     */
    persist(data: CustomerRequest): Promise<CustomerResponse> {
        return this.client.post(`/customers`, data);
    }

    /**
     * Update a single customer to the store service.
     *
     * @param data Updated `CustomerRequest` to pass to the service.
     * @returns A promise with a single `CustomerResponse` object.
     */
    update(id: string, data: CustomerRequest): Promise<CustomerResponse> {
        return this.client.put(`/customers/${id}`, data);
    }

    /**
     * Deletes a single customer from the store service.
     *
     * @returns A promise with `StatusModel` from the service to represent
     * success/failure.
     */
    delete(id: string): Promise<StatusModel> {
        return this.client.delete(`/customers/${id}`);
    }
}

export default CustomerResource;
