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
  primaryStyleId: number
  selectedPerkIds: number[]
  subStyleId: number
}

export interface PerksInventory {
  ownedPageCount: number
}
