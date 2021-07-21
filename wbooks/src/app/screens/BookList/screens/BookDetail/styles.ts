import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { CERULEAN, MONZA, WHITE, BLACK, TUNDORA, ATLANTIS } from '@constants/colors';
import { FONT_REGULAR, FONT_SEMIBOLD, FONT_LIGHT } from '@constants/fonts';

const BUTTON: ViewStyle = {
  borderRadius: 22,
  height: 44,
  justifyContent: 'center',
  width: 250
};

const BUTTON_TEXT: TextStyle = {
  fontWeight: FONT_SEMIBOLD,
  textAlign: 'center'
};

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 5,
    elevation: 1,
    margin: 20,
    marginTop: 120,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.05,
    shadowRadius: 1
  },
  bookContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 15,
    paddingLeft: 20
  },
  image: {
    height: 108,
    width: 80
  },
  rentButton: {
    ...BUTTON,
    marginBottom: 22
  },
  rentButtonText: {
    ...BUTTON_TEXT,
    color: WHITE
  },
  wishButton: {
    ...BUTTON,
    borderColor: CERULEAN,
    borderWidth: 1,
    marginBottom: 10
  },
  wishButtonText: {
    ...BUTTON_TEXT,
    color: CERULEAN
  },
  infoContainer: {
    flex: 1,
    marginRight: 20,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: FONT_REGULAR
  },
  availability: {
    fontSize: 15,
    fontWeight: FONT_REGULAR
  },
  available: {
    color: ATLANTIS
  },
  unavailable: {
    color: MONZA
  },
  text: {
    fontSize: 15,
    fontWeight: FONT_LIGHT,
    color: TUNDORA
  }
});
