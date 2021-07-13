import React from 'react';
import { View, Text, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '@interfaces/navigation';
import { ROUTES } from '@constants/navigation';
import placeholderImage from '@assets/img_book_placeholder.png';
import { ALTO, CERULEAN, MERCURY, TURQUOISE } from '@constants/colors';

import styles from './styles';

interface Props {
  route: RouteProp<RootStackParamList, ROUTES.bookDetail>;
}

function BookDetail({ route }: Props) {
  const { imageUrl, author, title, year, genre } = route.params;
  const isAvailable = Math.random() > 0.5;

  return (
    <View style={styles.container}>
      <View style={styles.bookContainer}>
        <Image
          style={styles.image}
          source={
            imageUrl
              ? {
                  uri: imageUrl
                }
              : placeholderImage
          }
        />
        <View style={styles.infoContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text style={[styles.availability, isAvailable ? styles.available : styles.unavailable]}>
            {isAvailable ? 'Available' : 'Unavailable'}
          </Text>
          <Text style={styles.text}>{author}</Text>
          <Text style={styles.text}>{year}</Text>
          <Text style={styles.text}>{genre}</Text>
        </View>
      </View>
      <View style={styles.wishButton}>
        <Text style={styles.wishButtonText}>ADD TO WISHLIST</Text>
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0 }}
        colors={isAvailable ? [CERULEAN, TURQUOISE] : [ALTO, MERCURY]}
        {...(!isAvailable && { locations: [0.4523, 1] })}
        style={styles.rentButton}>
        <Text style={styles.rentButtonText}>RENT</Text>
      </LinearGradient>
    </View>
  );
}

export default BookDetail;
