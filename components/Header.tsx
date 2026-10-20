import Link from 'next/link'


export default function Header() {
  return (

    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">SUUqify</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link href="/Home">Home</Link></li>
      <li>
        <Link href="/product">product</Link></li>
      <li><Link href="/About">About</Link></li>
    </ul>
  </div>
</div>
    </div>
  )
}

