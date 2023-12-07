import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import FilterCard from './FilterCard';
import FcardStyle from './Fcard-style';

const FilterCardList = ({filtersList, selectFilter}) => {
  return (
    <SafeAreaView>
        <ScrollView horizontal contentContainerStyle={FcardStyle.cardHolder}>
        {filtersList.map((item, index) => (
          <FilterCard
            key={index}
            filterName={item}
            functionality={() => {
              selectFilter(item);
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default FilterCardList