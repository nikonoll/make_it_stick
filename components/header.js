import Link from 'next/link'

const Header = () => (
  <header className="header">
    <div>
      <div className="linkbox">
        <Link href="/">
          <a className="headerlink">Home</a>
        </Link>
      </div>
      <div className="linkbox">
        <Link href="/deck/[deck]" as="/deck/first">
          <a className="headerlink">First deck</a>
        </Link>
      </div>
      <div className="linkbox">
        <Link href="/deck/[deck]" as="/deck/second">
          <a className="headerlink">Second dekc</a>
        </Link>
      </div>
    </div>
    <style jsx>{`

    .header {
      font-size: 24px;
      text-decoration: none;
      float: left;
      margin-top: 30px;
    }
    .linkbox {
      border: 3px solid black;
      border-radius: 15%;
      padding: 10px;
      margin: 20px;
    }
    .headerlink {
      color: black;
      text-decoration: none;
      text-transform: uppercase;
    }
    `}</style>
  </header>
)

export default Header
