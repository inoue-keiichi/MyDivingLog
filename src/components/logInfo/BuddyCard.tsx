import React, { useState } from 'react';
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  TextArea,
  Fab,
  Icon,
  IconButton,
} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import i18n from '../../i18n/initI18n';

type Props = {
  name: string;
  defaultComment?: string;
  onPress: () => void;
  onChangeText: (text: string) => void;
};

export const BuddyCard: React.FC<Props> = (props: Props) => {
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: 'coolGray.600',
        backgroundColor: 'gray.700',
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: 'gray.50',
      }}>
      <Stack p="4" space={2}>
        <HStack alignItems="center">
          <Heading size="md">{props.name}</Heading>
          <IconButton
            icon={<Icon as={FontAwesome5} name="minus" />}
            size="sm"
            variant="solid"
            borderRadius="full"
            ml="auto"
            onPress={props.onPress}
          />
        </HStack>
        <TextArea
          w="100%"
          autoCompleteType={undefined}
          placeholder={i18n.t('log.buddy.placeholder')}
          defaultValue={props.defaultComment}
          onChangeText={props.onChangeText}
        />
      </Stack>
    </Box>
  );
};
