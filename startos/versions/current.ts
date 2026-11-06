import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '#kilombino:0.5.0:0',
  releaseNotes: {
    en_US: "CONVOY DATUM Gateway v0.5.0beta, packaged by Kilombino from Horizon's datum-gateway-startos (0.5.0:3), with four CONVOY pull requests that are not released yet: #7 names the miner that found a block, #4 logs the node's error reply, #38 makes the template RPC timeout configurable (15 s by default) and #40 replaces the current job as soon as a new template or split arrives."
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
    other: {
        ['*']: {
            up: async ({ effects }) => {},
        }
    }
  },
})
