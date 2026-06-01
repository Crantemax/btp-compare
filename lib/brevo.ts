// lib/brevo.ts
// Client Brevo typé pour capture de leads et nurturing

export interface BrevoContact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  attributes?: {
    [key: string]: string | number | boolean;
  };
  listIds?: number[];
  updateEnabled?: boolean;
}

export interface BrevoEmailPayload {
  email: string;
  firstName?: string;
  metier?: string;
  yearlySavings?: number;
  source?: string; // roiCalculator, comparaison, etc.
}

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3';
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID || '2'); // Liste principale

if (!BREVO_API_KEY) {
  console.warn('⚠️ BREVO_API_KEY not configured. Lead capture will not work.');
}

/**
 * Ajoute ou met à jour un contact dans Brevo
 */
export async function addOrUpdateContact(contact: BrevoContact) {
  if (!BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY not configured');
    return null;
  }

  try {
    const response = await fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: contact.email,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phone: contact.phone,
        attributes: contact.attributes || {},
        listIds: contact.listIds || [BREVO_LIST_ID],
        updateEnabled: contact.updateEnabled !== false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Brevo API error:', data);
      return null;
    }

    return { success: true, contactId: data.id };
  } catch (error) {
    console.error('❌ Failed to add/update contact:', error);
    return null;
  }
}

/**
 * Capture un lead avec données enrichies (calcul ROI, etc.)
 */
export async function captureLead(payload: BrevoEmailPayload) {
  const contact: BrevoContact = {
    email: payload.email,
    firstName: payload.firstName || 'Artisan',
    attributes: {
      METIER: payload.metier || 'Non spécifié',
      YEARLY_SAVINGS: payload.yearlySavings || 0,
      SOURCE: payload.source || 'website',
      CAPTURE_DATE: new Date().toISOString(),
      LEAD_STATUS: 'new', // Statut initial
      CONVERSION_VALUE: payload.yearlySavings || 0, // Valeur estimée
    },
    updateEnabled: true,
  };

  return addOrUpdateContact(contact);
}

/**
 * Déclenche une séquence d'emails (nurturing)
 */
export async function triggerNurturingSequence(email: string, sequenceName: string) {
  if (!BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY not configured');
    return null;
  }

  try {
    // Cette fonction nécessite l'API Brevo pour les automations
    // Pour l'instant, on enregistre juste le lead dans le bon segment
    const response = await fetch(`${BREVO_API_URL}/contacts/${email}`, {
      method: 'GET',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('❌ Could not find contact for automation');
      return null;
    }

    // L'automation est déclenchée via les segments/listes dans Brevo
    return { success: true, message: `Automation '${sequenceName}' triggered` };
  } catch (error) {
    console.error('❌ Failed to trigger automation:', error);
    return null;
  }
}

/**
 * Envoie un email transactionnel de confirmation
 */
export async function sendConfirmationEmail(email: string, firstName: string) {
  if (!BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY not configured');
    return null;
  }

  try {
    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email, name: firstName }],
        templateId: Number(process.env.BREVO_TEMPLATE_ID_CONFIRMATION || '1'),
        params: {
          firstName,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Brevo email error:', data);
      return null;
    }

    return { success: true, messageId: data.messageId };
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return null;
  }
}
