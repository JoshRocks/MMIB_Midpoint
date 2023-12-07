import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import FcardStyle from './Fcard-style'

const FilterCard = ({filterName, functionality}) => {
  return (
    <TouchableOpacity onPress={functionality}>
        <Text>
        {filterName}
      </Text>
    </TouchableOpacity>
  )
}

export default FilterCard