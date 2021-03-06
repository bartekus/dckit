import React, { ComponentType, ComponentProps } from 'react'
import { List, Divider } from '@material-ui/core'
import {
  SideBarItem,
  ISideBarItem,
  ISideBarDivider,
  ISideBarCustomItem,
} from '../Item'
import { SideBarRouteItem, ISideBarRouteItem } from '../RouteItem'

export type INavigationItem =
  | ISideBarItem
  | ISideBarRouteItem
  | ISideBarDivider
  | ISideBarCustomItem

interface ISideBarNavigation {
  items: INavigationItem[]
  ListComponent?: ComponentType
  listProps?: ComponentProps<any>
}

export const SideBarNavigation = ({
  items,
  ListComponent = List,
  listProps = {},
}: ISideBarNavigation) => (
  <ListComponent {...listProps}>
    {items.map((item, index) => {
      const itemId = `sidebar-item-${('id' in item && item.id) || index}`

      if ('divider' in item && item.divider) {
        return <Divider key={itemId} />
      }
      if ('component' in item && item.component) {
        return <item.component key={itemId} {...item} />
      }
      if ('route' in item && item.route) {
        return (
          <SideBarRouteItem
            key={itemId}
            {...item}
            route={item.route}
            id={itemId}
          />
        )
      }
      return <SideBarItem key={itemId} {...item} id={itemId} />
    })}
  </ListComponent>
)
