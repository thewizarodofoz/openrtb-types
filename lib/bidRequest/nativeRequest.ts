export namespace RequestNative {
    export type NativeRequest = {
        ver ?: string
        layoutId ?: LayoutId
        adUnitId ?: AdUnitId
        context?: ContextType
        contextsubtype?: ContextSubtype
        plcmttype?: PlacementType
        plcmtcnt?: number
        seq?: number
        assets: Array<Asset>
        aurlsupport?: boolean
        durlsupport?: boolean
        privacy?: boolean
    }

    export enum LayoutId {
        CONTENT_WALL = 1,
        APP_WALL = 2,
        NEWS_FEED = 3,
        CHAT_LIST = 4,
        CAROUSEL = 5,
        CONTENT_STREAM = 6,
        GRID = 7,
    }

    export enum AdUnitId {
        PAID_SEARCH_UNIT = 1,
        RECOMMENDATION_WIDGET = 2,
        PROMOTED_LISTING = 3,
        IAB_IN_AD_NATIVE = 4,
        ADUNITID_CUSTOM = 5,
    }

    export enum ContextType {
        CONTENT = 1,
        SOCIAL = 2,
        PRODUCT = 3,
    }

    export enum ContextSubtype {
        CONTENT_GENERAL_OR_MIXED = 10,
        CONTENT_ARTICLE = 11,
        CONTENT_VIDEO = 12,
        CONTENT_AUDIO = 13,
        CONTENT_IMAGE = 14,
        CONTENT_USER_GENERATED = 15,
        SOCIAL_GENERAL = 20,
        SOCIAL_EMAIL = 21,
        SOCIAL_CHAT_IM = 22,
        PRODUCT_SELLING = 30,
        PRODUCT_MARKETPLACE = 31,
        PRODUCT_REVIEW = 32,
    }

    export enum PlacementType {
        IN_FEED = 1,
        ATOMIC_UNIT = 2,
        OUTSIDE = 3,
        RECOMMENDATION = 4,
    }

    export type Asset = {
        id?: number
        required?: boolean
        title?: Title
        img?: Image
        video?: Video
        data?: Data
    }

    export type Title = {
        len?: number
    }

    export type Video = {
        vasttag?: string
    }

    export type Data = {
        type?: DataAssetType,
        len?: number,
    }

    export type Image = {
        type?: ImageAssetType
        w?: number
        h?: number
        wmin?: number
        hmin?: number
        mimes: Array<string>
    }

    export enum DataAssetType {
        SPONSORED = 1,
        DESC = 2,
        RATING = 3,
        LIKES = 4,
        DOWNLOADS = 5,
        PRICE = 6,
        SALEPRICE = 7,
        PHONE = 8,
        ADDRESS = 9,
        DESC2 = 10,
        DISPLAYURL = 11,
        CTATEXT = 12,
        DISCOUNT = 501,
        COLOR = 502,
    }


    export enum ImageAssetType {
        ICON = 1,
        LOGO = 2,
        MAIN = 3,
    }

}
