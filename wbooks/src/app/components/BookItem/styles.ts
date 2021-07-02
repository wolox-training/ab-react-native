import { BLACK, TUNDORA, WHITE } from '@constants/colors';
import { FONT_SEMIBOLD } from '@constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    shadowColor: BLACK,
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 1
  },
  image: {
    height: 60,
    marginRight: 20,
    width: 40
  },
  bookInfoContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  title: {
    color: TUNDORA,
    fontSize: 17,
    fontWeight: FONT_SEMIBOLD,
    letterSpacing: -0.41,
    lineHeight: 20,
    marginBottom: 3
  },
  author: {
    color: TUNDORA,
    fontSize: 15,
    letterSpacing: -0.24,
    lineHeight: 17
  }
});

export default styles;
