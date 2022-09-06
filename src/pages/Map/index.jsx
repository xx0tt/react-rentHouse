import React, { Fragment } from 'react'
import Header from '../../components/Header'
// import { APILoader, Map } from '@uiw/react-amap'
import MapComponent from './MapContainer'

export default function Map() {
  return (
    <Fragment>
      <Header>地图找房</Header>
      <MapComponent />
    </Fragment>
  )
}
