import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/navigation';
import { ROUTES } from '@constants/routes';

interface Props {
  route: RouteProp<RootStackParamList, ROUTES.bookDetail>;
}

function BookDetail({ route }: Props) {
  const { title } = route.params;

  return (
    <View>
      <Text>Book detail - {title}</Text>
    </View>
  );
}

export default BookDetail;
