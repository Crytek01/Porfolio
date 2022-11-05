export type NeverTogether<
  A extends object,
  Key1 extends keyof A,
  Key2 extends keyof A extends Key1 ? never : keyof A
> = Omit<A, Key1 | Key2> &
  (
    | ({
        [k in Key1]: A[Key1];
      } & { [k in Key2]?: never })
    | ({
        [k in Key1]?: never;
      } & { [k in Key2]: A[Key2] })
  );
