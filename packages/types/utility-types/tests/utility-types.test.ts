import { describe, expectTypeOf, it } from "vitest";
import type { MyPartial, MyPick, MyReadonly } from "../src";

interface Usuario {
  id: number;
  nombre: string;
  activo: boolean;
}

describe("utility-types", () => {
  it("MyPartial convierte todas las propiedades en opcionales", () => {
    expectTypeOf<MyPartial<Usuario>>().toEqualTypeOf<{
      id?: number;
      nombre?: string;
      activo?: boolean;
    }>();
  });

  it("MyReadonly convierte todas las propiedades en readonly", () => {
    expectTypeOf<MyReadonly<Usuario>>().toEqualTypeOf<{
      readonly id: number;
      readonly nombre: string;
      readonly activo: boolean;
    }>();
  });

  it("MyPick selecciona solo las claves pedidas", () => {
    expectTypeOf<MyPick<Usuario, "id" | "activo">>().toEqualTypeOf<{
      id: number;
      activo: boolean;
    }>();
  });
});
