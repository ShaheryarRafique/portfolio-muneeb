// Utility function to merge class names
export function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

// Alias for backwards compatibility
export const cn = classNames;
