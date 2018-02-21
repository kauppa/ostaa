import Model from "./Model";

enum Status {
    Ok      = "ok",
    Error   = "error"
}

/**
 * Status message from Kauppa. It's either "ok", or "error" with an error code.
 */
class StatusModel extends Model {

    status: Status;

    code: number | undefined;
}

export {
    Status,
    StatusModel
}
