export default function Header() {
  return (
    <nav className="flex justify-between text-white pt-4 pb-8 border-b border-gray/5">
      <a className="font-bold text-xl">
        <img src="/images/shared/desktop/logo.svg" alt="logo" />
      </a>
      <div className="flex gap-6">
        <a className="hover:text-orange">HOME</a>
        <a className="hover:text-orange">HEADPHONES</a>
        <a className="hover:text-orange">SPEAKERS</a>
        <a className="hover:text-orange">EARPHONES</a>
      </div>
      <a>
        <img src="/images/cart/cartIcon.svg" alt="cart" />
      </a>
    </nav>
  );
}
