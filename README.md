# OpenRTB v2.5 Types & Enums
This package includes all of [AIB's OpenRTB v2.5 spec](https://www.iab.com/wp-content/uploads/2016/03/OpenRTB-API-Specification-Version-2-5-FINAL.pdf) types and enums in TypeScript.

## Installation

Using npm:
```shell
$ npm i --save openrtb-types
```

## Usage

Import needed types and use them to type-guard your code:
```
import {SeatBid, Bid, BidResponse} from 'openrtb-types'


let bid: Bid = {
    id: 'abc',
    impid: 'abc',
    price: 1.23
};

let seatBid: SeatBid = {
    bid: [bid]
};

let bidResponse: BidResponse = {
    id: 'abc',
    seatbid: [seatBid]
};
```