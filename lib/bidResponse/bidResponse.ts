import {SeatBid} from "./seatBid";
import {NoBidReasonCode} from "../common/enums";

export type BidResponse = {
    id: string
    seatbid?: SeatBid[]
    bidid?: string
    cur?: string
    customdata?: string
    nbr?: NoBidReasonCode
    ext?: any
}