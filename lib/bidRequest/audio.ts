import {
    APIFramework, CompanionType, ContentDeliveryMethod, CreativeAttribute, FeedType,
    Protocol, VolumeNormalizationMode, MimeType
} from "../common/enums";
import {Banner} from "./banner";
import {BooleanNumber} from "../common/types";

export type Audio = {
    mimes: MimeType[]
    minduration?: number
    maxduration?: number
    protocols?: Protocol
    startdelay?: number
    sequence?: number
    battr?: CreativeAttribute[]
    maxextended?: number
    minbitrate?: number
    maxbitrate?: number
    delivery?: ContentDeliveryMethod[]
    companionad?: Banner[]
    api?: APIFramework
    companiontype?: CompanionType[]
    maxseq?: number
    feed?: FeedType[]
    stitched?: BooleanNumber
    nvol?: VolumeNormalizationMode
    ext?: any
}