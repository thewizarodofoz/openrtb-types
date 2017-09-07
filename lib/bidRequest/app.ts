import {ContentContext, IQGMediaRating, ProductionQuality} from "../common/enums";
import {BooleanNumber} from "../common/types";

export type App = {
    id: string
    name: string
    domain: string
    cat: string[]
    sectioncat: string[]
    pagecat: string[]
    page: string
    ref: string
    search: string
    mobile: number
    privacypolicy: BooleanNumber
    paid: BooleanNumber
    publisher: Publisher
    content: Content
    keywords: string
    ext: any
}

export type Publisher = {
    id: string
    name: string
    cat: string[]
    domain: string
    ext: any
};

export type Content = {
    id: string
    episode: number
    title: string
    series: string
    season: string
    artist: string
    genre: string
    album: string
    isrc: string
    producer: Producer
    url: string
    cat: string[]
    prodq: ProductionQuality
    context: ContentContext
    contentrating: string
    userrating: string
    qagmediarating: IQGMediaRating
    keywords: string
    livestream: BooleanNumber
    sourcerelationship: BooleanNumber
    len: number
    language: string
    embeddable: BooleanNumber
    data: Data[]
    ext: any
};

export type Producer = {};

export type Data = {};