import fs from 'node:fs';
import path from 'node:path';

/**
 * Vérifie, au moment du build (côté serveur uniquement), si une image
 * référencée dans public/ existe réellement. Permet d'afficher un
 * emplacement clairement identifié tant que l'image finale n'a pas
 * été fournie, plutôt qu'une image cassée ou un faux visuel.
 */
export function imageExists(publicPath: string): boolean {
  try {
    const filePath = path.join(process.cwd(), 'public', publicPath);
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}
