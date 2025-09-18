# cardonaut-camera-view

> Fork de capacitor-camera-view avec support du verrouillage d'orientation

[![npm version](https://badge.fury.io/js/cardonaut-camera-view.svg)](https://badge.fury.io/js/cardonaut-camera-view)

Un plugin Capacitor pour intégrer un flux de caméra en direct directement dans votre application, avec support du verrouillage d'orientation pour éviter les photos à l'envers sur Android.

## 🆕 Nouvelles fonctionnalités

### Verrouillage d'orientation (`lockOrientation`)

Cette fonctionnalité permet de forcer l'orientation des photos prises, indépendamment de l'orientation de l'appareil :

- `'portrait'` : Force l'orientation portrait (le haut de la photo correspond au haut du smartphone)
- `'landscape'` : Force l'orientation paysage  
- `'none'` : Suit l'orientation de l'appareil (comportement par défaut)

```typescript
import { CameraView } from 'cardonaut-camera-view';

// Démarrer la caméra avec verrouillage en portrait
await CameraView.start({
  position: 'back',
  lockOrientation: 'portrait' // 🆕 Nouvelle option
});

// Prendre une photo (sera toujours en portrait)
const result = await CameraView.capture({
  quality: 90,
  saveToFile: false
});
```

## Installation

```bash
npm install cardonaut-camera-view
npx cap sync
```

## Utilisation

Identique au plugin original, avec l'ajout du paramètre `lockOrientation` :

```typescript
import { CameraView, OrientationLock } from 'cardonaut-camera-view';

const config = {
  position: 'back' as CameraPosition,
  enableBarcodeDetection: false,
  lockOrientation: 'portrait' as OrientationLock, // 🆕
  zoomFactor: 1.0
};

await CameraView.start(config);
const photo = await CameraView.capture({ quality: 85 });
await CameraView.stop();
```

## Cas d'usage

- **Applications de scan de documents** : `lockOrientation: 'portrait'`
- **Photos d'identité** : `lockOrientation: 'portrait'`  
- **Applications de réalité augmentée** : `lockOrientation: 'landscape'`
- **Usage général** : `lockOrientation: 'none'` (défaut)

## Compatibilité

- ✅ Android
- ✅ iOS  
- ✅ Rétrocompatible avec le plugin original

## Crédits

Ce fork est basé sur [capacitor-camera-view](https://github.com/michaelwolz/capacitor-camera-view) par Michael Wolz.

## License

Apache-2.0
