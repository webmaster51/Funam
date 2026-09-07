import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/programas' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
      tipo: z.enum(['pregrado', 'posgrado', 'tecnico', 'educacion-continua']),
      facultad: z.string(),
      duracion: z.string(),
      modalidad: z.enum(['presencial', 'virtual', 'hibrida']),
      snies: z
        .string()
        .regex(/^\d+$/, 'El código SNIES debe contener solo dígitos'),
      imagen: image(),
      imagenAlt: z.string(),
      resumen: z.string().max(200, 'El resumen no debe superar 200 caracteres'),
      perfilEgresado: z.array(z.string()).min(1),
      planEstudios: z.array(
        z.object({
          semestre: z.string(),
          materias: z.array(z.string()).min(1),
        })
      ),
      requisitosAdmision: z.array(z.string()).optional(),
      destacado: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/noticias' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string().min(3),
      fecha: z.coerce.date(),
      categoria: z.enum(['evento', 'boletin', 'institucional', 'admisiones']),
      imagen: image(),
      imagenAlt: z.string(),
      resumen: z.string().max(240, 'El resumen no debe superar 240 caracteres'),
      autor: z.string(),
      destacado: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { programas, noticias };
