// 5.6 Object: Video
//
// Corresponds to the Video Object in the request, yet containing a value of a conforming VAST tag as a value.
export type Video = {
  // Field:
  //   vasttag
  // Scope:
  //   required
  // Type:
  //   string
  // Description:
  //   VAST XML
  vasttag: string;
};
