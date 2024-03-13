function Header() {
  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-zinc-800 bg-zinc-950/70 px-6 shadow-xl backdrop-blur-sm transition-all duration-300 lg:px-24`}
    >
      <div>
        <h2 className="hidden cursor-default text-xl font-semibold text-white lg:block lg:text-3xl">
          <span className="text-green-600">Marcos Raach</span>
        </h2>
      </div>
    </header>
  )
}

export default Header