import {
  PlatformId as _PlatformId,
  Region as _Region
} from 'lol-constants'
import { LCUURIs } from '../Constants/LCUURIs'

export type PlatformId = _PlatformId
export type Region = _Region

export type Locale =
  | 'en_GB'

export type LCUURI = typeof LCUURIs[ keyof typeof LCUURIs ]
