import {BooleanNumber} from "../common/types";
import {Publisher} from "./publisher";
import {Content} from "./content";

export type App = {
    id?: string
    name?: string
    domain?: string
    cat?: string[]
    sectioncat?: string[]
    pagecat?: string[]
    page?: string
    ref?: string
    search?: string
    mobile?: number
    privacypolicy?: BooleanNumber
    paid?: BooleanNumber
    publisher?: Publisher
    content?: Content
    keywords?: string
    ext?: any
}