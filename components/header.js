import Link from 'next/link'

const Header = ({ deckId }) => (
  <header className="header">
    <div>
      <div className="linkbox">
        <Link href="/">
          <a className="headerlink">Home</a>
        </Link>
      </div>
      <p>Studying deck {deckId}</p>
      {/* if deck id is present here, fetch the progress for the header bar */}
    </div>
    <style jsx>{`

    .header {
      font-size: 12px;
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
