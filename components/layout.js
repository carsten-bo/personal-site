import Footer from "./footer"
import Navbar from "./navbar"
import Body from "./body"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <header className="mt-auto"><Navbar /></header>
      <main className="flex-grow"><Body>{children}</Body></main>
      <footer className="mt-auto"><Footer /></footer>
    </div>
  )
}
