export type CellId =
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

export type AssignedPosition =
  | ''
  | 'top'
  | 'jungle'
  | 'middle'
  | 'bottom'
  | 'utility'

export type EntitledFeatureType =
  | ''
  | 'NONE'

export type TeamKey =
  | 1
  | 2

export type ChampSelectPhase =
  | 'BAN_PICK'
  | 'PLANNING'
  | 'FINALIZATION'

export type TradeState =
  | 'INVALID'
  | 'SENT'
