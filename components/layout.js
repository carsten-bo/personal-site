import Footer from "./footer"
import Navbar from "./Navbar"
import Body from "./body"

export default function Layout({ children }) {
  return (
    <div class="flex flex-col h-screen">
      <header class="mt-auto"><Navbar /></header>
      <main class="flex-grow mt-auto"><Body>{children}</Body></main>
      <footer class="mt-auto"><Footer /></footer>
    </div>
  )
}
