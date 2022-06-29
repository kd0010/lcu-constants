import { ChampSelectActionTypes } from '../../../Constants/ChampSelectActionTypes'
import { ChampSelectBanAction, ChampSelectPickAction, ChampSelectTenBansRevealAction } from './Interfaces'

export type ChampSelectAction = 
  | ChampSelectBanAction
  | ChampSelectTenBansRevealAction
  | ChampSelectPickAction

export type ChampSelectPickActionId =
  | typeof ChampSelectActionTypes.BLUE_1_PICK
  | typeof ChampSelectActionTypes.BLUE_2_PICK
  | typeof ChampSelectActionTypes.BLUE_3_PICK
  | typeof ChampSelectActionTypes.BLUE_4_PICK
  | typeof ChampSelectActionTypes.BLUE_5_PICK
  | typeof ChampSelectActionTypes.RED_1_PICK
  | typeof ChampSelectActionTypes.RED_2_PICK
  | typeof ChampSelectActionTypes.RED_3_PICK
  | typeof ChampSelectActionTypes.RED_4_PICK
  | typeof ChampSelectActionTypes.RED_5_PICK

export type ChampSelectBanActionId =
  | typeof ChampSelectActionTypes.BLUE_FIRST_BAN
  | typeof ChampSelectActionTypes.BLUE_SECOND_BAN
  | typeof ChampSelectActionTypes.BLUE_THIRD_BAN
  | typeof ChampSelectActionTypes.BLUE_FOURTH_BAN
  | typeof ChampSelectActionTypes.BLUE_FIFTH_BAN
  | typeof ChampSelectActionTypes.RED_FIFTH_BAN
  | typeof ChampSelectActionTypes.RED_SECOND_BAN
  | typeof ChampSelectActionTypes.RED_THIRD_BAN
  | typeof ChampSelectActionTypes.RED_FOURTH_BAN
  | typeof ChampSelectActionTypes.RED_FIFTH_BAN

export type ChampSelectTenBansRevealActionId =
  | typeof ChampSelectActionTypes.TEN_BANS_REVEAL
