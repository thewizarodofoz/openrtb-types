import {Data} from "./data";
import {Geo} from "./geo";

export type User = {
    id?: string
    buyeruid?: string
    yob?: number
    gender?: string
    keywords?: string
    customdata?: string
    geo?: Geo
    data?: Data[]
    ext?: any
};