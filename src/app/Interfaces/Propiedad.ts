export interface ImagenPropiedad {
    id: number;
    url: string; // o 'imagen', depende cómo lo tengas en el backend
  }

  export interface Propiedad {
    id: number;
    titulo: string;
    descripcion: string;
    direccion: string;
    ciudad: string;
    provincia: string;
    ambientes: number;
    banos: number;
    precio: number;
    disponible: boolean;
    imagenPrincipal: string;
    FechaPublicacion: Date;
    listaImg: ImagenPropiedad[];
  }