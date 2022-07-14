import {BooleanNumber} from "../common/types";
import {Publisher} from "./publisher";
import {Content} from "./content";

export type Site = {
    id?: string
    name?: string
    domain?: string
    cat?: string[]
    sectioncat?: string[]
    pagecat?: string[]
    page?: string
    ref?: string
    search?: string
    mobile?: BooleanNumber
    privacypolicy?: BooleanNumber
    publisher?: Publisher
    content?: Content
    keywords?: string
    ext?: any
};
