import Link from 'next/link'

const Header = ({ deckId }) => (
  <header className="flex items-center justify-between flex-wrap bg-blue-500 p-3 flex-shrink-0">
    <div>
      <div className="w-full block flex-grow lg:flew lg:items-center lg:w-auto">
        <Link href="/">
          <a className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Home</a>
        </Link>
      </div>
      {/* <p>Studying deck {deckId}</p> */}
      {/* if deck id is present here, fetch the progress for the header bar */}
    </div>
  </header>
)

export default Header
