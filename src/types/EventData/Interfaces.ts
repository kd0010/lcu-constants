import { ChampSelectActionTypes } from '../../Constants/ChampSelectActionTypes'
import { AssignedPosition, CellId, ChampSelectPhase, EntitledFeatureType, TeamKey, TradeState } from '.'

/**
 * Champion select event.
 */
export interface ChampSelectSessionEventData {
  actions: (
    | ChampSelectBanAction[]
    | ChampSelectTenBansRevealAction[]
    | ChampSelectPickAction[]
  )
  allowBattleBoost: boolean
  allowDuplicatePicks: boolean
  allowLockedEvents: boolean
  allowRerolling: boolean
  allowSkinSelection: boolean
  /**
   * `bans` does not seem to be used by `queueId` `420` (Ranked Solo/Duo).
   */
  bans: ChampSelectBans
  benchChampionIds: unknown[]
  benchEnabled: boolean
  boostableSkinCount: number
  chatDetails:ChatDetails
  /**
   * TODO: What is `counter`?
   */
  counter: number
  entitledFeatureState: EntitledFeatureState
  gameId: number
  hasSimultaneousBans: boolean
  hasSimultaneousPicks: boolean
  isCustomGame: boolean
  isSpectating: boolean
  localPlayerCellId: CellId
  lockedEventIndex: number
  myTeam: TeamMember[]
  recoveryCounter: number
  rerollsRemaining: number
  skipChampionSelect: boolean
  theirTeam: TeamMember[]
  timer: ChampSelectTimer
  trades: ChampSelectTrade[]
}

export interface ChampSelectPickAction {
  actorCellId: CellId
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

export interface ChampSelectBanAction {
  actorCellId: CellId
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

export interface ChampSelectTenBansRevealAction {
  actorCellId: -1
  championId: 0
  completed: boolean
  id: typeof ChampSelectActionTypes.TEN_BANS_REVEAL
  isAllyAction: boolean
  isInProgress: boolean
  type: 'ten_bans_reveal'
}

export interface ChampSelectBans {
  myTeamBans: ChampSelectBan[]
  theirTeamBans: ChampSelectBan[]
  numBans: number
}

export interface ChampSelectBan {}

export interface ChatDetails {
  chatRoomName: string
  chatRoomPassword: string | null
}

export interface EntitledFeatureState {
  additionalRerolls: number
  unlockedSkinIds: unknown[]
}

export interface TeamMember {
  assignedPosition: AssignedPosition | ''
  cellId: CellId
  championId: number
  /**
   * May have something to do with currently picking or picking soon
   */
  championPickIntent: 0 | 1
  entitledFeatureType: EntitledFeatureType
  selectedSkinId: number
  spell1Id: number
  spell2Id: number
  summonerId: number
  team: TeamKey
  wardSkinId: number
}

export interface ChampSelectTimer {
  /**
   * Duration in milliseconds.
   */
  adjustedTimeLeftInPhase: number
  /**
   * Current time epoch in milliseconds
   */
  internalNowInEpochMs: number
  isInfinite: boolean
  phase: ChampSelectPhase
  /**
   * Duration in milliseconds
   */
  totalTimeInPhase: number
}

export interface ChampSelectTrade {
  cellId: CellId
  id: number
  state: TradeState
}
