# Captures WhatsApp — preuves sociales

Ce dossier contient les **4 captures d'écran WhatsApp réelles** fournies
par le client, converties en JPEG et déjà floutées :

```
temoignage-1.jpg
temoignage-2.jpg
temoignage-3.jpg
temoignage-4.jpg
```

(seules 4 captures ont été fournies à ce jour ; pour en ajouter d'autres,
déposer le fichier ici et l'ajouter au tableau `images.socialProof` dans
`src/config/product.ts`).

## Floutage appliqué

Sur chaque capture, ont été floutés (flou gaussien) :

- la photo de profil / avatar du client (les deux occurrences quand il y en
  a deux, ex. avatar de la bulle d'en-tête et avatar du message vocal) ;
- le numéro de téléphone visible en haut de la conversation ;
- **uniquement la troisième ligne** du lien de téléchargement Google Drive
  partagé dans la conversation (ex. `rsTTy6590oaKYoXkCSeW_HV2Y`) — le reste
  du lien (`https://drive.google.com/drive/folders/1o5FQGP-`) reste visible
  pour l'authenticité, mais n'est pas exploitable seul.

Le contenu des échanges (messages, horodatages) n'a pas été modifié.

Tant qu'un fichier référencé dans `product.ts` n'est pas présent ici, un
emplacement clairement identifié s'affiche à sa place (aucun témoignage
n'est inventé).
