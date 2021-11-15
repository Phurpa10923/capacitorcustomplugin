export interface SqlPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
