import {Metric} from "./metric";
import {Banner} from "./banner";
import {Video} from "./video";
import {Native} from "./native";
import {Audio} from "./audio";
import {Pmp} from "./pmp";
import {BooleanNumber} from "../common/types";
import {Currency} from "../common/enums";

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