export interface IPersonal {
  id: number;
  nombre: string;
  rol: string;
  imagen: string;
  activo: boolean;
}
export interface IMedico {
  id: number;
  nombre: string;
  titulo: string;
  presentacion?: string;
  especialidad: string;
  matriculaN?: string;
  matriculaP?: string;
  formacionAcademica?: Array<{
    titulo: string;
    institucion?: string;
    rol?: string;
    provincial?: string;
    ubicacion?: string;
    anio?: number;
    categoria?: string;
  }>;
  experiencia?: Array<{
    rol: string;
    supervisor?: string;
    institucion?: string;
    ubicacion?: string;
  }>;
  capacitaciones?: Array<{
    titulo: string;
    institucion?: string;
    anio?: number;
    categoria?: string;
  }>;
  especialidades?: string[];
  redesSociales?: {
    facebook?: string;
    instagram?: string;
    [key: string]: string | undefined;
  };
  imagen: string;
  activo: boolean;
}
