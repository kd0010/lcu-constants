import { AssignedPosition, CellId, ChampSelectPhase, EntitledFeatureType, TeamKey, TradeState } from '..'
import { ChampSelectAction, ChampSelectBanActionId, ChampSelectPickActionId, ChampSelectTenBansRevealActionId } from '.'

/**
 * Champion select event.
 */
export interface ChampSelectSessionEventData {
  actions: ChampSelectAction[][]
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
  /**
   * This `championdId` is actually the champion's key in `champion.json`.
   */
  championId: number
  completed: boolean
  id: ChampSelectPickActionId
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
  id: ChampSelectBanActionId
  isAllyAction: boolean
  isInProgress: boolean
  type: 'ban'
}

export interface ChampSelectTenBansRevealAction {
  actorCellId: -1
  championId: 0
  completed: boolean
  id: ChampSelectTenBansRevealActionId
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
