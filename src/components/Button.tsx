type Props = {
  children: string
  size?: 'big' | 'medium' | 'small'
  secondary?: boolean
}

export function Button ({
  children,
  size = 'medium',
  secondary,
  ...props
}: Props) {
  let style: any = {
    paddingTop: '1rem',
    paddingBottom: '1rem',
    margin: '0.2rem'
  }

  if (size === 'big') {
    style.paddingTop = '1.5rem'
    style.paddingBottom = '1.5rem'
  }

  if (size === 'small') {
    style.paddingTop = '0.5rem'
    style.paddingBottom = '0.5rem'
  }

  if (secondary) {
    style.backgroundColor = 'white'
    style.color = '#646cff'
    style.border = 'solid 1px #646cff'
  }

  return (
    <button className='button' style={style} {...props}>
      {children}
    </button>
  )
}
