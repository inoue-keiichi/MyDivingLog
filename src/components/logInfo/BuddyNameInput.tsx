import { FontAwesome } from '@expo/vector-icons';
import { IconButton, VStack } from 'native-base';
import React from 'react';
import i18n from '../../i18n/initI18n';
import { Props, useBuddyNameInput } from '../../model/logInfo/BuddyNameInput';
import { TextInput } from './TextInput';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';

export const BuddyNameInput = (
  props: Props & { style?: StyleProp<TextStyle> },
) => {
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
