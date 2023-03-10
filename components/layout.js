import Footer from "./Footer"
import Navbar from "./Navbar"
import Body from "./Body"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <header className="mt-auto"><Navbar /></header>
      <main className="flex-grow"><Body>{children}</Body></main>
      <footer className="mt-auto"><Footer /></footer>
    </div>
  )
}
