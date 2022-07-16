import {APIFramework, CreativeAttribute} from "../common/enums";
import {NativeRequest} from "./nativeRequest";

export type Native = {
    request: string
    requestNative ?: NativeRequest
    ver?: string
    api?: APIFramework
    battr?: CreativeAttribute[]
    ext?: any
}
