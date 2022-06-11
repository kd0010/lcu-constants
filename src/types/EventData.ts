import { IChampSelectBanAction, IChampSelectBans, IChampSelectPickAction, IChampSelectTenBansRevealAction, IChatDetails, IEntitledFeatureState, ITeamMember, ITimer, ITrade, TCellId } from './EventDataAtoms'

export interface IChampSelectSessionEventData {
  actions: (
    | IChampSelectBanAction[]
    | IChampSelectTenBansRevealAction[]
    | IChampSelectPickAction[]
  )
  allowBattleBoost: boolean
  allowDuplicatePicks: boolean
  allowLockedEvents: boolean
  allowRerolling: boolean
  allowSkinSelection: boolean
  /**
   * `bans` does not seem to be used by `queueId` `420` (Ranked Solo/Duo).
   */
  bans: IChampSelectBans
  benchChampionIds: unknown[]
  benchEnabled: boolean
  boostableSkinCount: number
  chatDetails:IChatDetails
  /**
   * TODO: What is `counter`?
   */
  counter: number
  entitledFeatureState: IEntitledFeatureState
  gameId: number
  hasSimultaneousBans: boolean
  hasSimultaneousPicks: boolean
  isCustomGame: boolean
  isSpectating: boolean
  localPlayerCellId: TCellId
  lockedEventIndex: number
  myTeam: ITeamMember[]
  recoveryCounter: number
  rerollsRemaining: number
  skipChampionSelect: boolean
  theirTeam: ITeamMember[]
  timer: ITimer
  trades: ITrade[]
}
