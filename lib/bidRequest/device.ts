import {Geo} from "./geo";
import {ConnectionType, DeviceType} from "../common/enums";
import {BooleanNumber} from "../common/types";

export type Device = {
    ua: string
    geo: Geo
    dnt: number
    lmp: number
    ip: string
    ipv6: string
    devicetype: DeviceType
    make: string
    model: string
    os: string
    osv: string
    hwv: string
    h: number
    w: number
    ppi: number
    pxratio: number
    js: BooleanNumber
    geofetch: BooleanNumber
    flashver: string
    language: string
    carrier: string
    mccmnc: string
    connectiontype: ConnectionType
    ifa: string
    didsha1: string
    didmd5: string
    dpidsha1: string
    dpidmd5: string
    macsha1: string
    macmd5: string
    ext: any
};