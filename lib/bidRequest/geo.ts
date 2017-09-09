import {IPLocationService, LocationType} from "../common/enums";

export type Geo = {
    lat?: number
    lon?: number
    type?: LocationType
    accuracy?: number
    lastfix?: number
    ipservice?: IPLocationService
    country?: string
    region?: string
    regionfips104?: string
    metro?: string
    city?: string
    zip?: string
    utcoffset?: number
    ext?: any
};