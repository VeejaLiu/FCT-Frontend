type IconProps = {
  classname?: string;
};

export function StarIcon({ classname }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      className={`${classname} fill-current`}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  );
}

export function RefreshIcon({ classname }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`${classname} fill-current`}
    >
      <path d="M22.33 9.92a.973.973 0 0 0-.71-.29 1 1 0 0 0-.71.3l-.99 1.01a8.746 8.746 0 0 0-8.68-7.7C6.42 3.25 2.5 7.17 2.5 12s3.92 8.75 8.75 8.75c2.34 0 4.53-.91 6.19-2.56a.99.99 0 0 0 .29-.71.99.99 0 0 0-1-1c-.27 0-.52.1-.71.29a6.736 6.736 0 0 1-4.77 1.98c-3.72 0-6.75-3.03-6.75-6.75s3.03-6.75 6.75-6.75c3.35 0 6.15 2.46 6.66 5.7l-1.05-1.02c-.39-.38-1.03-.38-1.42.02-.38.39-.37 1.03.02 1.41l2.79 2.71c.38.37 1.04.36 1.41-.02l2.68-2.73a.99.99 0 0 0 .29-.71c0-.25-.1-.5-.3-.69Z"></path>
    </svg>
  );
}

export function EditIcon({ classname }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 20 20"
      className={`${classname} fill-current`}
    >
      <path
        fill="currentColor"
        d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793l-2.828-2.828zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379z"
      />
    </svg>
  );
}
