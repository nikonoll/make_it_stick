import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/deck/[deck]" as="/deck/first">
          <a>First deck</a>
        </Link>
      </li>
      <li>
        <Link href="/deck/[deck]" as="/deck/second">
          <a>Second dekc</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
