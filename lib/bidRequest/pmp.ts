import {BooleanNumber} from "../common/types";
import {Deal} from "./deal";

export type Pmp = {
    private_auction: BooleanNumber
    deals: Deal[]
    ext: any
}