import { EventType } from '.'
import { LCUURIs } from '../../Constants/LCUURIs'
import { ChampSelectSessionEventData } from '../EventData/ChampionSelect/Interfaces'
import { PerksInventoryEventData, PerksPagesEventData } from '../EventData/Perks/Interfaces'

export interface ChampSelectSessionEvent {
  data: ChampSelectSessionEventData
  eventType: EventType
  uri: typeof LCUURIs.champSelectSession
}

export interface PerksInventoryEvent {
  data: PerksInventoryEventData
  eventType: EventType
  uri: typeof LCUURIs.perksInventory
}

export interface PerksPagesEvent {
  data: PerksPagesEventData[]
  eventType: EventType
  uri: typeof LCUURIs.perksPages
}

export interface PerksCurrentPageEvent {
  data: PerksPagesEventData
  eventType: EventType
  uri: typeof LCUURIs.perksCurrentPage
}
