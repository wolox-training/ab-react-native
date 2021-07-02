import React from 'react';
import { Book } from '@interfaces/books';
import { Image, Text, View } from 'react-native';
import placeholderImage from '@assets/images/img_book_placeholder.png';

import styles from './styles';

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const { imageUrl, title, author } = book;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={imageUrl ? { uri: imageUrl, method: 'GET' } : placeholderImage}
      />
      <View style={styles.bookInfoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
