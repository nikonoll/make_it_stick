import Link from 'next/link'

const Header = () => (
  <header className="header">
    <div>
      <div className="linkbox">
        <Link href="/">
          <a className="headerlink">Home</a>
        </Link>
      </div>
    </div>
    <style jsx>{`

    .header {
      font-size: 24px;
      text-decoration: none;
    }
    .linkbox {
    }
    .headerlink {
    }
    `}</style>
  </header>
)

export default Header
