import {Currency, PlaybackMethod, Protocol} from "./enums";

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
    instl: number
    tagid: string
    bidfloor: number
    bidfloorcur: Currency
    clickbrowser: number
    secure: number
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
    topframe: number
    expdir: number[]
    api: number[]
    id: string
    vcm: number
    ext: any
}
export type Video = {
    mimes: MimeType[]
    minduration: number
    maxduration: number
    protocols: Protocol[]
    w: number
    h: number
    startdelay: number
    placement: number
    linearity: number
    skip: number
    skipmin: number
    skipafter: number
    sequence: number
    batter: number[]
    maxextended: number
    minbitrate: number
    maxbitrate: number
    boxingallowed: number
    playbackmethod: PlaybackMethod
}
export type Audio = {}
export type Native = {}
export type Pmp = {}

export type Format = {}