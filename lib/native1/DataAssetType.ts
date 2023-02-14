// 7.4  Data Asset Types
//
// Below is a list of common asset element types of native advertising at the time of writing this spec.
// This list is non-exhaustive and intended to be extended by the buyers and sellers as the format evolves.
//
// An implementing exchange may not support all asset variants or introduce new ones unique to that system.
export enum DataAssetType {
  // Type ID:
  //   1
  // Name:
  //   sponsored
  // Description:
  //   Sponsored By message where response should contain the brand name of the sponsor.
  // Format:
  //   text
  // Recommendations:
  //   Required. Max 25 or longer
  Sponsored = 1,

  // Type ID:
  //   2
  // Name:
  //   desc
  // Description:
  //   Descriptive text associated with the product or service being advertised.
  //   Longer length of text in response may be truncated or ellipsed by th exchange.
  // Format:
  //   text
  // Recommendations:
  //   Recommended. Max 140 or longer.
  Desc = 2,

  // Type ID:
  //   3
  // Name:
  //   rating
  // Description:
  //   Rating of the product being offered to the user.
  //   For example an app’s rating in an app store from 0-5.
  // Format:
  //   number formatted as string
  // Recommendations:
  //   Optional. 0-5 integer formatted as string.
  Rating = 3,

  // Type ID:
  //   4
  // Name:
  //   likes
  // Description:
  //   Number of social ratings or “likes” of the product being offered to the user.
  // Format:
  //   number formatted as string
  Likes = 4,

  // Type ID:
  //   5
  // Name:
  //   downloads
  // Description:
  //   Number downloads/installs of this product
  // Format:
  //   number formatted as string
  Downloads = 5,

  // Type ID:
  //   6
  // Name:
  //   price
  // Description:
  //   Price for product / app / in-app purchase.
  //   Value should include currency symbol in localised format.
  // Format:
  //   number formatted as string
  Price = 6,

  // Type ID:
  //   7
  // Name:
  //   saleprice
  // Description:
  //   Sale price that can be used together with price to indicate a discounted price compared to a regular price.
  //   Value should include currency symbol in localised format.
  // Format:
  //   number formatted as string
  SalePrice = 7,

  // Type ID:
  //   8
  // Name:
  //   phone
  // Description:
  //   Phone number formatted
  // Format:
  //   string
  Phone = 8,

  // Type ID:
  //   9
  // Name:
  //   address
  // Description:
  //   Address
  // Format:
  //   text
  Address = 9,

  // Type ID:
  //   10
  // Name:
  //   desc2
  // Description:
  //   Additional descriptive text associated with the product or service being advertised
  // Format:
  //   text
  Desc2 = 10,

  // Type ID:
  //   11
  // Name:
  //   displayurl
  // Description:
  //   Display URL for the text ad.
  //   To be used when sponsoring entity doesn’t own the content.
  //   IE sponsored by BRAND on SITE (where SITE is transmitted in this field).
  // Format:
  //   text
  DispayURL = 11,

  // Type ID:
  //   12
  // Name:
  //   ctatext
  // Dewscription:
  //   CTA description - descriptive text describing a ‘call to action’ button for the destination URL.
  // Format:
  //   text
  // Recommendations:
  //   Optional. Max 15 or longer.
  CTAText = 12,

  // Type ID:
  //   500+
  // Name:
  //   XXX
  // Description:
  //   Reserved for Exchange specific usage numbered above 500
  // Format:
  //   Unknown
}
