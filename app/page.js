import Link from 'next/link';

import "./page.css";
import Main from "/src/componets/Main/Main.jsx"

export default function Home() {
  return (
    <>
      <Link href="/founders">Founders</Link>
      <Main />
    </>
    
  );
}
