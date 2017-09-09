import {Producer} from "./producer";
import {ContentContext, IQGMediaRating, ProductionQuality} from "../common/enums";
import {BooleanNumber} from "../common/types";
import {Data} from "./data";

export type Content = {
    id?: string
    episode?: number
    title?: string
    series?: string
    season?: string
    artist?: string
    genre?: string
    album?: string
    isrc?: string
    producer?: Producer
    url?: string
    cat?: string[]
    prodq?: ProductionQuality
    context?: ContentContext
    contentrating?: string
    userrating?: string
    qagmediarating?: IQGMediaRating
    keywords?: string
    livestream?: BooleanNumber
    sourcerelationship?: BooleanNumber
    len?: number
    language?: string
    embeddable?: BooleanNumber
    data?: Data[]
    ext?: any
};