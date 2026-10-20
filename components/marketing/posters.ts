
export const WHATSAPP_NUMBER = "254790174570";

export interface Poster {
  id: string;
  /** Path under /public, e.g. "/posters/training-2.jpeg" */
  image: string;
  /** Pixel size of the image file. Used to show the poster uncropped at its own shape. */
  width: number;
  height: number;
  alt: string;
  /** Message pre-filled in WhatsApp when the visitor taps the button. */
  whatsappMessage: string;
  /** Button label. Defaults to "Enrol on WhatsApp". */
  ctaLabel?: string;
}

export const POSTERS: Poster[] = [
  {
    id: "2026-intake",
    image: "/posters/november.jpeg",
    width: 1024,
    height: 1536,
    alt: "Zian Safe Harbour Care September 2026 intake is open",
    whatsappMessage:
      "Hello Zian Safe Harbour Care, I saw the September 2026 intake poster and I would like to enrol in the caregiver training.",
    ctaLabel: "Enrol Now",
  },
  {
    id: "september-your-turn",
    image: "/posters/november2.jpeg",
    width: 904,
    height: 1280,
    alt: "September is your turn: September 2026 intakes now open at Zian Safe Harbour Care",
    whatsappMessage:
      "Hello Zian Safe Harbour Care, I saw the September 2026 intakes poster and I would like to know more about the training programmes.",
    ctaLabel: "Enrol Now",
  },
];