import Link from "next/link"
import { GiTurtleShell } from "react-icons/gi"

const Header = () => {
  const links = [
    { content: "ユーザ情報", path: "/user" },
    { content: "謎を作る", path: "/create" },
    { content: "お気に入り", path: "/favorite" },
    // TODO: login, logoutで出し分けられるように
    { content: "login", path: "/login" },
    { content: "logout", path: "/logout" },
  ]
  return (
    <nav className="flex items-center justify-between flex-wrap bg-green-400 p-6">
      <Link href="/top">
        <GiTurtleShell size={50} color={"white"} />
      </Link>
      {links.map(({ content, path }) => (
        <Link key={path} href={path} className="text-white">
          {content}
        </Link>
      ))}
    </nav>
  )
}

export default Header
