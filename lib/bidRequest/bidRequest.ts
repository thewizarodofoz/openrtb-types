import {Imp} from "./imp";
import {Site} from "./site";
import {App} from "./app";
import {Device} from "./device";
import {User} from "./user";
import {Source} from "./source";
import {Regs} from "./regs";

export type BidRequest = {
    id: string
    imp: Imp[]
    site?: Site
    app?: App
    device?: Device
    user?: User
    test?: number
    at?: number
    tmax?: number
    wseat?: string[]
    bseat?: string[]
    allimps?: number
    cur?: string[]
    wlang?: string[]
    bcat?: string[]
    badv?: string[]
    bapp?: string[]
    source?: Source
    regs?: Regs
    ext?: any
}













