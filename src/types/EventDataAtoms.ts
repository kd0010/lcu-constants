import { ChampSelectActionTypes } from '../Constants/ChampSelectActionTypes'

export interface IChampSelectPickAction {
  actorCellId: TCellId
  championId: number
  completed: boolean
  id: (
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
  )
  isAllyAction: boolean
  isInProgress: boolean
  /**
   * Only present if pick is in progress
   */
  pickTurn?: 1 | 2
  type: 'pick'
}

export interface IChampSelectBanAction {
  actorCellId: TCellId
  championId: number
  completed: boolean
  id: (
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
  )
  isAllyAction: boolean
  isInProgress: boolean
  type: 'ban'
}

export interface IChampSelectTenBansRevealAction {
  actorCellId: -1
  championId: 0
  completed: boolean
  id: typeof ChampSelectActionTypes.TEN_BANS_REVEAL
  isAllyAction: boolean
  isInProgress: boolean
  type: 'ten_bans_reveal'
}

export interface IChampSelectBans {
  myTeamBans: IChampSelectBan[]
  theirTeamBans: IChampSelectBan[]
  numBans: number
}

export interface IChampSelectBan {}

export interface IChatDetails {
  chatRoomName: string
  chatRoomPassword: string | null
}

export interface IEntitledFeatureState {
  additionalRerolls: number
  unlockedSkinIds: unknown[]
}

export type TCellId =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9

export interface ITeamMember {
  assignedPosition: TAssignedPosition | ''
  cellId: TCellId
  championId: number
  /**
   * May have something to do with currently picking or picking soon
   */
  championPickIntent: 0 | 1
  entitledFeatureType: TEntitledFeatureType
  selectedSkinId: number
  spell1Id: number
  spell2Id: number
  summonerId: number
  team: TTeam
  wardSkinId: number
}

export type TAssignedPosition =
  | ''
  | 'top'
  | 'jungle'
  | 'middle'
  | 'bottom'
  | 'utility'

export type TEntitledFeatureType =
  | ''
  | 'NONE'

export type TTeam =
  | 1
  | 2

export interface ITimer {
  /**
   * Duration in milliseconds.
   */
  adjustedTimeLeftInPhase: number
  /**
   * Current time epoch in milliseconds
   */
  internalNowInEpochMs: number
  isInfinite: boolean
  phase: TChampSelectPhase
  /**
   * Duration in milliseconds
   */
  totalTimeInPhase: number
}

export type TChampSelectPhase =
  | 'BAN_PICK'
  | 'PLANNING'
  | 'FINALIZATION'

export interface ITrade {
  cellId: TCellId
  id: number
  state: TTradeState
}

export type TTradeState =
  | 'INVALID'
  | 'SENT'
