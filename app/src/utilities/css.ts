export const joinClasses = (...classes: (string | null | undefined)[]) => classes.filter(Boolean).join(' ');
