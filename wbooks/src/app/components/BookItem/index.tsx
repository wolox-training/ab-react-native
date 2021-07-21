import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { BookDetail } from '@interfaces/books';
import placeholderImage from '@assets/img_book_placeholder.png';

import styles from './styles';

interface Props {
  book: BookDetail;
  onPress: (book: BookDetail) => void;
}

function BookItem({ book, onPress }: Props) {
  const handlePress = () => onPress(book);
  const { imageUrl, title, author } = book;

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={imageUrl ? { uri: imageUrl } : placeholderImage}
      />
      <View style={styles.bookInfoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
