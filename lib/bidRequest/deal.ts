import {Currency} from "../common/enums";

export type Deal = {
    id: string
    bidfloor?: number
    bidfloorcur?: Currency
    at?: number
    wseat?: string[]
    wadomain?: string[]
    ext?: any
};