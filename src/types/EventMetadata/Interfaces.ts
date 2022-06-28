import { EventType } from '.'
import { ChampSelectSessionEventData } from '../EventData/Interfaces'

export interface ChampSelectSessionEvent {
  data: ChampSelectSessionEventData
  eventType: EventType
  uri: '/lol-champ-select/v1/session'
}
