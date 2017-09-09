import {
    AdPosition, APIFramework, CompanionType,
    ContentDeliveryMethod,
    CreativeAttribute, PlaybackMethod, Protocol, StartDelay, VideoLinearity,
    VideoPlacementType
} from "../common/enums";
import {BooleanNumber} from "../common/types";
import {Banner} from "./banner";

export type Video = {
    mimes: MimeType[]
    minduration?: number
    maxduration?: number
    protocols?: Protocol[]
    w?: number
    h?: number
    startdelay?: StartDelay
    placement?: VideoPlacementType
    linearity?: VideoLinearity
    skip?: BooleanNumber
    skipmin?: number
    skipafter?: number
    sequence?: number
    battr?: CreativeAttribute[]
    maxextended?: number
    minbitrate?: number
    maxbitrate?: number
    boxingallowed?: BooleanNumber
    playbackmethod?: PlaybackMethod
    delivery?: ContentDeliveryMethod
    pos?: AdPosition
    companionad?: Banner[]
    api?: APIFramework[]
    companiontype?: CompanionType[]
    ext?: any
}