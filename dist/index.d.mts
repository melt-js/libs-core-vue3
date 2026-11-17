import type { Component, DefineComponent } from 'vue'
import type { HelComponentOptions } from '@melt-js/libs-core'
export * from '@melt-js/libs-core'

export type HelErrorProps = { error: unknown; retry: () => void }
export type DefineHelComponentOptions = HelComponentOptions & {
  loadingComponent?: Component
  /** Receives error and retry props. */
  errorComponent?: Component
}
export const HelLoading: Component
export const HelError: Component<HelErrorProps>
export function defineHelComponent(options: DefineHelComponentOptions): DefineComponent
