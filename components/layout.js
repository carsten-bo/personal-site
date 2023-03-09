import Footer from "./Footer"
import Navbar from "./Navbar"
import Body from "./Body"

export default function Layout({ children }) {
  return (
    <div class="flex flex-col h-screen bg-slate-100">
      <header class="mt-auto"><Navbar /></header>
      <main class="flex-grow"><Body>{children}</Body></main>
      <footer class="mt-auto"><Footer /></footer>
    </div>
  )
}
