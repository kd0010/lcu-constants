import { Locale, PlatformId, Region } from '..'

/**
 * All the information that comes back from
 * extracting options that the LCU is running with
 * by command line `wmic` command.
 */
export interface LCUInstanceInfo {
  riotclientAuthToken: string
  riotclientAppPort: number
  noRads: boolean
  disableSelfUpdate: boolean
  region: Region
  locale: Locale
  remotingAuthToken: string
  respawnCommand: string
  respawnDisplayName: string
  appPort: number
  installDirectory: string
  appName: string
  uxName: string
  uxHelperName: string
  logDir: string
  crashReporting: string
  crashEnvironment: PlatformId
  appLogFilePath: string
  noProxyServer: boolean
}
