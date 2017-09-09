import {Bid} from "./bid";
import {BooleanNumber} from "../common/types";

export type SeatBid = {
    bid: Bid[]
    seat?: string
    group?: BooleanNumber
    ext?: any
};