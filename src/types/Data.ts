import { TInternalRegion, TLocale, TRegion } from '.'

export interface LCUInstanceInfo {
  riotclientAuthToken: string
  riotclientAppPort: number
  noRads: boolean
  disableSelfUpdate: boolean
  region: TRegion
  locale: TLocale
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
  crashEnvironment: TInternalRegion
  appLogFilePath: string
  noProxyServer: boolean
}
