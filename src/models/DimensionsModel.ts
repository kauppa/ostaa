import Model from "./Model";
import MeasurementModel from "./MeasurementModel";

class DimensionsModel extends Model {

    height: MeasurementModel | null = new MeasurementModel();

    length: MeasurementModel | null = new MeasurementModel();

    width: MeasurementModel | null = new MeasurementModel();
}

export default DimensionsModel;
