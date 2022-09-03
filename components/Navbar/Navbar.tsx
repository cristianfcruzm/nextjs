import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Container } from 'semantic-ui-react'
import { Avocado, About } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size="huge" borderless pointing as="header">
      <Container text>
      <Menu.Menu position="left">
      <Link href="/AcercaDe" passHref>
          <Menu.Item
            active={pathname === '/AcercaDe'}
            title="Inicio | Todos los productos"
          >
            <About />
            Acerca de
          </Menu.Item>
        </Link>
        </Menu.Menu>
        <Link href="/" passHref>
          <Menu.Item
            active={pathname === '/'}
            title="Inicio | Todos los productos"
          >
            <Avocado />
            Aguacate Store
          </Menu.Item>
        </Link>
        <Menu.Menu position="right">
          <Link href="/cart" passHref>
            <Menu.Item active={pathname === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
