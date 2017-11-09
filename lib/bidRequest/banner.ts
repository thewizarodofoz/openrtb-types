import {Format} from "./format";
import {BooleanNumber} from "../common/types";
import {APIFramework, ExpandableDirection, MimeType} from "../common/enums";

export type Banner = {
    format?: Format
    w?: number
    h?: number
    btype?: number[]
    battr?: number[]
    pos?: number
    mimes?: MimeType[]
    topframe?: BooleanNumber
    expdir?: ExpandableDirection[]
    api?: APIFramework[]
    id?: string
    vcm?: BooleanNumber
    ext?: any
}