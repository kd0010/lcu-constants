import { RuneId, RuneTreeId } from 'lol-constants'

export interface PerksPagesEventData {
  autoModifiedSelections: unknown[]
  current: boolean
  id: number
  isActive: boolean
  isDeletable: boolean
  isEditable: boolean
  isValid: boolean
  /**
   * Millisecond-timestamp.
   */
  lastModified: number
  name: string
  order: number
  primaryStyleId: RuneTreeId
  selectedPerkIds: RuneId[]
  subStyleId: RuneTreeId
}

export interface PerksInventoryEventData {
  ownedPageCount: number
}
