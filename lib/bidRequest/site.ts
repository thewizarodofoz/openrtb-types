import {BooleanNumber} from "../common/types";
import {Publisher} from "./publisher";

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
};
