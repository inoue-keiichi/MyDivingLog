import { useState } from 'react';
import { Buddy } from './Buddy';

export type Props = {
  buddies: Buddy[];
  setBuddies: (value: React.SetStateAction<Buddy[]>) => void;
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
    props.setBuddies([...props.buddies, new Buddy(name!)]);
    setName(undefined);
    setDisabled(true);
  };

  return { name, disabled, onChangeText, onPress };
};
