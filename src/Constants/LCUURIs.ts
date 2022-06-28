import { LCUPaths } from './LCUPaths'

const {
  currentPage,
  inventory,
  lolChampSelect,
  lolPerks,
  pages,
  session,
  settings,
} = LCUPaths

/**
 * League Client Update URIs.
 * Each URI starts with a slash `/` and ends without one.
 */
export const LCUURIs = {
  champSelectSession: `/${lolChampSelect}/v1/${session}`,
  perksInventory: `/${lolPerks}/v1/${inventory}`,
  perksPages: `/${lolPerks}/v1/${pages}`,
  perksCurrentPage: `/${lolPerks}/v1/${currentPage}`,
} as const
