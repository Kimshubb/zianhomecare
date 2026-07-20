import { FaWhatsapp } from "react-icons/fa6";

const PHONE = "254790174570";

const MESSAGE = encodeURIComponent(
  "Hello! I'm interested in learning more about your home care services."
);

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-110
        hover:shadow-green-500/30
      "
    >
      <FaWhatsapp size={34} />
    </a>
  );
}