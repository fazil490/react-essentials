const TabButton = ({children, isSelected, ...props}) => {
  return (
    <div>
        <li>
            <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
        </li>
    </div>
  )
}

export default TabButton