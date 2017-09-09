import {BooleanNumber} from "../common/types";

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
};