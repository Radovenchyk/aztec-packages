import { createLogger } from '@aztec/foundation/log';

import { type TelemetryClientConfig } from './config.js';
import { OpenTelemetryClient } from './otel.js';
import { type TelemetryClient } from './telemetry.js';

export * from './config.js';

export async function createAndStartTelemetryClient(config: TelemetryClientConfig): Promise<TelemetryClient> {
  const log = createLogger('telemetry:client');
  return await OpenTelemetryClient.createAndStart(config, log);
}
