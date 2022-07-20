import { useState } from 'react';
import { Buddy } from './Buddy';

export type Props = {
  onChangeText: (text: string) => void;
  onPress: (input: string) => void;
};

export const useBuddyNameInput = (props: Props) => {
  const [name, setName] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(true);

  const onChangeText = (text: string) => {
    setName(text);
    if (text === '') {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const onPress = () => {
    // props.setBuddies([...props.buddies, new Buddy(input!)]);
    props.onPress(name!);
    setName(undefined);
    setDisabled(true);
  };

  return { name, disabled, onChangeText, onPress };
};
