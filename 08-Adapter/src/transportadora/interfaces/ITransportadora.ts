import TrackingCode from "../../utils/TrackingCode";

export default interface ITransportadora{
    trackingCode(): TrackingCode;
    send(): void;
    receive(): void;
}