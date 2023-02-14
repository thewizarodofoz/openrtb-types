// 7.7 Event Tracking Methods Table
export enum EventTrackingMethod {
  // Image-pixel tracking - URL provided will be inserted as a 1x1 pixel at the time of the event.
  Image = 1,
  // Javascript-based tracking - URL provided will be inserted as a js tag at the time of the event.
  JS = 2,

  // 500+ exchangespecific
  // Could include custom measurement companies such as moat, doubleverify, IAS, etc - in this case additional elements will often be passed
}
