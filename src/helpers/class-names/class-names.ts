type Mods = Record<string, boolean>;

export function classNames(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_key, value]) => !!value)
      .map(([key]) => key),
    ...additional,
  ].join(" ");
}
