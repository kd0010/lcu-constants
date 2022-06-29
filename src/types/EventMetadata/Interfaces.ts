import { EventType } from '.'
import { LCUURIs } from '../../Constants/LCUURIs'
import { ChampSelectSessionEventData } from '../EventData/ChampSelect/Interfaces'
import { PerksInventory, PerksPage } from '../Data/Perks/Interfaces'

export interface ChampSelectSessionEvent {
  data: ChampSelectSessionEventData
  eventType: EventType
  uri: typeof LCUURIs.champSelectSession
}

export interface PerksInventoryEvent {
  data: PerksInventory
  eventType: EventType
  uri: typeof LCUURIs.perksInventory
}

export interface PerksPagesEvent {
  data: PerksPage[]
  eventType: EventType
  uri: typeof LCUURIs.perksPages
}

export interface PerksCurrentPageEvent {
  data: PerksPage
  eventType: EventType
  uri: typeof LCUURIs.perksCurrentPage
}
