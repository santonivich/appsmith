export * from "ce/configs/index";
import type { EvaluationVersion } from "constants/EvalConstants";
import type { INJECTED_CONFIGS } from "ce/configs/index";

declare global {
  interface Window {
    APPSMITH_FEATURE_CONFIGS: INJECTED_CONFIGS;
    Intercom: any;
    evaluationVersion: EvaluationVersion;
    Sentry: any;
  }
}
