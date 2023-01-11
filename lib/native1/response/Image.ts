import { ImageAssetType } from "../ImageAssetType";

// 5.4 Object: Image
//
// Corresponds to the Image Object in the request.
// The Image object to be used for all image elements of the Native ad such as Icons, Main Image, etc.
//
// It is recommended that if assetsurl/dcourl is being used rather than embedded assets, that an image of each recommended aspect ratio (per the Image Types table) be provided forimage type 3.
export type Image = {
  // Field:
  //   type
  // Scope:
  //   optional
  // Type:
  //   integer
  // Description:
  //    Required for assetsurl or dcourl responses, not required for embedded asset responses.
  //   The type of image element being submitted from the Image Asset Types table.
  type?: ImageAssetType;

  // Field:
  //   url
  // Scope:
  //   required
  // Type:
  //   string
  // Description:
  //   URL of the image asset
  url: string;

  // Field:
  //   w
  // Scope:
  //   recommended
  // Type:
  //   int
  // Description:
  //   Width of the image in pixels.
  //   Recommended for embedded asset responses.
  //   Required for assetsurl/dcourlresponses if multiple assets of same type submitted.
  w?: number;

  // Field:
  //   h
  // Scope:
  //   recommended
  // Type:
  //   int
  // Description:
  //   Height of the image in pixels.
  //   Recommended for embedded asset responses.
  //   Required for assetsurl/dcourl responses if multiple assets of same type submitted.
  h?: number;

  // Field:
  //   ext
  // Scope:
  //   optional
  // Type:
  //   object
  // Description:
  //   This object is a placeholder that may contain custom JSON agreed to by the parties to support flexibility beyond the standard defined in this specification
  ext?: any;
};
