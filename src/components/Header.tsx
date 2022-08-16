import { Link } from '@mui/material'
import { links } from '../data/links'

export function Header () {
  return (
    <header>
      <nav>
        <ul>
          {links.map(link => (
            <li>
              <Link href={`/${link.toLowerCase().replaceAll(' ', '-')}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
