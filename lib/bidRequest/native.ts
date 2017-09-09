import {APIFramework, CreativeAttribute} from "../common/enums";

export type Native = {
    request: string
    ver?: string
    api?: APIFramework
    battr?: CreativeAttribute[]
    ext?: any
}