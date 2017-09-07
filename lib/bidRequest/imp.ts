import {
    AdPosition,
    APIFramework, CompanionType, ContentDeliveryMethod, CreativeAttribute, Currency, ExpandableDirection, FeedType,
    MimeType,
    PlaybackMethod, Protocol,
    StartDelay,
    VideoLinearity,
    VideoPlacementType, VolumeNormalizationMode,
} from "../common/enums";
import {BooleanNumber} from "../common/types";

export type Imp = {
    id: string
    metric: Metric[]
    banner: Banner
    video: Video
    audio: Audio
    native: Native
    pmp: Pmp
    displaymanager: string
    displaymanagerver: string
    instl: BooleanNumber
    tagid: string
    bidfloor: number
    bidfloorcur: Currency
    clickbrowser: BooleanNumber
    secure: BooleanNumber
    iframebuster: string[]
    exp: number
    ext: any
}

export type Metric = {
    type: string
    value: number
    vendor: string
    ext: any
}
export type Banner = {
    format: Format
    w: number
    h: number
    btype: number[]
    battr: number[]
    pos: number
    mimes: MimeType[]
    topframe: BooleanNumber
    expdir: ExpandableDirection[]
    api: APIFramework[]
    id: string
    vcm: BooleanNumber
    ext: any
}
export type Video = {
    mimes: MimeType[]
    minduration: number
    maxduration: number
    protocols: Protocol[]
    w: number
    h: number
    startdelay: StartDelay
    placement: VideoPlacementType
    linearity: VideoLinearity
    skip: BooleanNumber
    skipmin: number
    skipafter: number
    sequence: number
    battr: CreativeAttribute[]
    maxextended: number
    minbitrate: number
    maxbitrate: number
    boxingallowed: BooleanNumber
    playbackmethod: PlaybackMethod
    delivery: ContentDeliveryMethod
    pos: AdPosition
    companionad: Banner[]
    api: APIFramework[]
    companiontype: CompanionType[]
    ext: any
}
export type Audio = {
    mimes: MimeType[]
    minduration: number
    maxduration: number
    protocols: Protocol
    startdelay: number
    sequence: number
    battr: CreativeAttribute[]
    maxextended: number
    minbitrate: number
    maxbitrate: number
    delivery: ContentDeliveryMethod[]
    companionad: Banner[]
    api: APIFramework
    companiontype: CompanionType[]
    maxseq: number
    feed: FeedType[]
    stitched: BooleanNumber
    nvol: VolumeNormalizationMode
    ext: any
}
export type Native = {
    request: string
    ver: string
    api: APIFramework
    battr: CreativeAttribute[]
    ext: any
}

export type Pmp = {
    private_auction: BooleanNumber
    deals: Deal[]
    ext: any
}

export type Deal = {
    id: string
    bidfloor: number
    bidfloorcur: Currency
    at: number
    wseat: string[]
    wadomain: string[]
    ext: any
};

export type Format = {
    w: number
    h: number
    wratio: number
    hratio: number
    wmin: number
    ext: any
}