import TrackingCode from "../../utils/TrackingCode";

export default interface ICorreios{
    trackingCode(): TrackingCode;
    sendCorreios(): void;
    receiveCorreios(): void;
}