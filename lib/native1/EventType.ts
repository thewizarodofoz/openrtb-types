// 7.6 Event Types Table
export enum EventType {
  // Impression
  Impression = 1,
  // Visible impression using MRC definition at 50% in view for 1 second
  ViewableMRC50 = 2,
  // 100% in view for 1 second (ie GroupM standard)
  ViewableMRC100 = 3,
  // Visible impression for video using MRC definition at 50% in view for 2 seconds
  ViewableVideo50 = 4,

  // 500+ exchange-specific
}
