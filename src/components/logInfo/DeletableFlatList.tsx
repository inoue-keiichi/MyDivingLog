import { FlatList } from 'native-base';
import React from 'react';
import { ListRenderItem } from 'react-native';
import { BuddyCard } from './BuddyCard';

type Props<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
};

export const DeletableFlatList = <T,>(props: Props<T>) => {
  return <FlatList data={props.data} renderItem={props.renderItem} />;
};
