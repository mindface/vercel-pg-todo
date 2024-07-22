import Link from "next/link";

interface Props {
  title: string;
}

const navList = [
  { id: "nav1", name: "home", path: "/" },
  { id: "nav2", name: "todo", path: "/todo" },
];

export default function BaseHeader(props: Props) {
  return (
    <header className="base-header">
      <div className="header--body">
        <h1 className="header__title p-4">{ props.title }</h1>
        <nav className="header__nav">
          {navList.map((item) => <Link key={item.id} href={item.path} className="p-4">{item.name}</Link>)}
        </nav>
      </div>
    </header>
  );
}
