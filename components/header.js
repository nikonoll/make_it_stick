import Link from 'next/link';
import ProgressBar from './study/progress_bar';

const Header = ({ deckId }) => (
  <header className="flex items-center justify-between flex-wrap p-2 flex-shrink-0">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex-0 py-2 pl-2 pr-6 cursor-pointer">
          <Link href="/">
            <svg className="w-6 h-6 fill-current text-black hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M13 20v-5h-2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.59l-.3.3a1 1 0 1 1-1.4-1.42l9-9a1 1 0 0 1 1.4 0l9 9a1 1 0 0 1-1.4 1.42l-.3-.3V20a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm5 0v-9.59l-6-6-6 6V20h3v-5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5h3z" /></svg>
          </Link>
        </div>
        <div className="flex-1 px-2 text-xs">daily progress:</div>
        <div className="flex-0 px-2 mt-2">
          {/* pass in % of studied cards for the day into progress bar */}
          <ProgressBar key={1} completed={6} />
      </div>
      <div className="flex-0 pl-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" /></svg>
      </div>
      {/* <p>Studying deck {deckId}</p> */}
      {/* if deck id is present here, fetch the progress for the header bar */}
    </div>
  </header >
)

export default Header
