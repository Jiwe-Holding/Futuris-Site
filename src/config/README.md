# Configuration de l'API Email

Ce fichier contient la configuration pour l'envoi d'emails via l'API Jiwe Holding.

## 📋 Configuration requise

1. Ouvrez le fichier `src/config/api.ts`
2. Remplacez `YOUR_TOKEN_HERE` par votre token d'API réel

```typescript
export const EMAIL_API_CONFIG = {
  url: 'https://saas.jiwe-holding.online/api/mailer/send-email/',
  token: 'VOTRE_VRAI_TOKEN_ICI', // ⚠️ Remplacer cette valeur
  senderEmail: 'contact@futuris-group.com',
  senderName: 'FUTURIS_GROUP',
  organisation: 'Futuris Group'
};
```

## 🔐 Sécurité

⚠️ **Important** : Ne commitez jamais votre token d'API dans le repository public.

Pour une meilleure sécurité en production, considérez :
- Utiliser des variables d'environnement
- Stocker le token dans un service de secrets management
- Implémenter un backend proxy pour les appels API

## 📧 Fonctionnalités

Le chatbot envoie deux types d'emails :

### 1. Email de résumé au client
- **Destinataire** : L'utilisateur qui a rempli le formulaire
- **Contenu** : Résumé de la conversation avec le chatbot
- **Sujet** : "Résumé de votre conversation - [Date]"

### 2. Email de notification à l'équipe
- **Destinataire** : contact@futuris-group.com
- **Contenu** : Informations du prospect + parcours de navigation
- **Sujet** : "Nouvelle demande de contact - [Nom du prospect]"

## 🔧 Format de la requête API

```json
{
  "sender_email": "email@exemple.com",
  "sender_name": "NOM_EXPEDITEUR",
  "organisation": "Nom de l'entreprise",
  "sujet": "Sujet de l'email",
  "message": "Contenu du message",
  "noms": ["Destinataire1", "email@exemple.com"]
}
```

## 🚀 Test de l'intégration

Pour tester l'intégration :
1. Configurez votre token d'API
2. Lancez l'application : `npm run dev`
3. Ouvrez le chatbot
4. Complétez le parcours et soumettez vos coordonnées
5. Vérifiez la réception des emails

## ❓ Dépannage

Si les emails ne sont pas envoyés :
- Vérifiez que le token est correct dans `api.ts`
- Consultez la console du navigateur pour les erreurs
- Vérifiez que l'API est accessible à `https://saas.jiwe-holding.online/api/mailer/send-email/`
- Assurez-vous que les headers d'autorisation sont correctement configurés

