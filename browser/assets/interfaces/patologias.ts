export interface ISeccionPatologia {
  titulo: string;
  descripcion: string;
  contenido: string;
}

export interface ISeccionesPatologia {
  descripcion: ISeccionPatologia;
  sintomas: ISeccionPatologia;
  causas: ISeccionPatologia;
  diagnostico: ISeccionPatologia;
  tratamiento: ISeccionPatologia;
  prevencion: ISeccionPatologia;
  pronostico: ISeccionPatologia;
  conclusion: ISeccionPatologia;
}

export interface IFaqPatologia {
  pregunta: string;
  respuesta: string;
}

export interface IPatologiaRel {
  id: string;
  titulo: string;
  introduccion: string;
  imagenes?: string[];
  secciones: ISeccionesPatologia;
  faqs?: IFaqPatologia[];
}

export interface IPatologia {
  id: string;
  grupo: string;
  subsecciones: IPatologiaRel[];
}
