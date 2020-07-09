import Link from 'next/link'

const Header = ({ deckId }) => (
  <header className="flex items-center justify-between flex-wrap bg-gray-700 p-3 flex-shrink-0">
    <div>
      <div className="w-full block flex-grow lg:flew lg:items-center lg:w-auto">
        <Link href="/">
          <div className="py-2 px-4 cursor-pointer">
            <svg className="w-6 h-6 fill-current text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path class="heroicon-ui" d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z"/></svg>
          </div>
        </Link>
      </div>
      {/* <p>Studying deck {deckId}</p> */}
      {/* if deck id is present here, fetch the progress for the header bar */}
    </div>
  </header >
)

export default Header
