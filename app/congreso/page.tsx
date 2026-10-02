import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import CongresoFotosClient, { GalleryImage } from './CongresoClient';

// Server Component para mapear imágenes desde las carpetas
export default function CongresoPage() {
    
    // Función auxiliar para leer los archivos de una carpeta
    const getImagesForDay = (folderName: string, day: number): GalleryImage[] => {
        try {
            // Construye la ruta absoluta a la carpeta dentro de public/assets/
            const dirPath = path.join(process.cwd(), 'public', 'assets', folderName);
            
            // Si la carpeta no existe, retorna un array vacío
            if (!fs.existsSync(dirPath)) {
                console.warn(`[CongresoPage] La carpeta no existe: ${dirPath}`);
                return [];
            }

            // Lee los archivos y filtra solo las imágenes
            const files = fs.readdirSync(dirPath).filter(file => 
                /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file)
            );

            // Mapea los archivos a la estructura requerida
            return files.map((file, i) => {
                const filePath = path.join(dirPath, file);
                let width = 800;
                let height = 600;
                
                try {
                    const buffer = fs.readFileSync(filePath);
                    const dimensions = sizeOf(buffer);
                    if (dimensions.width && dimensions.height) {
                        width = dimensions.width;
                        height = dimensions.height;
                    }
                } catch (e) {
                    console.error(`[CongresoPage] Error leyendo dimensiones de ${file}:`, e);
                }
                
                return {
                    id: `day${day}-img${i}`,
                    thumbnail: `/assets/${folderName}/${file}`, 
                    full: `/assets/${folderName}/${file}`,
                    alt: `Congreso Día ${day} - Foto ${i + 1}`,
                    width,
                    height
                };
            });
        } catch (error) {
            console.error(`[CongresoPage] Error leyendo la carpeta ${folderName}:`, error);
            return [];
        }
    };

    // Obtenemos las imágenes de ambas carpetas
    let day1Images = getImagesForDay('CONGRESO DÍA 1', 1);
    let day2Images = getImagesForDay('CONGRESO DÍA 2', 2);

    // OPCIONAL: Si las carpetas están vacías, podemos mostrar las de prueba temporalmente para no romper la web.
    // Esto se puede eliminar cuando subas las fotos reales.
    if (day1Images.length === 0) {
        day1Images = Array.from({ length: 15 }).map((_, i) => ({
            id: `day1-mock${i}`,
            thumbnail: `https://picsum.photos/400/300?random=1${i}`,
            full: `https://picsum.photos/800/600?random=1${i}`,
            alt: `Mock Día 1 - Foto ${i + 1}`,
            width: 800, height: 600
        }));
    }
    
    if (day2Images.length === 0) {
        day2Images = Array.from({ length: 15 }).map((_, i) => ({
            id: `day2-mock${i}`,
            thumbnail: `https://picsum.photos/400/300?random=2${i}`,
            full: `https://picsum.photos/800/600?random=2${i}`,
            alt: `Mock Día 2 - Foto ${i + 1}`,
            width: 800, height: 600
        }));
    }

    return <CongresoFotosClient day1Images={day1Images} day2Images={day2Images} />;
}