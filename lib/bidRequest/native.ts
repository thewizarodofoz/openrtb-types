import {APIFramework, CreativeAttribute} from "../common/enums";
import {RequestNative} from "./nativeRequest";

export type Native = {
    request: string
    requestNative ?: RequestNative.NativeRequest
    ver?: string
    api?: APIFramework
    battr?: CreativeAttribute[]
    ext?: any
}
