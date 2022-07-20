import { FontAwesome } from '@expo/vector-icons';
import { IconButton, VStack } from 'native-base';
import React, { useState } from 'react';
import i18n from '../../i18n/initI18n';
import { useBuddyNameInput } from '../../model/logInfo/BuddyNameInput';
import { TextInput } from './TextInput';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

type Props = {
  style?: StyleProp<TextStyle>;
  onChangeText: (text: string) => void;
  onPress: (text: string) => void;
};

export const BuddyNameInput = (props: Props) => {
  const model = useBuddyNameInput(props);

  return (
    <TextInput
      value={model.name}
      label={i18n.t(`log.buddy.title`)}
      style={props.style}
      onChangeText={model.onChangeText}
      InputRightElement={
        <IconButton
          _icon={{
            as: FontAwesome,
            name: 'plus',
          }}
          variant="solid"
          rounded="none"
          w="1/4"
          h="full"
          isDisabled={model.disabled}
          onPress={model.onPress}
        />
      }
    />
  );
};
