import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {displayText, tabId} = tabDetails

  const onChangeTab = () => clickTabItem(tabId)

  const styleTab = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button className={styleTab} type="button" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
