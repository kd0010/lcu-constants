import { RuneId, RuneTreeId } from 'lol-constants'

export interface PerksPage {
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

export interface PerksInventory {
  ownedPageCount: number
}
