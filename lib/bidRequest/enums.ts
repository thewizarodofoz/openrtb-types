export enum Currency {

}

export enum MimeType {
    GIF = 'image/gif',
    JPG = 'image/jpg',
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    SVG = 'image/svg+xml',
    WAVE = 'audio/wave',
    WAV = 'audio/wav',
    X_WAV = 'audio/x-wav',
    X_PN_WAV = 'audio/x-pn-wav',
    WEBM_AUDIO = 'audio/webm',
    WEBM_VIDEO = 'video/webm',
    OGG_AUDIO = 'audio/ogg',
    OGG_VIDEO = 'video/ogg',
    OGG_APPLICATION = 'application/ogg',
    X_SHOCKWAVE_FLASH = 'application/x-shockwave-flash',
    X_MS_WMV = 'video/x-ms-wmv',
    MP4 = 'video/mp4'
}

export enum BannerAdType {
    XHTML_TEXT = 1,
    XHTML_BANNER,
    JAVASCRIPT,
    IFRAME
}

export enum CreativeAttribute {
    AUDIO_AD_AUTOPLAY = 1,
    AUDIO_AD_USER_INITIATED,
    EXPANDABLE_AUTOMATIC,
    EXPANDABLE_USER_INITIATED_CLICK,
    EXPANDABLE_USER_INITIATED_ROLLOVER,
    INBANNER_VIDEO_AD_AUTOPLAY,
    INBANNER_VIDEO_AD_USER_INITIATED,
    POP,
    PROVOCATIVE_OR_SUGGESTIVE_IMAGERY,
    SHAKY_FLASHING_FLICKERING_EXTREME_ANIMATION_SMILEYS,
    SURVEYS,
    TEXT_ONLY,
    USER_INTERACTIVE,
    WINDOWS_DIALOG_OR_ALERT_STYLE,
    HAS_AUDIO_ON_OFF_BUTTON,
    AD_PROVIDES_SKIP_BUTTON,
    ADOBE_FLASH
}

export enum AdPosition {
    UNKNOWN,
    ABOVE_THE_FOLD,
    BELOW_THE_FOLD = 3,
    HEADER,
    FOOTER,
    SIDEBAR,
    FULL_SCREEN
}

export enum ExpandableDirection {
    LEFT,
    RIGHT,
    UP,
    DOWN,
    FULL_SCREEN
}

export enum APIFramework {
    VPAID_1,
    VPAID_2,
    MRAID_1,
    ORMMA,
    MRAID_2,
    MRAID_3
}

export enum VideoLinearity {
    LINEAR_OR_IN_STREAM,
    NON_LINEAR_OR_OVERLAY,
}

export enum Protocol {
    VAST_1 = 1,
    VAST_2,
    VAST_3,
    VAST_1_WRAPPER,
    VAST_2_WRAPPER,
    VAST_3_WRAPPER,
    VAST_4,
    VAST_4_WRAPPER,
    DAAST_1,
    DAAST_1_WRAPPER
}

export enum VideoPlacementTypes {
    IN_STREAM = 1,
    IN_BANNER,
    IN_ARTICLE,
    IN_FEED,
    INTERSTITIAL_SLIDER_FLOATING
}

export enum PlaybackMethod {
    PAGE_LOAD_WITH_SOUND_ON,
    PAGE_LOAD_WITH_SOUND_OFF_BY_DEFAULT,
    CLICK_WITH_SOUND_ON,
    MOUSEOVER_WITH_SOUND_ON,
    ENTERING_VIEWPORT_WITH_SOUND_ON,
    ENTERING_VIEWPORT_WITH_SOUND_OFF_BY_DEFAULT
}

export enum PlaybackCessationMode {
    VIDEO_COMPLETION,
    LEAVING_VIEWPORT,
    LEAVING_VIEWPORT_CONTINUES_AS_A_FLOATING_SLIDER_UNIT,
}

export enum StartDelay {
    GENERIC_POSTROLL = -2,
    GENERIC_MIDROLL,
    PREROLL,
}