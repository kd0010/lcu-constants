import { TLocale } from '.'
import { PlatformId, Region } from 'lol-constants'

export interface LCUInstanceInfo {
  riotclientAuthToken: string
  riotclientAppPort: number
  noRads: boolean
  disableSelfUpdate: boolean
  region: Region
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
  crashEnvironment: PlatformId
  appLogFilePath: string
  noProxyServer: boolean
}
