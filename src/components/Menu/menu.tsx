import React from 'react'
import classNames from 'classnames'
import { IMenuItemProps } from './menuItem'

export interface IMenuProps {
  defaultIndex?: string,
  /* 设置input 禁用 */
  disabled?: boolean,
  /* 设置input 方向 */
  mode?: 'horizontal' | 'vertical',
  onSelect?: (selIndex: string) => void,
  className?: string,
  style?: React.CSSProperties,
  children?: React.ReactNode,
  defaultOpenSubMenus?: string[];
}

type MenuMode = 'horizontal' | 'vertical'

//在外层组件直接传入控制menuitem
interface IMenuContext {
  index: string,
  onSelect?: (selIndex: string) => void,
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export let MenuContext = React.createContext<IMenuContext>({ index: '0' })

/**
 * 标签栏
 * ### 引用方法
 * 
 * ~~~js
 * import { Menu } from 'speed-ui'
 * ~~~
 */
export const Menu: React.FC<IMenuProps> = (props) => {
  let { defaultIndex, disabled, onSelect, className, style, mode, children, defaultOpenSubMenus } = props
  const [currentActive, setActive] = React.useState(defaultIndex)

  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  //类似插槽chilren直接判断需要加载哪个组件
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<IMenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const providerMenuContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={providerMenuContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
}