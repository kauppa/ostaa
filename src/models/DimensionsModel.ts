import Model from "./Model";
import MeasurementModel from "./MeasurementModel";

class DimensionsModel extends Model {

    height: MeasurementModel | undefined = new MeasurementModel();

    length: MeasurementModel | undefined = new MeasurementModel();

    width: MeasurementModel | undefined = new MeasurementModel();
}

export default DimensionsModel;
