import { useInView } from '../hooks'

export default function Reveal({ children, delay = 0, className = '', style, as: Tag = 'div', ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'in' : ''} ${className}`}
      style={{ '--d': `${delay}s`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
