export interface ConfigurationsRepository {
  enableRemoteConfig: () => Promise<void>;
  getConfigurations: () => Promise<void>;
}
