import { describe, expectTypeOf, it } from "vitest";
import type { DeepPartial, DeepReadonly } from "../src";

interface Perfil {
  nombre: string;
  contacto: {
    email: string;
    telefono: {
      codigoPais: number;
      numero: string;
    };
  };
  preferencias: {
    tema: "claro" | "oscuro";
    idioma: "es" | "en";
  };
  calcularPuntaje: (base: number) => number;
}

describe("deep-types", () => {
  it("DeepReadonly aplica readonly en niveles anidados", () => {
    expectTypeOf<DeepReadonly<Perfil>>().toEqualTypeOf<{
      readonly nombre: string;
      readonly contacto: {
        readonly email: string;
        readonly telefono: {
          readonly codigoPais: number;
          readonly numero: string;
        };
      };
      readonly preferencias: {
        readonly tema: "claro" | "oscuro";
        readonly idioma: "es" | "en";
      };
      readonly calcularPuntaje: (base: number) => number;
    }>();
  });

  it("DeepPartial vuelve opcionales los niveles anidados", () => {
    expectTypeOf<DeepPartial<Perfil>>().toEqualTypeOf<{
      nombre?: string;
      contacto?: {
        email?: string;
        telefono?: {
          codigoPais?: number;
          numero?: string;
        };
      };
      preferencias?: {
        tema?: "claro" | "oscuro";
        idioma?: "es" | "en";
      };
      calcularPuntaje?: (base: number) => number;
    }>();
  });
});
