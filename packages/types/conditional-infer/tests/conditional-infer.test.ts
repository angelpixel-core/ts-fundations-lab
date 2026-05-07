import { describe, expectTypeOf, it } from "vitest";
import type { Expect, Equal } from "../../type-testing/src";
import type { AwaitedCustom, ParametersCustom, ReturnTypeCustom } from "../src";

type Fn = (id: number, activo: boolean) => { ok: true; id: number };

describe("conditional-infer", () => {
  it("ReturnTypeCustom extrae el retorno de una funcion", () => {
    expectTypeOf<ReturnTypeCustom<Fn>>().toEqualTypeOf<{ ok: true; id: number }>();
    expectTypeOf<
      Expect<Equal<ReturnTypeCustom<Fn>, { ok: true; id: number }>>
    >().toEqualTypeOf<true>();
  });

  it("ParametersCustom extrae la tupla de parametros", () => {
    expectTypeOf<ParametersCustom<Fn>>().toEqualTypeOf<[number, boolean]>();
    expectTypeOf<Expect<Equal<ParametersCustom<Fn>, [number, boolean]>>>().toEqualTypeOf<true>();
  });

  it("AwaitedCustom desempaqueta promises anidadas", () => {
    expectTypeOf<AwaitedCustom<Promise<Promise<string>>>>().toEqualTypeOf<string>();
    expectTypeOf<
      Expect<Equal<AwaitedCustom<Promise<Promise<string>>>, string>>
    >().toEqualTypeOf<true>();
  });
});
